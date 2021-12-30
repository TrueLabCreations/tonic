/* eslint-disable */
const esbuild = require("esbuild")
const path = require("path")
const fs = require("fs")

async function main() {
  const root = path.join(__dirname, "..")
  const p = path.join(root, "src", "LiveElement.ts")

  try {
    esbuild.buildSync({
      entryPoints: [p],
      outdir: "./dist",
      minify: false,
      bundle: true,
      sourcemap: true,
      format: "cjs",
      target: "esnext",
      tsconfig: "./tsconfig.build.json",
    })

    esbuild.buildSync({
      entryPoints: [p],
      outdir: "./dist",
      minify: true,
      bundle: true,
      sourcemap: true,
      format: "esm",
      outExtension: {
        ".js": ".esm.js",
      },
      target: "esnext",
      tsconfig: "./tsconfig.build.json",
    })
  } catch (e) {
    console.log(`× Build failed due to an error.`)
    console.log(e)
  }
}

main()
