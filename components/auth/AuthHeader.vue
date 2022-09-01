<template>
  <header class="header-auth">
    <nuxt-link to="/">
      <img src="~/assets/images/common/quwi-logo.svg">
    </nuxt-link>

    <nav>
      <nuxt-link to="/login" class="header-auth__link">
        Login
      </nuxt-link>
      <nuxt-link to="/sign-up" class="header-auth__link">
        Signup
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderView'
}
</script>

<style lang="scss" scoped>

</style>
