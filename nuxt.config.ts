// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'ALPACAQuest',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            'AI-powered app that helps you discover the best career for you through personalized questions and smart recommendations.',
        },
        { property: 'og:title', content: 'ALPACAQuest' },
        {
          property: 'og:description',
          content:
            'AI-powered app that helps you discover the best career for you through personalized questions and smart recommendations.',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:image',
          content:
            'https://res.cloudinary.com/dwgni1x3t/image/upload/c_scale/f_auto/v1752183421/assets/web-app-manifest-192x192_vqs9xk.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'ALPACAQuest',
        },
        {
          name: 'twitter:description',
          content:
            'AI-powered app that helps you discover the best career for you through personalized questions and smart recommendations.',
        },
        {
          name: 'twitter:image',
          content:
            'https://res.cloudinary.com/dwgni1x3t/image/upload/c_scale/f_auto/v1752183421/assets/web-app-manifest-192x192_vqs9xk.png',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
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
  css: ['~/assets/css/page_transition.scss'],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },
  runtimeConfig: {
    alpacaApiUrl: process.env.ALPACA_API_URL,
  },
})
