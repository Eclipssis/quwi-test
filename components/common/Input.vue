<template>
  <div class="form-group" :class="{ invalid: error }">
    <label class="form-label" :class="{ active: showLabel, error: error }">{{ labelText }}</label>
    <input
      :type="type"
      :placeholder="label"
      :value="inputValue"
      class="form-input"
      @input="onInputChange"
      @focus="$emit('focus')"
    >
  </div>
</template>

<script>
export default {
  name: 'InputComponent',

  props: {
    value: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'text'
    },

    placeholder: {
      type: String,
      default: ''
    },

    label: {
      type: String,
      default: ''
    },

    hideLabel: {
      type: Boolean,
      default: false
    },

    error: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      inputValue: this.value
    }
  },

  computed: {
    showLabel () {
      return this.inputValue.length || this.hideLabel || this.error
    },

    labelText () {
      return this.error ? this.error : this.label
    }
  },

  watch: {
    value (newValue) {
      this.inputValue = newValue
    }
  },

  methods: {
    onInputChange (event) {
      this.inputValue = event.target.value
      return this.$emit('input', this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
