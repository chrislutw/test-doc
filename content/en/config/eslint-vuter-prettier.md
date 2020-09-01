---
title: eslint, vuter, prettier 自動排版
description: 讓 eslint, vuter, prettier 一起使用
position: 40
keyword: eslint vuter prettier 自動排版
category: 設定
---

## 總結

## VSCode 只需安裝的套件

- ESLint: [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Vuter: [https://marketplace.visualstudio.com/items?itemName=octref.vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

## 開新專案時 `.vscode` 資料夾設定

`settings.json` 請設定如下：

```json[settings.json]
{
  "editor.formatOnType": false,
  "editor.formatOnPaste": false,
  "editor.formatOnSave": false,
  "eslint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "vetur.validation.template": false,
  // 下面為多語系設定，依專案不同需設定不同參數
  "i18n-ally.localesPaths": "lang",
  "i18n-ally.displayLanguage": "TW",
  "i18n-ally.keystyle": "nested",
}
```

## 專案需要安裝的套件

- prettier
- eslint
- babel-eslint
- eslint-loader
- eslint-plugin-prettier
- eslint-plugin-vue
- eslint-config-prettier (參考rule)
- @vue/eslint-config-standard (參考rule)

```bash
npm i eslint babel-eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue eslint-loader prettier -D
```

## nuxt專案`.eslintrc.js`

```js
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier/vue',
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  // 加入您專案的自訂規則
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-expressions': 'off',
    'vue/no-v-html': 'off'
  }
```

## vue 專案`.eslintrc.js`

請參考[這篇文章](https://dev.to/lindseybradford/es-lint-prettier-vetur-vscode-ironing-out-the-conflicts-12j6)

## 原理解釋

請參考[這篇文章](https://medium.com/@gogl.alex/how-to-properly-set-up-eslint-with-prettier-for-vue-or-nuxt-in-vscode-e42532099a9c)
