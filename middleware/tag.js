export default function ({ store, route }) {
  // If the user is not authenticated
  if (
    route.path === '/home' ||
    route.path === '/home/' ||
    route.path === '/' + store.$i18n.locale + '/home' ||
    route.path === '/' + store.$i18n.locale + '/home/' ||
    route.path === '/courses' ||
    route.path === '/' + store.$i18n.locale + '/courses' ||
    route.path === '/' + store.$i18n.locale + '/courses/' ||
    route.path === '/courses/video' ||
    route.path === '/' + store.$i18n.locale + '/courses/video' ||
    route.path === '/' + store.$i18n.locale + '/courses/video/'
  ) {
    store.commit('SET_TAG_SUG', true)
  } else store.commit('SET_TAG_SUG', false)

  if (
    route.path === '/trending' ||
    route.path === '/trending/' ||
    route.path === '/' + store.$i18n.locale + '/trending' ||
    route.path === '/' + store.$i18n.locale + '/trending/'
  ) {
    store.commit('SET_TAG_TREND', true)
  } else store.commit('SET_TAG_TREND', false)
}
