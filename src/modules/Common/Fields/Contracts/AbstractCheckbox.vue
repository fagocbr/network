<template>
  <div :class="classNames">
    <slot name="label">
      <label class="label-checkbox" @click="checked = !checked" v-if="!properties.inline">
        {{ label }}
      </label>
    </slot>
    <slot name="component">
      <label>
        <q-checkbox v-model="checked" :disable="properties.disabled"></q-checkbox>
        {{ properties.placeholder }}
      </label>
    </slot>
    <slot name="error">
    </slot>
  </div>
</template>

<script type="text/javascript">
  import Abstract from 'src/modules/Common/Fields/Contracts/Abstract'

  export default {
    extends: Abstract,
    name: 'abstract-checkbox',
    data: () => ({
      checked: false
    }),
    watch: {
      checked () {
        this.$emit('input', this.checked)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .field-checkbox
    text-align left
    .label-checkbox
      margin 0 10px 10px 0
    &.with-placeholder
      .label-checkbox
        display block
</style>
