---
title: 安裝 nuxt content docs
description: ''
position: 1
category: 起步
---

你可以在 [content@docs官方文件](https://nuxtjs.org/api/configuration-modules#the-modules-property) 查看更詳細的設定

## 推薦安裝方式

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn create nuxt-content-docs <project-name>
  ```

  </code-block>
  <code-block label="NPX">

  ```bash
  # 請確定你已經安裝 npx (npx 在 NPM 5.2.0 版本後就有預設安裝了) or npm v6.1 or yarn.
  npx create-nuxt-content-docs <project-name>
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  # Starting with npm v6.1 you can do:
  npm init nuxt-content-docs <project-name>
  ```

  </code-block>
</code-group>

打完指令後會出現幾個互動問題(name, title, url, repository, etc.)，回答完後就會自動幫你安裝相依套件。 下個步驟是切換到專案資料夾下輸入以下指令啟動它：

<code-group>
  <code-block label="Yarn" active>

  ```bash
  cd <project-name>
  yarn dev
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  cd <project-name>
  npm run dev
  ```

  </code-block>
</code-group>

您的文件網站就會啟動在 [http://localhost:3000](http://localhost:3000)，太棒了，接下來您可以在`/content/{locale}`資料夾裡，新增您的`*.md`檔案，開啟撰寫文件了
