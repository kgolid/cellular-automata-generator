import pkg from './package.json';

export default [
  {
    input: 'index.js',
    output: {
      name: 'cellular-automata-generator',
      file: pkg.browser,
      format: 'umd'
    }
  },
  {
    input: 'index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
