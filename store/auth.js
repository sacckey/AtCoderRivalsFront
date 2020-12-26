import { auth } from '~/plugins/firebase'

export const strict = false
export const state = () => ({
  status: "",
  token: '',
  photoURL: ""
})

// token: localStorage.getItem('token') || '',

export const getters = {
  isLoggedIn: state =>  state.status === "loggedIn"
}

export const actions = {
  gotUser({ commit }, user) {
    commit("setUser", user)
  },
  logout({ commit }) {
    auth.signOut().then(() => {
      commit("logout")
    })
  }
}

export const mutations = {
  setUser(state, user) {
    state.status = "loggedIn"
    state.photoURL = user.photoURL
  },
  logout(state) {
    state.status = "loggedOut"
    state.photoURL = ""
    auth.signOut()
  }
}