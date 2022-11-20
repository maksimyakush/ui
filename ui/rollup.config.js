import ts from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: ["src/index.ts"],
  output: {
    dir: "lib",
    format: "cjs",
  },
  plugins: [
    ts(),
    commonjs(),
    resolve(),
    postcss({
      extract: true,
      extensions: [".css"],
      minimize: true,
      config: {
        path: "./postcss.config.js",
      },
    }),
    url(),
    svgr({ icon: true }),
    terser(),
  ],
  preserveModules: true,
  external: ["react", "react/jsx-runtime", "tailwind-merge"],
};
