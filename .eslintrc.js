module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "airbnb"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/prefer-stateless-function": [
      0,
      { ignorePureComponents: "<ignorePureComponents>" }
    ],
    "comma-dangle": ["error", "never"],
    "import/no-extraneous-dependencies": ["error", {"packageDir": "./"}], // https://github.com/benmosher/eslint-plugin-import/issues/458
    "@typescript-eslint/explicit-function-return-type": 0,
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
