module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  plugins: ["import"],
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
    indent: ["error", 2],
  },
  parser: "babel-eslint",
};
