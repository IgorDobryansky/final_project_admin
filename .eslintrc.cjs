module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "plugin:import/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended"
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "ignore" }
    ],
    "comma-dangle": ["error", "never"],
    "import/no-extraneous-dependencies": 0,
    "no-underscore-dangle": ["error", { allow: ["_id"] }]
  }
};
