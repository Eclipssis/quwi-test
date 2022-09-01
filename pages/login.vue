<template>
  <AuthBlock>
    <form class="auth-form">
      <Input
        v-model="form.email"
        :error="apiError.email"
        type="email"
        placeholder="Email"
        label="Email"
        @focus="onFocusInput('email')"
      />
      <Input
        v-model="form.password"
        :error="apiError.password"
        type="password"
        placeholder="Password"
        label="Password"
        @focus="onFocusInput('password')"
      />

      <div class="form-group">
        <button type="submit" class="button button-primary" @click.prevent="onLogin">
          Login
        </button>
      </div>

      <div class="text-center">
        <nuxt-link to="/fogot-password" class="link">
          Forgot password?
        </nuxt-link>
      </div>
    </form>
  </AuthBlock>
</template>

<script>
import AuthBlock from '@/components/auth/AuthBlock.vue'
import Input from '@/components/common/Input.vue'

export default {
  name: 'LoginPage',

  components: { Input, AuthBlock },

  layout: 'auth-layout',

  data () {
    return {
      form: {
        email: '',
        password: ''
      },

      apiError: {
        email: null,
        password: null
      }
    }
  },

  methods: {
    async onLogin () {
      console.log('Login')
      try {
        await this.$store.dispatch('auth/login', this.form)
        this.$router.push('/')
      } catch (error) {
        if (error.first_errors.email) {
          this.apiError.email = error.first_errors.email
        }

        if (error.first_errors.password) {
          this.apiError.password = error.first_errors.password
        }
      }
    },

    onFocusInput (type) {
      this.apiError[type] = null
    }
  }
}
</script>
