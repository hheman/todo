# Initial setup

https://blog.bitsrc.io/create-react-app-without-create-react-app-b0a5806a92

# Syntax Formatting

To add syntax autoformatting in your React application, you can use tools like Prettier and ESLint. Here are the steps to set them up in your project:

## Install Prettier and ESLint

Open your terminal and run the following commands to install Prettier and ESLint along with their necessary plugins:

```sh
npm install --save-dev prettier eslint eslint-plugin-react eslint-config-prettier eslint-plugin-prettier
```

## Create Configuration Files

Create or update the `.prettierrc` and `.eslintrc.json` files in the root of your project.

### .prettierrc

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true
}
```

### .eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "prettier/prettier": ["error"]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

## Add Scripts

Add the following scripts to your `package.json` to run Prettier and ESLint:

```json
"scripts": {
  "format": "prettier --write \"src/**/*.{js,jsx}\"",
  "lint": "eslint \"src/**/*.{js,jsx}\""
}
```

## Configure VS Code

**NOTE:** This is the only step that actually may need to be manually done, and that is if this app is being run on a new installation of VSCode.
To integrate Prettier and ESLint with Visual Studio Code, install the following extensions:

- Prettier - Code formatter
- ESLint

Then, add the following settings to your VS Code settings (`.vscode/settings.json`):

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## Run Prettier and ESLint

You can now run Prettier and ESLint using the scripts defined in package.json

```sh
npm run format
npm run lint
```

This setup will ensure that your code is automatically formatted and linted according to the rules defined in Prettier and ESLint.
