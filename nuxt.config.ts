// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },
  typescript: {
    typeCheck: true,
    strict: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
        verbatimModuleSyntax: false,
        strict: true,
        types: ['vite/client'],
      },
    },
  },
  css: [],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },
  runtimeConfig: {
    alpacaApiUrl: process.env.ALPACA_API_URL,
  },
})
