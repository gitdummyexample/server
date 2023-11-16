module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/typescript'
    ],
    parser: "@typescript-eslint/parser",
    settings: {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"],
            "paths": ["src", "public"]
          }
        }
    },
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs,tsx}'
            ],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier/@typescript-eslint"
              ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-arrow-condition': 'off',
        '@typescript-eslint/space-after-keywords': 'off',
    },
};
