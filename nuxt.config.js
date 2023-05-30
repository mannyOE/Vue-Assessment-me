export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kippa-assignment',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, {
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css", rel: "stylesheet"
    }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vuex-persist.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-typed-vuex',
    ['@nuxtjs/netlify-files']
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  netlifyFiles: {
    netlifyToml: {
      build: {

      },
      headers: [

      ],
      redirects: [
        {
          from: '/wakatime/*',
          to: 'https://wakatime.com/api/v1/:splat',
          status: 302,
          force: true
        },
        {
          from: "/country/*",
          to: "https://restcountries.com/v2/alpha/:splat",
          status: 302,
          force: true
        }
      ]
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   proxyHeaders: false,
  //   credentials: false,
  //   baseURL: "https://cors-anywhere.urbanspaces.ng/https://wakatime.com/api/v1/"
  // },
  // proxy: {
  //   '/wakatime/': {
  //     target: 'https://wakatime.com/api/v1/',
  //     pathRewrite: { '^/wakatime/': '' }
  //   },
  //   "/country/": {
  //     target: "https://restcountries.com/v2/alpha/",
  //     pathRewrite: { '^/country/': '' }
  //   }
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
