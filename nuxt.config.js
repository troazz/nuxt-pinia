import { defineNuxtConfig } from '@nuxt/bridge'
const apiUrl = process.env.BASE_URL || 'http://localhost:8080'

export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'stisla-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      // <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
        integrity:
          'sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/style.scss'],

  styleResources: {
    scss: [
      '~assets/scss/_mixin.scss',
      '~assets/scss/_variable.scss',
      '~assets/scss/_function.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `usePinia()`
          'defineStore',
        ],
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  toast: {
    position: 'top-right',
    duration: 5000,
    singleton: true,
    register: [
      {
        name: 'error',
        message: 'Oops...Something went wrong, Please contact administrator.',
        options: {
          type: 'error',
        },
      },
    ],
  },

  axios: {
    baseURL: `${apiUrl}/api`,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  auth: {
    plugins: ['~/plugins/auth.js'],
    strategies: {
      laravelJWT: {
        provider: 'laravel/jwt',
        url: apiUrl,
        endpoints: {
          user: {
            url: '/api/me',
          },
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60,
        },
        refreshToken: {
          maxAge: 20160 * 60,
        },
      },
    },
  },

  bridge: {
    meta: true,
  },

  loading: {
    color: '#6777ef',
    height: '3px',
  },
})
