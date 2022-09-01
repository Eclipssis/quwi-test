<template>
  <div class="content">
    <Header />
    <main class="container">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'

export default {
  name: 'DefaultLayout',

  components: {
    Header
  }
}
</script>
