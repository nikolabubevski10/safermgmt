// eslint-disable-next-line no-undef
module.exports = {
  createOldCatalogs: false,
  indentation: 2,
  lexers: {
    js: ['JsxLexer'],
    ts: ['JsxLexer'],
    jsx: ['JsxLexer'],
    tsx: ['JsxLexer'],
    default: ['JsxLexer'],
  },
  locales: ['en'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  sort: true,
  useKeysAsDefaultValue: true,
  verbose: true,
};
