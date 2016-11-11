var gobble = require( 'gobble' ),
  info = require('./package.json'),
  src = gobble( 'src' ),
  lib,
  typescript = require('rollup-plugin-typescript')
  // ts = require('typescript');

// lib = gobble([
//   src
//     .observe( 'eslint' )
//     .transform( 'rollup-babel', {
//       format: 'umd',
//       transform: function ( src, path ) {
//         return src.replace( /<@version@>/g, info.version );
//       },
//       external: ['ractive'],
//       entry: 'main.js',
//       moduleName: 'LodeRactive',
//       dest: 'lodestar-ractive.js',
//       banner: `/* Lodestar-Ractive - ${info.version}. \nAuthor: Dan J Ford \nContributors: ${info.contributors} \nPublished: ${new Date()} */\n`
//     })
// ]);

// gobble( 'src' ).transform( 'typescript', {

//   target: ts.ScriptTarget.ES2015,
//   module: ts.ModuleKind.ES2015,
//   jsx: ts.JsxEmit.React,
// });

// lib = gobble([
//   src.transform('typescript', {
//     target: ts.ScriptTarget.umd,
//     module: ts.ModuleKind.umd,
//     entry: 'lodestar-ractive.ts'
//   })
// ])


lib = gobble( 'src' ).transform( 'rollup', {
  // REQUIRED - the file to start bundling from
  entry: 'lodestar-ractive.ts',

  // where to write the file to. If omitted,
  // will match the entry module's name
  dest: 'lodestar-ractive.js',

  // what type of module to create - can be one of
  // 'amd', 'cjs', 'es6', 'iife', 'umd'. Defaults to 'cjs'
  format: 'umd',

  // if generating a 'umd' module, and the entry module
  // (and therefore the bundle) has exports, specify
  // a global name
  moduleName: 'LodestarRacitve', // becomes `window.myApp`

  // if generated 'amd' or 'umd', you can specify a
  // moduleId which will be used by AMD loaders
  moduleId: 'my-app',

  // set export type explicitly - 'named', 'default' or 'none'.
  // By default this will be set automatically
  // exports: 'default',

  // disable caching, in case that's necessary for
  // some reason
  // cache: false
  plugins: [
    typescript()
  ]
});

module.exports = gobble([
  lib
  // lib.transform( 'uglifyjs', { ext: '.min.js' })
]);