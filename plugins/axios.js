export default function ({ $axios, store, isClient }) {
  $axios.onRequest(config => {
    if (store.state.token) {
      config.headers.common['Authorization'] = 'Bearer ' + store.state.token
    }
  })
}