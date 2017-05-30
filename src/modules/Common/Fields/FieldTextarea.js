import AbstractTextarea from 'src/modules/Common/Fields/Contracts/AbstractTextarea.vue'

const FieldTextarea = {
  mixins: [AbstractTextarea],
  name: 'field-textarea',
  /**
   * Hook created to configure classNames
   */
  created () {
    this.classNames = this.getDefaultClassName(this.$options.name)
  }
}

export default FieldTextarea
