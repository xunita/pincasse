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
          cr: 'Courses',
          vid_course: 'Video courses',
          not: 'Notifications',
          my_courses: 'My courses',
          liked_courses: 'Liked courses',
          subscribe: 'Subscribers',
          followed: 'Followed',
          see_more: 'More',
          see_less: 'Less',
          about: 'About',
          contact: 'Contact us',
          contribute: 'Contribute',
          ppolicy: 'Privacy Policy',
          tos: 'Terms of service',
          cpolicy: 'Copyright Policy',
        },
        fr: {
          welcome:
            'Ne laissez personne dire que vous ne pouvez pas y arriver, la seule limite est votre imagination',
          searchplaceholder: '',
          welcomebtn1: 'Accueil',
          welcomebtn2: 'Tendance',
          sign: 'Se connecter',
          cr: 'Cours',
          vid_course: 'Cours video',
          not: 'Notifications',
          my_courses: 'Mes cours',
          liked_courses: 'Cours aimés',
          subscribe: 'Souscription',
          followed: 'Suivis',
          see_more: 'Plus',
          see_less: 'Moins',
          about: 'A propos',
          contact: 'Contactez nous',
          contribute: 'Contribuer',
          ppolicy: 'Politique de confidentialité',
          tos: "Conditions d'utilisations",
          cpolicy: "Politique de droits d'auteur",
        },
        es: {
          welcome:
            'Nunca dejes que nadie te diga que no puedes, el único límite es tu imaginación',
          searchplaceholder: '',
          welcomebtn1: 'Página principal',
          welcomebtn2: 'tendencias',
          sign: 'Registrarse',
          cr: 'Cursos',
          vid_course: 'Curso de video',
          not: 'Notifications',
          my_courses: 'Mis cursos',
          liked_courses: 'cursos que le gustaron',
          subscribe: 'Suscriptores',
          followed: 'Seguido',
          see_more: 'Más',
          see_less: 'Menos',
          about: 'Acerca de',
          contact: 'Contacto',
          contribute: 'Contribuir',
          ppolicy: 'Política de confidencialidad',
          tos: 'Condiciones de Uso',
          cpolicy: 'Política de copyright',
        },
        jp: {
          welcome:
            '誰にもできないと言わせないでください。唯一の制限はあなたの想像力です',
          searchplaceholder: '',
          welcomebtn1: 'ホームページ',
          welcomebtn2: '傾向',
          sign: 'サインイン',
          cr: 'コース',
          vid_course: 'ビデオコース',
          not: '通知',
          my_courses: '私のコース',
          liked_courses: '好きなコース',
          subscribe: 'サブスクライバー',
          followed: 'フォローしました',
          see_more: 'もっと',
          see_less: 'もっと少なく',
          about: '約',
          contact: '連絡先',
          contribute: '貢献する',
          ppolicy: '個人情報保護方針',
          tos: '利用条件',
          cpolicy: '著作権ポリシー',
        },
        ru: {
          welcome:
            'Никогда не позволяйте никому говорить, что вы не можете, единственный предел - ваше воображение',
          searchplaceholder: '',
          welcomebtn1: 'Домашняя страница',
          welcomebtn2: 'Тренд',
          sign: 'войти в систему',
          cr: 'Курсы',
          vid_course: 'Видео курсы',
          not: 'Уведомления',
          my_courses: 'Мои курсы',
          liked_courses: 'Понравившиеся курсы',
          subscribe: 'Подписчики',
          followed: 'Подписки',
          see_more: 'Больше',
          see_less: 'Меньше',
          about: 'Около',
          contact: 'Связаться с нами',
          contribute: 'Продвигать',
          ppolicy: 'политика конфиденциальности',
          tos: 'Условия использования',
          cpolicy: 'Политика авторских прав',
        },
        cn: {
          welcome: '欢迎',
          searchplaceholder: '',
          welcomebtn1: '主页',
          welcomebtn2: '趋势',
          sign: '登入',
          cr: '课程',
          vid_course: '视频课程',
          not: '通知',
          my_courses: '我的课程',
          liked_courses: '喜欢的课程',
          subscribe: '订户',
          followed: '订阅',
          see_more: '更多',
          see_less: '减',
          about: '关于',
          contact: '联系我们',
          contribute: '有助于',
          ppolicy: '隐私政策',
          tos: '使用条件',
          cpolicy: '版权政策',
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
