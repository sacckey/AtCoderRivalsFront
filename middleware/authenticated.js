import { auth } from '~/plugins/firebase'

export default function ({ route, store, redirect }) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      const { photoURL } = user
      store.dispatch("auth/gotUser", {photoURL})
      if(route.name == "top") redirect("/")
    } else {
      if(route.name !== "top") redirect("/top")
    }
  })
}