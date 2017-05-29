import AbstractInput from 'src/modules/Common/Fields/Contracts/AbstractInput.vue'

const FieldPassword = {
  mixins: [AbstractInput],
  name: 'field-password',
  data: () => ({
    type: 'password'
  }),
  created () {
    this.classNames = this.getDefaultClassName(this.$options.name)
    console.log('created', this.$options.name, this.classNames)
  }
}

export default FieldPassword
