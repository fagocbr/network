import AbstractInput from 'src/modules/Common/Fields/Contracts/AbstractInput.vue'

const FieldPassword = {
  mixins: [AbstractInput],
  name: 'field-password',
  data: () => ({
    type: 'password'
  }),
  /**
   * Hook created to configure classNames
   */
  created () {
    this.classNames = this.getDefaultClassName(this.$options.name)
  }
}

export default FieldPassword
