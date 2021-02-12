export const state = () => ({
  authUser: null
})

// token: localStorage.getItem('token') || '',

export const getters = {
  isLoggedIn: state => !!state.authUser
}

export const actions = {
  async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims, token }) {
    // console.log('onAuthStateChangedAction')
    if (!authUser) {
      commit('RESET_USER')

      return
    }

    // you can request additional fields if they are optional (e.g. photoURL)
    const { uid, email, emailVerified, displayName, photoURL } = authUser

    commit('SET_USER', {
      uid,
      email,
      emailVerified,
      displayName,
      photoURL: claims.picture,
      // photoURL, results in photoURL being undefined for server auth
      // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
      isAdmin: claims.custom_claim,
      token
    })
  },
  // Store action called nuxtServerInit:
  async nuxtServerInit({ dispatch }, { res,req }) {
    if (res && res.locals && res.locals.user) {

      const { allClaims: claims, idToken: token, ...authUser } = res.locals.user



      await dispatch('onAuthStateChangedAction', {
        authUser,
        claims,
        token
      })
    }
  }
}

export const mutations = {
  // ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
  //   // you can request additional fields if they are optional (e.g. photoURL)
  //   const { uid, email, emailVerified, displayName, photoURL } = authUser

  //   state.authUser = {
  //     uid,
  //     displayName,
  //     email,
  //     emailVerified,
  //     photoURL: photoURL || null, // results in photoURL being null for server auth
  //     // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
  //     isAdmin: claims.custom_claim
  //   }
  // },
  SET_USER(state, payload) {
    // console.log('set user mutation')
    // console.log(payload)
    state.authUser = payload;
  },
  RESET_USER(state) {
    // console.log('reset user mutation')
    state.authUser = null
  }
}