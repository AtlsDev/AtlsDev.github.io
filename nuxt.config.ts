// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
  ],

  css: [
    '~/assets/css/main.css',
  ],

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [{
      code: 'tr',
      name: 'Türkçe',
      file: 'tr.json',
    }, {
      code: 'en',
      name: 'English',
      file: 'en.json',
    }],
  },

})