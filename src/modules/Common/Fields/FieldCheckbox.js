import AbstractCheckbox from 'src/modules/Common/Fields/Contracts/AbstractCheckbox.vue'

const FieldCheckbox = {
  mixins: [AbstractCheckbox],
  name: 'field-checkbox',
  created () {
    this.checked = !!this.value

    this.classNames = this.getDefaultClassName(this.$options.name)
    if (this.properties.placeholder) {
      this.classNames.push('with-placeholder')
    }
    console.log('created', this.$options.name, this.classNames)
  }
}

export default FieldCheckbox
