<template>
  <div :class="classNames">
    <label class="primary-label" v-if="!properties.inline">{{ label }}</label>
    <label v-for="__option in options" :class="['radio-item', properties.disabled ? 'disabled' : '']">
      <q-radio :val="__option.value" :disable="properties.disabled" v-model="model" @input="$emit('input', model)"></q-radio>
      {{ __option.label }}
    </label>
  </div>
</template>

<script type="text/javascript">
  import Abstract from 'src/modules/Common/Fields/Contracts/Abstract'

  export default {
    extends: Abstract,
    name: 'abstract-radio',
    data: () => ({
      model: undefined,
      options: []
    }),
    created () {
      this.model = this.value
      this.options = this.properties.options
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .radio-item
    &.disabled
      color #717171
    .q-radio input + div:before
      border 2px solid #e2e2e2
    .q-radio input:checked + div:after
      margin 3px
      width 16px
      height 16px
      box-shadow 0 0 2px 0 #e2e2e2
</style>
