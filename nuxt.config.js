export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'PPP - Pincasse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
      },
      { src: 'https://use.fontawesome.com/releases/v5.14.0/js/all.js' },
      { src: 'https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/css/pc.css' },
      { rel: 'stylesheet', href: '/assets/css/bulma.css' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/directive.js', '@/plugins/i18n.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
  ],
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
      },
      {
        name: 'Français',
        code: 'fr',
        iso: 'fr-FR',
      },
      {
        name: 'Español',
        code: 'es',
        iso: 'es-ES',
      },
      {
        name: '中文',
        code: 'cn',
        iso: 'cn-CN',
      },
      {
        name: 'русский',
        code: 'ru',
        iso: 'ru-RU',
      },
      {
        name: '日本人',
        code: 'jp',
        iso: 'jp-JP',
      },
      {
        name: 'عربى',
        code: 'ar',
        iso: 'ar-AR',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
    },
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome:
            "Never let anyone tell you can't, the only limit is your imagination",
          searchplaceholder: '',
          welcomebtn1: 'Home',
          welcomebtn2: 'Trending',
          sign: 'Sign in',
        },
        fr: {
          welcome:
            'Ne laissez personne dire que vous ne pouvez pas y arriver, la seule limite est votre imagination',
          searchplaceholder: '',
          welcomebtn1: 'Accueil',
          welcomebtn2: 'Tendance',
          sign: 'Se connecter',
        },
        es: {
          welcome:
            'Nunca dejes que nadie te diga que no puedes, el único límite es tu imaginación',
          searchplaceholder: '',
          welcomebtn1: 'Página principal',
          welcomebtn2: 'tendencias',
          sign: 'Registrarse',
        },
        jp: {
          welcome:
            '誰にもできないと言わせないでください。唯一の制限はあなたの想像力です',
          searchplaceholder: '',
          welcomebtn1: 'ホームページ',
          welcomebtn2: '傾向',
          sign: 'サインイン',
        },
        ru: {
          welcome:
            'Никогда не позволяйте никому говорить, что вы не можете, единственный предел - ваше воображение',
          searchplaceholder: '',
          welcomebtn1: 'Домашняя страница',
          welcomebtn2: 'Тренд',
          sign: 'войти в систему',
        },
        ar: {
          welcome: 'لا تدع أي شخص يخبرك أنك لا تستطيع ، فالحد الوحيد هو خيالك',
          searchplaceholder: '',
          welcomebtn1: 'الصفحة الرئيسية',
          welcomebtn2: 'اتجاه',
          sign: 'تسجيل الدخول',
        },
        cn: {
          welcome: '欢迎',
          searchplaceholder: '',
          welcomebtn1: '主页',
          welcomebtn2: '趋势',
          sign: '登入',
        },
      },
    },
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
