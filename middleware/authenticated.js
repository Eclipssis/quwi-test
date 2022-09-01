export default function ({ store, redirect, app }) {
  if (!store.state.auth.token) {
    return redirect('/login')
  }
}
