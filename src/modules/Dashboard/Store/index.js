const APP_WIDTH = 'APP_WIDTH'
const APP_HEIGHT = 'APP_HEIGHT'

const state = {
  appWidth: 0,
  appHeight: 0
}

const getters = {
  getAppWidth (state) {
    return state.appWidth
  },
  getAppHeight (state) {
    return state.appHeight
  }
}

const actions = {
  setAppWidth ({commit}, payload) {
    commit(APP_WIDTH, payload)
  },
  setAppHeight ({commit}, payload) {
    commit(APP_HEIGHT, payload)
  }
}

const mutations = {
  [APP_WIDTH] (state, width) {
    state.appWidth = width
  },
  [APP_HEIGHT] (state, height) {
    state.appHeight = height
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
