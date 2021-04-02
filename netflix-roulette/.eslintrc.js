module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb", 
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": {
          "resolve": {
            'modules': [
              'src',
              'node_modules',
            ],
          }
        },
      },
    },
  },
  "rules": {
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-unused-expressions": ["error", {"allowTernary": true}],
    "max-len": ["error", { "code": 140 }],
    "object-curly-newline": "off",
    "no-param-reassign": "off",
    "no-script-url": "off",
    "no-alert": "off",
    "linebreak-style": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
    "import/no-extraneous-dependencies": [
      "error", { "devDependencies": ["webpack.*.js", "postcss.config.js", "**/*.test.js", "jest.*.js"] }
    ],
    "import/order": ["error", {
      "groups": [
        ["builtin", "external"],
        ["internal"],
        ["parent", "sibling", "index"],
      ],
      "newlines-between": "always",
    }],
    "react/forbid-prop-types": ["error", { "forbid": ["any", "array"] }],
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": ["error", { "components": [] }],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/label-has-for": [2, {
      "components": [],
      "required": {
        "some": ["nesting", "id"]
      },
      "allowChildren": false
    }],
  }
};
