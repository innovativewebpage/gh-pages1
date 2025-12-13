git// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  // ✅ Base JavaScript rules
  js.configs.recommended,

  // ✅ React setup
  {
    files: ["**/*.{js,jsx}"],
    plugins: { react },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // 🔹 General JS rules
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-debugger": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],

      // 🔹 React rules
      "react/react-in-jsx-scope": "off", // React 17+ doesn’t need import React
      "react/prop-types": "off",
    },
  },
];
