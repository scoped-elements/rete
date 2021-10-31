import typescript from '@rollup/plugin-typescript';
import litcss from 'rollup-plugin-lit-css';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

const pkg = require('./package.json');

export default {
  input: `src/index.ts`,
  output: [{ dir: 'dist', format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash-es')
  external: [
    ...Object.keys(pkg.dependencies).filter(key => !key.includes('rete')),
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    replace({
      'document.elementFromPoint(e.clientX, e.clientY)': 'e.composedPath()[0]',
      'function ___$insertStyle(': 'function __(',
      '___$insertStyle(': 'export const styles = (',
      delimiters: ['', ''],
    }),
    litcss(),
    typescript({}),
    resolve({
      browser: true,
      mainFields: ['module', 'main'],
    }),
    commonjs(),
  ],
};
