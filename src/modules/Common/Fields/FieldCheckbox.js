import AbstractCheckbox from 'src/modules/Common/Fields/Contracts/AbstractCheckbox.vue'

const FieldCheckbox = {
  mixins: [AbstractCheckbox],
  name: 'field-checkbox',
  /**
   * Hook created to configure classNames
   * Get the default value to checked
   */
  created () {
    this.checked = !!this.value

    this.classNames = this.getDefaultClassName(this.$options.name)
    if (this.properties.placeholder) {
      this.classNames.push('with-placeholder')
    }
  }
}

export default FieldCheckbox
