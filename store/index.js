export const state = () => ({
  locale: 'en',
  oldlocale: '',
  newlocale: '',
  currentlanguage: 'English',
})
export const mutations = {
  SET_LANG(state, value) {
    state.currentlanguage = value
  },
}
export const actions = {
  GetWidth() {
    console.log(document.body.clientWidth)
    return document.body.clientWidth
  },
}
