export default function ({ app }) {
  app.store.commit('auth/initAuth')
}
