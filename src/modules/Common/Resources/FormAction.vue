<template>
  <div class="form-action">
    <button v-for="__action in actions" :disabled="__action.disabled" :class="__action.classNames" @click="click(__action)">
      <i v-if="__action.icon">{{ __action.icon }}</i>
      {{ __action.label }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'form-action',
    props: {
      actions: {
        default: () => ([])
      }
    },
    methods: {
      click (action) {
        this.$parent.resolveAction(action)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .form-action
    button
      margin 5px 10px 5px 0
</style>
