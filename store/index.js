export const state = () => ({
  scrolled: process.browser ? window.pageYOffset > 0 : false,
})

export const mutations = {
  setScrolled(state) {
    if (process.browser) {
      state.scrolled = window.pageYOffset > 0
    }
  },
  updateUser(state, field, value) {
    state[field] = value
  },
}
export const actions = {}
