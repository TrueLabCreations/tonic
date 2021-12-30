/* eslint-disable */
const esbuild = require("esbuild")
const path = require("path")
const fs = require("fs")

async function main() {
  const root = path.join(__dirname, "..")
  const p = path.join(root, "src", "LiveElement.ts")

  esbuild.build({
    entryPoints: [p],
    outdir: "./dist",
    minify: false,
    bundle: true,
    sourcemap: true,
    format: "cjs",
    // outExtension: {
    //   ".js": ".esm.js",
    // },
    target: "esnext",
    tsconfig: "./tsconfig.build.json",
    incremental: true,
    watch: {
      onRebuild(error) {
        if (error) {
          console.log(`× An error in prevented the rebuild.`)
          return
        }
        console.log(`✔ Rebuilt.`)
      },
    },
  })
}

main()
