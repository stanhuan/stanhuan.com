module.exports = {
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "node": true
    },
    "rules": {
      "strict": 0,
      "no-console": "warn",
      "prettier/prettier": "warn",
      "react/prop-types": "warn",
      "no-unused-vars": "warn"
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended"
    ],
    "plugins": ["prettier", "jsx-a11y"],
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  };