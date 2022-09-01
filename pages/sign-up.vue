<template>
  <AuthBlock>
    <form class="auth-form">
      <Input
        v-model="form.name"
        :error="apiError.name"
        type="text"
        placeholder="Name"
        label="Name"
        @focus="onFocusInput('name')"
      />
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
        <button type="submit" class="button button-primary" @click.prevent="onSignUp">
          Done
        </button>
      </div>
    </form>
  </AuthBlock>
</template>

<script>
import AuthBlock from '@/components/auth/AuthBlock.vue'
import Input from '@/components/common/Input.vue'

export default {
  name: 'SignUpPage',

  components: {
    Input, AuthBlock
  },

  layout: 'auth-layout',

  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },

      apiError: {
        name: null,
        email: null,
        password: null
      }
    }
  },

  methods: {
    async onSignUp () {
      try {
        await this.$store.dispatch('auth/signUp', this.form)
        this.$router.push('/')
      } catch (error) {
        if (error.first_errors.email) {
          this.apiError.email = error.first_errors.email
        }

        if (error.first_errors.password) {
          this.apiError.password = error.first_errors.password
        }

        if (error.first_errors.name) {
          this.apiError.name = error.first_errors.name
        }
      }
    },

    onFocusInput (type) {
      this.apiError[type] = null
    }
  }
}
</script>
