const env = process.env.NODE_ENV

/* eslint-disable nuxt/no-cjs-in-config */
// export defaultだとデプロイ時にエラーが発生するため、module.exportsを使う
module.exports = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'AtCoder Rivals',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/axios',
    '@/plugins/dayjs',
    { src: '~/plugins/infiniteloading', ssr: false },
    '@/plugins/globalMixin'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyDYzrKzNdQlPYQgg0ESdW-dmV94xiycndY',
      authDomain: 'atcoder-rivals.firebaseapp.com',
      projectId: 'atcoder-rivals',
      storageBucket: 'atcoder-rivals.appspot.com',
      messagingSenderId: '385533054515',
      appId: '1:385533054515:web:58443f89461172e55e9d46',
      measurementId: 'G-0R3T6EQTGR',
      databaseURL: ''
    },
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChangedAction'
        },
        ssr: true
      },
      analytics: {
        collectionEnabled: true
      }
    }
  },

  pwa: {
    meta: false,
    icon: false,

    workbox: {
      importScripts: [
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: env === 'development'
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: env === 'production' ? 'https://atcoder-rivals.herokuapp.com/api' : 'http://localhost:3000/api'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      compact: true
    }
  },

  server: {
    port: 3001
  }
}
