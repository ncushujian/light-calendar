import { terser } from "rollup-plugin-terser";

export default {
  entry: "./src/calendar.js",
  output: [
    {
      name: 'tCalendar',
      file: './dist/calendar.min.js',
      format: 'iife'
    },
    {
      name: 'tCalendar',
      file: './demo/calendar.esm.js',
      format: 'esm'
    },
    {
      name: 'tCalendar',
      file: './dist/calendar.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    terser()
  ]
};
