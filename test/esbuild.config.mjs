/* eslint-disable no-undef */
import fs from "fs";
import esbuild from "esbuild";
import watcher from 'watchr';
import { exec } from "child_process";

if (!fs.existsSync("./dist")) {
  fs.mkdirSync("./dist");
}

const devBuild = async () => {
  esbuild
    .build({
      entryPoints: ["./index.ts"],
      bundle: true,
      outfile: "./dist/index.js",
      minify: false,
      sourcemap: false,
      incremental: false,
      // target: ["node"],
      watch: {
        onRebuild(err) {

          if (err) {
            error("❌ Failed");
          }
          else {
            console.log("✅ Updated");
          };
        },
      },
    })
    .catch(() => process.exit(1));


  const stalker = watcher.open("./dist/index.js", async (changeType, fullPath) => {
    if (changeType === "update") {
      console.log("ChangeType ", changeType, " on ", fullPath);
      exec("type .\\dist\\index.js | ..\\node_modules\\.bin\\tape-run", (err, stdout, stderr) =>{
        if(err){
          console.log("Error: ", stderr)
        }
        else{
          console.log("Result: ", stdout);
        }
      },);
    }
  }, (err) => {
    if (err) return console.log('watch failed on with error', err);
    console.log('watch successful');
  });

  console.log("Stalker created");

  // stalker.close();
};

devBuild();
