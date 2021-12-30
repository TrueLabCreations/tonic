/* eslint-disable */
const fs = require("fs")

function main() {
  if (fs.existsSync("./dist")) {
    fs.rmSync("./dist", { recursive: true }, (e) => {
      if (e) {
        throw e
      }
    })
  }
}

main()
