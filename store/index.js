export const state = () => ({
  authUser: null,
  token: null,
  alert: null
})

export const getters = {
  isLoggedIn: state => !!state.authUser,
  isAdmin: state => !!state.authUser && state.authUser.isAdmin
}

export const actions = {
  onAuthStateChangedAction ({ commit }, { authUser }) {
    if (!authUser) {
      // TODO: ここに来る前にmiddlewareでリダイレクトする
      commit('RESET_STATE')
    }
  },
  // Store action called nuxtServerInit:
  async nuxtServerInit ({ commit, dispatch }, { res }) {
    if (res?.locals?.user) {
      const { idToken: token } = res.locals.user
      commit('SET_TOKEN', token)

      try {
        const authUser = await this.$axios.$get('v1/sessions/auth_user')
        dispatch('setUser', authUser)
      } catch (err) {
        dispatch('setAlert', { message: 'Authentication Failed', dismissCount: 3, variant: 'danger' })
      }
    }
  },
  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  resetState ({ commit }) {
    commit('RESET_STATE')
  },
  setUser ({ commit }, authUser) {
    const { user_name: displayName, user_id: userId, following_count: followingCount, atcoder_id: atcoderId, rating, user_image_url: twitterPhotoURL, atcoder_user_image_url: atcoderPhotoURL, accepted_count: acceptedCount, is_admin: isAdmin } = authUser.auth_user

    commit('SET_USER', {
      displayName,
      userId,
      followingCount,
      atcoderId,
      rating,
      twitterPhotoURL,
      atcoderPhotoURL,
      acceptedCount,
      isAdmin
    })
  },
  incrementFollowingCount ({ commit }) {
    commit('INCREMENT_FOLLOWING_COUNT')
  },
  decrementFollowingCount ({ commit }) {
    commit('DECREMENT_FOLLOWING_COUNT')
  },
  setAlert ({ commit }, alert) {
    commit('SET_ALERT', alert)
  },
  resetAlert ({ commit }) {
    commit('RESET_ALERT')
  },
  updateAlertDismissCount ({ state, dispatch }, dismissCount) {
    dispatch('setAlert', { message: state.alert.message, dismissCount, variant: state.alert.variant })
  }
}

export const mutations = {
  SET_USER (state, payload) {
    state.authUser = payload
  },
  RESET_USER (state) {
    state.authUser = null
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  RESET_TOKEN (state) {
    state.token = null
  },
  RESET_STATE (state) {
    state.authUser = null
    state.token = null
  },
  INCREMENT_FOLLOWING_COUNT (state) {
    state.authUser.followingCount += 1
  },
  DECREMENT_FOLLOWING_COUNT (state) {
    state.authUser.followingCount -= 1
  },
  SET_ALERT (state, alert) {
    state.alert = alert
  },
  RESET_ALERT (state) {
    state.alert = null
  }
}
