import AbstractInput from 'src/modules/Common/Fields/Contracts/AbstractInput.vue'

const FieldText = {
  mixins: [AbstractInput],
  name: 'field-text',
  created () {
    this.classNames = this.getDefaultClassName(this.$options.name)
    console.log('created', this.$options.name, this.classNames)
  }
}

export default FieldText
