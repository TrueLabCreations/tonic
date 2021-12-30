/* eslint-disable no-undef */
import fs from "fs";
import esbuild from "esbuild";
import serve, { error, log } from "create-serve";

if (!fs.existsSync("./dist")) {
  fs.mkdirSync("./dist");
}

fs.copyFile("./src/index.html", "./dist/index.html", (err) => {
  if (err) throw err;
});

const devBuild = async () => {
  esbuild
    .build({
      entryPoints: ["src/index.tsx"],
      bundle: true,
      outfile: "dist/bundle.js",
      minify: false,
      sourcemap: true,
      incremental: true,
      target: ["esnext"],
      define: {
        "process.env.NODE_ENV": '"development"',
      },
      watch: {
        onRebuild(err) {

          if (err) {
            error("❌ Failed");
          }
          else {
            serve.update();
            log("✅ Updated");
          };
        },
      },
    })
    .catch(() => process.exit(1));

  return serve.start({
    port: 5000,
    root: "./dist",
    live: true,
  });
};

const prodBuild = () => {
  esbuild
    .build({
      entryPoints: ["src/index.tsx"],
      bundle: true,
      outfile: "dist/bundle.js",
      minify: true,
      sourcemap: true,
      incremental: false,
      target: ["esnext"],
      define: {
        "process.env.NODE_ENV": '"production"',
      }
    })
    .catch(() => process.exit(1));
};

const args = process.argv;

if (args.indexOf("--dev") >= 0) {
  devBuild();
}
else {
  prodBuild();
}