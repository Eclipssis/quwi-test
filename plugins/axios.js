export default function ({ $axios, app }) {
  $axios.setHeader('Authorization', `Bearer ${app.store.state.auth.token}`)
}
