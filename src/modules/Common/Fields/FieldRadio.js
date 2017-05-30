import AbstractRadio from 'src/modules/Common/Fields/Contracts/AbstractRadio.vue'

const FieldRadio = {
  mixins: [AbstractRadio],
  name: 'field-radio',
  /**
   * Hook created to configure classNames
   */
  created () {
    this.classNames = this.getDefaultClassName(this.$options.name)
  }
}

export default FieldRadio
