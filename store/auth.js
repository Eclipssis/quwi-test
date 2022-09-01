export const state = () => ({
  token: null
})

export const mutations = {
  setToken (state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },

  removeToken (state) {
    state.token = null
    localStorage.removeItem('token')
  },

  initAuth (state) {
    console.log('Init APP AUTH')
    const tokenLocal = localStorage.getItem('token')
    if (tokenLocal) {
      console.log('tokenLocal', tokenLocal)
      state.token = tokenLocal
    }
  }
}

export const actions = {
  async login ({ commit }, payload) {
    try {
      const response = await this.$axios.$post('/auth/login', payload)

      commit('setToken', response.token)
    } catch (error) {
      throw error.response.data
    }
  },

  async signUp ({ commit }, { email, password, name }) {
    try {
      const response = await this.$axios.$post('/auth/signup', {
        name,
        email,
        password
      })

      commit('setToken', response.token)
    } catch (error) {
      throw error.response.data
    }
  },

  logOut ({ commit }) {
    commit('setToken', null)
    localStorage.removeItem('token')
  }
}
