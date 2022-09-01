export default function ({ store, redirect, isServer }) {
  console.log('Middleware', store.state)
  console.log('isServer', isServer)
  // if (!store.state.auth.token) {
  //   return redirect('/login')
  // } else {
  //   return redirect('/')
  // }
}
