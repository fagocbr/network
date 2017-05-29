import AbstractRadio from 'src/modules/Common/Fields/Contracts/AbstractRadio.vue'

const FieldRadio = {
  mixins: [AbstractRadio],
  name: 'field-radio',
  created () {
    this.classNames = this.getDefaultClassName(this.$options.name)
    console.log('created', this.$options.name, this.classNames)
  }
}

export default FieldRadio
