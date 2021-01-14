export const state = () => ({
  locale: 'en',
  oldlocale: '',
  newlocale: '',
  currentlanguage: 'English',
  test: 0,
  courseid: 0,
  delmod: false,
  tagsugges: false,
  tagtrend: false,
})
export const mutations = {
  SET_LANG(state, value) {
    state.currentlanguage = value
  },
  SET_TAG_SUG(state, value) {
    state.tagsugges = value
  },
  SET_DEL_MOD(state, value) {
    state.delmod = value
  },
  INCRE_TEST(state) {
    state.test++
  },
  SET_TAG_TREND(state, value) {
    state.tagtrend = value
  },
}
export const actions = {}
