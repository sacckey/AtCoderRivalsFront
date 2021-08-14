export const state = () => ({
  authUser: null,
  token: null
})

export const getters = {
  isLoggedIn: state => !!state.authUser
}

export const actions = {
  async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims, token }) {
    console.log('onAuthStateChangedAction')
    if (!authUser) {
      // TODO: ここに来る前にmiddlewareでリダイレクトする
      commit('RESET_STATE')
      return
    }
  },
  // Store action called nuxtServerInit:
  async nuxtServerInit({ commit, dispatch }, { res,req }) {
    if (res?.locals?.user) {
      const { idToken: token } = res.locals.user
      commit('SET_TOKEN', token)
      const authUser = await this.$axios.$get(`v1/sessions/auth_user`).catch((err) => console.error(err))

      if(!authUser){
        console.error('認証失敗')
        return
      }

      dispatch('setUser', authUser)
    }
  },
  setToken({ commit }, token){
    commit('SET_TOKEN', token)
  },
  resetState({ commit }){
    commit('RESET_STATE')
  },
  setUser({ commit }, authUser){
    const { user_name: displayName, user_id: userId, following_count: followingCount, atcoder_id: atcoderId, rating, user_image_url: twitterPhotoURL, atcoder_user_image_url: atcoderPhotoURL, accepted_count: acceptedCount } = authUser.auth_user

    commit('SET_USER', {
      displayName,
      userId,
      followingCount,
      atcoderId,
      rating,
      twitterPhotoURL,
      atcoderPhotoURL,
      acceptedCount
    })
  },
  incrementFollowingCount({ commit }){
    commit('INCREMENT_FOLLOWING_COUNT')
  },
  decrementFollowingCount({ commit }){
    commit('DECREMENT_FOLLOWING_COUNT')
  }
}

export const mutations = {
  SET_USER(state, payload) {
    state.authUser = payload;
  },
  RESET_USER(state) {
    state.authUser = null
  },
  SET_TOKEN(state, token) {
    state.token = token;
  },
  RESET_TOKEN(state) {
    state.token = null
  },
  RESET_STATE(state) {
    state.authUser = null
    state.token = null
  },
  INCREMENT_FOLLOWING_COUNT(state) {
    state.authUser.followingCount += 1
  },
  DECREMENT_FOLLOWING_COUNT(state) {
    state.authUser.followingCount -= 1
  }
}
