export default function ({ $axios, app }) {
  console.log('$store')
  $axios.setHeader('Authorization', `Bearer ${app.store.state.auth.token}`)
}
