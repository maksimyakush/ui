import ts from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: ["src/index.ts"],
  output: {
    dir: "lib",
    format: 'cjs'
  },
  plugins: [
    ts(),
    commonjs(),
    resolve(),
    postcss({
      extract: true,
      modules: {
        generateScopedName: (name, filename, css) => {
          if (filename.includes("react-pdf-highlighter") || filename.includes("pdf-viewer") || filename.includes("pdfjs-dist")) {
            return name;
          }
          /*
           * NOTE:  The code below is from the default implementation of generateScopedName -- Jonathan Byrne 04/16/2021
           */
          const i = css.indexOf(`.${name}`);
          const lineNumber = css.substr(0, i).split(/[\r\n]/).length;
          const hash = stringHash(css).toString(36).substr(0, 5);

          return `_${name}_${hash}_${lineNumber}`;
        }
      },
      extensions: ['.css'],
      config: {
        path: './postcss.config.js'
    },
    }),

    url(),
    svgr({ icon: true }),
  ],
  preserveModules: true,
  external: ["react", "react/jsx-runtime", "classnames", 'tailwind-merge'],
};
