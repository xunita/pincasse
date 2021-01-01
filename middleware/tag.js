export default function ({ store, route }) {
  // If the user is not authenticated
  if (
    route.path === '/home' ||
    route.path === '/' + store.$i18n.locale + '/home' ||
    route.path === '/' + store.$i18n.locale + '/home/' ||
    route.path === '/home/courses' ||
    route.path === '/' + store.$i18n.locale + '/home/courses' ||
    route.path === '/' + store.$i18n.locale + '/home/courses/' ||
    route.path === '/home/courses/video' ||
    route.path === '/' + store.$i18n.locale + '/home/courses/video' ||
    route.path === '/' + store.$i18n.locale + '/home/courses/video/'
  ) {
    store.commit('SET_TAG_SUG', true)
  } else store.commit('SET_TAG_SUG', false)

  if (
    route.path === '/home/trending' ||
    route.path === '/' + store.$i18n.locale + '/home/trending' ||
    route.path === '/' + store.$i18n.locale + '/home/trending/'
  ) {
    store.commit('SET_TAG_TREND', true)
  } else store.commit('SET_TAG_TREND', false)
}
