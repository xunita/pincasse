export const state = () => ({
  locale: 'en',
  oldlocale: '',
  newlocale: '',
  currentlanguage: 'English',

  tagsugges: true,
})
export const mutations = {
  SET_LANG(state, value) {
    state.currentlanguage = value
  },
  SET_TAG_SUG(state, value) {
    state.tagsugges = value
  },
}
export const actions = {}
