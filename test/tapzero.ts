'use strict'

import deepEqual, { CompareType } from "./fast-deep-equal";

const NEW_LINE_REGEX = /\n/g
const OBJ_TO_STRING = Object.prototype.toString
const AT_REGEX = new RegExp(
  // non-capturing group for 'at '
  '^(?:[^\\s]*\\s*\\bat\\s+)' +
  // captures function call description
  '(?:(.*)\\s+\\()?' +
  // captures file path plus line no
  '((?:\\/|[a-zA-Z]:\\\\)[^:\\)]+:(\\d+)(?::(\\d+))?)\\)$'
)

/** @type {string} */
let CACHED_FILE: string;

type TestFn = (test: Test) => (void | Promise<void>)

export default class Test {

  constructor(name: string, fn: TestFn, h: Harness) {
    this.name = name
    this.fn = fn
    this.harness = h
    this._result = {
      pass: 0,
      fail: 0
    }
    this.done = false
  }
  name: string;
  fn: TestFn;
  harness: Harness;
  private _result: { pass: number; fail: number };
  done: boolean;

  comment(msg: string): void {
    this.harness.report('# ' + msg)
  }

  report(msg: string): void {
    this.harness.report('# ' + msg)
  }

  deepEqual(actual: CompareType, expected: CompareType, msg: string): void {
    // deepEqual('foo', 'bar')
    this._assert(
      deepEqual(actual, expected), actual, expected,
      msg || 'should be equivalent', 'deepEqual'
    )
  }

  notDeepEqual(actual: CompareType, expected: CompareType, msg: string): void {
    this._assert(
      !deepEqual(actual, expected), actual, expected,
      msg || 'should not be equivalent', 'notDeepEqual'
    )
  }

  equal(actual: CompareType, expected: CompareType, msg: string): void {
    this._assert(
      actual == expected, actual, expected,
      msg || 'should be equal', 'equal'
    )
  }

  notEqual(actual: CompareType, expected: CompareType, msg: string): void {
    this._assert(
      actual != expected, actual, expected,
      msg || 'should not be equal', 'notEqual'
    )
  }

  fail(msg: string): void {
    this._assert(
      false, 'fail called', 'fail not called',
      msg || 'fail called', 'fail'
    )
  }

  ok(actual: CompareType, msg?: string): void {
    this._assert(
      !!actual, actual, 'truthy value',
      msg || 'should be truthy', 'ok'
    )
  }

  ifError(err: Error | null, msg: string): void {
    this._assert(
      !err, err, 'no error', msg || String(err), 'ifError'
    )
  }

  _assert(
    pass: boolean, actual: CompareType, expected: CompareType,
    description: string, operator: string
  ): void {
    if (this.done) {
      throw new Error(
        'assertion occurred after test was finished: ' + this.name
      )
    }

    const report = this.harness.report

    const prefix = pass ? 'ok' : 'not ok'
    const id = this.harness.nextId()
    report(`${prefix} ${id} ${description}`)

    if (pass) {
      this._result.pass++
      return
    }

    const atErr = new Error(description)
    let err = atErr
    if (actual instanceof Error) {
      err = /** @type {Error} */ (actual as Error)
      actual = err.message
    }

    this._result.fail++
    report('  ---')
    report(`    operator: ${operator}`)

    let ex = JSON.stringify(expected, null, '  ') || 'undefined'
    let ac = JSON.stringify(actual, null, '  ') || 'undefined'
    if (Math.max(ex.length, ac.length) > 65) {
      ex = ex.replace(NEW_LINE_REGEX, '\n      ')
      ac = ac.replace(NEW_LINE_REGEX, '\n      ')

      report(`    expected: |-\n      ${ex}`)
      report(`    actual:   |-\n      ${ac}`)
    } else {
      report(`    expected: ${ex}`)
      report(`    actual:   ${ac}`)
    }

    const at = findAtLineFromError(atErr)
    if (at) {
      report(`    at:       ${at}`)
    }

    report('    stack:    |-')
    const st = (err.stack || '').split('\n')
    for (const line of st) {
      report(`      ${line}`)
    }

    report('  ...')
  }

  async run() {
    this.report('# ' + this.name)
    const maybeP = this.fn(this)
    if (maybeP && typeof maybeP.then === 'function') {
      await maybeP
    }
    this.done = true
    return this._result
  }
}

function getTapZeroFileName(): string {
  if (CACHED_FILE) return CACHED_FILE

  const e = new Error('temp')
  const lines = (e.stack || '').split('\n')

  for (const line of lines) {
    const m = AT_REGEX.exec(line)
    if (!m) {
      continue
    }

    let fileName = m[2]
    if (m[4] && fileName.endsWith(`:${m[4]}`)) {
      fileName = fileName.slice(0, fileName.length - m[4].length - 1)
    }
    if (m[3] && fileName.endsWith(`:${m[3]}`)) {
      fileName = fileName.slice(0, fileName.length - m[3].length - 1)
    }

    CACHED_FILE = fileName
    break
  }

  return CACHED_FILE || ''
}

function findAtLineFromError(e: Error): string {
  const lines = (e.stack || '').split('\n')
  const dir = getTapZeroFileName()

  for (const line of lines) {
    const m = AT_REGEX.exec(line)
    if (!m) {
      continue
    }

    if (m[2].slice(0, dir.length) === dir) {
      continue
    }

    return `${m[1] || '<anonymous>'} (${m[2]})`
  }
  return ''
}

export class Harness {

  constructor(report?: (lines: string) => void) {
    this.report = report || printLine
    this.tests = []
    this.onlyTests = []
    this.scheduled = false
    this._id = 0
  }

  report: (lines: string) => void;
  tests: Test[]
  onlyTests: Test[]
  scheduled: boolean
  _id: number

  nextId(): string {
    return String(++this._id)
  }

  add(name: string, fn: TestFn, only: boolean): void {
    // TODO: calling add() after run()
    const self = this
    const t = new Test(name, fn, this)
    const arr = only ? this.onlyTests : this.tests

    const run = () => {
      this.run().then(null, rethrowImmediate)
    }

    arr.push(t)
    if (!this.scheduled) {
      this.scheduled = true
      setTimeout(run, 0)
    }
  }

  async run() {
    const ts = this.onlyTests.length > 0
      ? this.onlyTests
      : this.tests

    this.report('TAP version 13')

    let total = 0
    let success = 0
    let fail = 0

    for (const test of ts) {
      // TODO: parallel execution
      const result = await test.run()

      total += result.fail + result.pass
      success += result.pass
      fail += result.fail
    }

    this.report('')
    this.report(`1..${total}`)
    this.report(`# tests ${total}`)
    this.report(`# pass  ${success}`)
    if (fail) {
      this.report(`# fail  ${fail}`)
    } else {
      this.report('')
      this.report('# ok')
    }
    // TODO: exitCode
  }
}

function printLine(line:string) {
  console.log(line)
}

const GLOBAL_HARNESS = new Harness()

export function test(name:string, fn:TestFn) {
  if (!fn) return
  GLOBAL_HARNESS.add(name, fn, false)
}

export function only(name:string, fn:TestFn) {
  if (!fn) return
  GLOBAL_HARNESS.add(name, fn, true)
}

export function skip(_name:string, _fn:TestFn) { }

function rethrowImmediate(err: Error) {
  setTimeout(rethrow, 0)

  function rethrow() { throw err }
}
