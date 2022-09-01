<template>
  <header class="header">
    <div class="container">
      <div class="header__body">
        <div>
          Logo
        </div>
        <div>
          <nuxt-link to="/projects" class="header-auth__link">
            Projects
          </nuxt-link>
          <span class="header-auth__link" @click="onLogOut">Logout</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderView',

  methods: {
    onLogOut () {
      this.$store.dispatch('auth/logOut')
      this.$router.push('/login')
    }
  }
}
</script>
