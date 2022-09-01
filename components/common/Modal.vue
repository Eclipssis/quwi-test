<template>
  <div class="modal" :class="{open: initValue}">
    <div class="modal__content">
      <div class="modal__body">
        <span class="modal__close" @click="onClose">
          X
        </span>
        <slot />
      </div>
    </div>

    <div v-if="initValue" class="modal__bg" @click="onClose" />
  </div>
</template>

<script>
export default {
  name: 'ModalView',

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      initValue: this.value
    }
  },

  watch: {
    value (newValue) {
      this.initValue = newValue
    }
  },

  methods: {
    onClose () {
      this.$emit('input', false)
    }
  }
}
</script>
