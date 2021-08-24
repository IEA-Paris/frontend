import config from './config.js'

export default {
  env: { config },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - starter',
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'keywords',
        content:
          'hoppscotch, hopp scotch, hoppscotch online, hoppscotch app, postwoman, postwoman chrome, postwoman online, postwoman for mac, postwoman app, postwoman for windows, postwoman google chrome, postwoman chrome app, get postwoman, postwoman web, postwoman android, postwoman app for chrome, postwoman mobile app, postwoman web app, api, request, testing, tool, rest, websocket, sse, graphql, socketio',
      },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge, chrome=1',
      },
      {
        itemprop: 'name',
        content: `${config.name} • ${config.shortDescription}`,
      },
      {
        itemprop: 'description',
        content: config.description,
      },
      {
        itemprop: 'image',
        content: `${process.config.BASE_URL}/banner.jpg`,
      },
      // Add to homescreen for Chrome on Android. Fallback for PWA (handled by nuxt)
      {
        name: 'application-name',
        content: config.name,
      },
      // Windows phone tile icon
      {
        name: 'msapplication-TileImage',
        content: `/icon.png`,
      },
      {
        name: 'msapplication-TileColor',
        content: config.theme.themes.light.secondary,
      },
      {
        name: 'msapplication-tap-highlight',
        content: 'no',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', //  default: localhost
  },
  // Customize the progress-bar color (https://nuxtjs.org/api/configuration-loading/#customizing-the-progress-bar)
  /*   loading: {
    color: 'black',
    height: '10px',
    duration: 500,
  }, */ // Customize the loading indicator (https://nuxtjs.org/api/configuration-loading-indicator)
  /*   loadingIndicator: {
    name: '~/assets/loader.html',
    color: config.theme.themes.light.primary,
    background: config.theme.themes.light.secondary,
  }, */
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/jsonld',
    '~/plugins/config',
    { src: '~plugins/i18n-config.js', mode: 'client' },
    { src: '~/plugins/vuetify-theme', mode: 'client' },
    { src: '~/plugins/apollo-config', mode: 'client' },
    /*  { src: '~/plugins/loader', mode: 'client' }, */
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    loader: true,
    dirs: [{ path: '~/components', pathPrefix: false }],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://composition-api.nuxtjs.org
    /*  '@nuxtjs/composition-api/module', */
    /* '@nuxtjs/html-validator', */
    '@nuxt/image',
    /*   'nuxt-compress', */
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/api/auth/
    '@nuxtjs/auth',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/i18n-module
    'nuxt-i18n',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://ackee.nuxtjs.org/
    '@nuxtjs/ackee',
    // https://sentry.nuxtjs.org/
    '@nuxtjs/sentry',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
    // https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',

    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  /*
   ** Sitemap module configuration
   ** https://github.com/nuxt-community/sitemap-module#setup-a-sitemap
   */
  sitemap: {
    hostname: 'https://www.intercontinental-academia.org',
    gzip: true,
    exclude: [],
    icons: [],
  },
  // Robots module configuration (https://github.com/nuxt-community/robots-module)
  robots: {
    UserAgent: '*',
    Disallow: '',
    Allow: '/',
    Sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  },
  // https://image.nuxtjs.org
  image: {
    screens: {
      avatarSm: 24,
      avatarLg: 48,
      logo: 32,
      migration: 536,
      blogImage: 864,
    },
    domains: [
      /* 'picsum.photos', */
      // snipcart.nuxtjs.org',
      'source.unsplash.com',
      'images.unsplash.com',
      'github.com',
      'unsplash.com',
      'user-images.githubusercontent.com',
      'abs.twimg.com',
      'res.cloudinary.com',
      'npmjs.com',
    ],
  },
  // https://i18n.nuxtjs.org/
  i18n: {
    langDir: 'i18n/',
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'French',
        file: 'fr.json',
        dir: 'ltr',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
        dir: 'ltr',
      },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'en',
    },
    baseUrl: config.url,
    lazy: true,
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
  },
  /*
   ** Auth module configuration
   ** https://auth.nuxtjs.org/providers/auth0.html
   */
  auth: {
    cookie: false,
    strategies: {
      local: false,
      apollo: {
        _scheme: '~/plugins/apollo-schema.js',
        name: 'apollo',
        provider: 'apollo',
        token_type: '',
        default: true,
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/',
    },
    localStorage: {
      prefix: 'auth.',
    },
  },
  /*
  /*
   ** Apollo module configuration
   ** https://github.com/nuxt-community/apollo-module
   */
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js',
    },
    authenticationType: '',
  },
  // https://github.com/Developmint/nuxt-webfontloader
  webfontloader: {
    google: {
      families: ['Bodoni Moda', 'Open Sans', 'Roboto:100,300,400,500,700'], // Loads Lato font with weights 400 and 700
    },
  },
  /*
   ** Sentry module configuration
   ** https://github.com/nuxt-community/sentry-module#options
   */
  sentry: {
    dsn: config.sentry_dsn || '',
    config: {}, // Additional configyarn dev
  },
  ackee: {
    server: 'https://ackee.paris-ias.io/',
    domainId: config.ackee_domain || '',
    // see documentation for more!
    ignoreOwnVisits: false,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // PWA module configuration (https://pwa.nuxtjs.org/setup)
  pwa: {
    meta: {
      name: `${config.name} - ${config.shortDescription}`,
      description: config.description,
      ogHost: process.env.BASE_URL,
      ogImage: `${process.env.BASE_URL}/banner.jpg`,
      twitterCard: 'summary_large_image',
      /* twitterSite: env.social.twitter,
     twitterCreator: env.social.twitter, */
      theme_color: config.theme.themes.light.secondary,
    },
    manifest: {
      name: config.name,
      short_name: config.name,
      description: config.shortDescription,
      start_url: '/?source=pwa',
      background_color: config.theme.themes.light.secondary,
      lang: 'en',
    },
    icon: {},
  },
  // https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: ['~/assets/variables.scss', '~/assets/mixins.scss'],
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: [{ family: 'Merriwater' }, { family: 'Libre Franklin' }],
    },
    theme: config.theme,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    fallback: true,
    // choose to suit your project
    /* interval: 2000, */
  },
}
