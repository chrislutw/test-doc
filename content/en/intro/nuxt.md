---
title: Nuxt
description: '直覺化的 Vue 框架軟體'
position: 2
category: 介紹
features:
  - 擁有在開發環境的火速熱更新
  - 在 Markdown 文件中使用 Vue 元件
  - 全文檢索
  - 支援全站靜態化生成
  - 強力的查詢 API 讓你能像使用 MongoDB 一樣
  - Markdown 文件程式碼區塊的高亮使用 PrismJS
  - 自動產生頁面 menu
  - 支援 Markdown, CSV, YAML, JSON(5), XML 格式
  - 可支援自訂的文件解悉 (custom parsers)
  - 可支援鈎子 (hooks)
---

直覺化的 Vue 框架軟體 [詳細使用說明](https://nuxtjs.org/)

## @nuxt/content 模組

以 git 為基礎的內容管理系統 (CMS) [詳細使用說明](https://content.nuxtjs.org/)

> Nuxt <badge>v2.14+</badge> 後新增的功能

### 原理

將`md, csv, xml, yaml, json`檔，全部轉換為`json`檔格式，可參考官方提供的[範例](https://content.nuxtjs.org/writing#example)

### 功能

<list :items="features"></list>

### 預設設定

- 全文檢索預設欄位`fullTextSearchFields`：`['title', 'description', 'slug', 'text']`
- Markdown 預設 remark 套件`markdown.remarkPlugins`：`['remark-squeeze-paragraphs', 'remark-slug', 'remark-autolink-headings', 'remark-external-links', 'remark-footnotes']`
- Markdown 預設 rehype 套件`markdown.rehypePlugins`：`['rehype-minify-whitespace', 'rehype-sort-attribute-values', 'rehype-sort-attributes', 'rehype-raw']`
- Markdown 支援 remark 套件：[查看列表](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins)
- Markdown 支援 rehype 套件：[查看列表](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins)

[其它詳細預設請查看官網](https://content.nuxtjs.org/configuration#defaults)

### @nuxt/content-theme-docs 模版

此文件就是使用這個版製成，更多 [詳細使用說明](https://content.nuxtjs.org/themes/docs)
