<template>
  <div class="auth-page">
    <main class="container">
      <AuthHeader />
      <div class="auth-content">
        <Nuxt />
      </div>
    </main>
    <AuthFooter />
  </div>
</template>

<script>
import AuthHeader from '@/components/auth/AuthHeader.vue'
import AuthFooter from '@/components/auth/AuthFooter.vue'

export default {
  name: 'AuthLayout',

  components: {
    AuthHeader,
    AuthFooter
  }
}
</script>
