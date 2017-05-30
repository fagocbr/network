import AbstractInput from 'src/modules/Common/Fields/Contracts/AbstractInput.vue'

const FieldText = {
  mixins: [AbstractInput],
  name: 'field-text',
  /**
   * Hook created to configure classNames
   */
  created () {
    this.classNames = this.getDefaultClassName(this.$options.name)
  }
}

export default FieldText
