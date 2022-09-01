export default {
  target: 'static',

  head: {
    title: 'quwi-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    base: '/quwi-test/'
  },

  css: [
    '~/assets/css/main.css'
  ],

  plugins: [
    { src: '~/plugins/init-app.js', mode: 'client' },
    { src: '~/plugins/axios.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://api.quwi.com/v2/' // TODO: move .env file
  },

  build: {
  }
}
