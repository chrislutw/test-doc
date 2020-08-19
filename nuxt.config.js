import theme from '@nuxt/content-theme-docs'

export default theme({
  i18n: {
    locales: () => [
      {
        code: 'tw',
        iso: 'zh-TW',
        file: '~/lang/zh-TW.json',
        name: '繁體中文',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
      },
    ],
    defaultLocale: 'tw',
  },
})
