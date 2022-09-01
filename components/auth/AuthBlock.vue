<template>
  <div class="auth-wrap">
    <div class="auth-block">
      <div class="text-center">
        <nuxt-link to="/" class="inline-block">
          <img src="~/assets/images/common/quwi-logo.svg">
        </nuxt-link>
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthBlock'
}
</script>
