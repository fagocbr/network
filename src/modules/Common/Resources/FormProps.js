import FormActions from 'src/modules/Common/Resources/FormActions'

const FormProps = {
  props: {
    tabs: {
      type: Array,
      default: () => ([])
    },
    schemas: {
      default: () => ({})
    },
    entry: {
      default: () => ({})
    },
    title: {
      type: String,
      default: ''
    },
    scope: {
      type: String,
      default: ''
    },
    base: {
      type: String,
      default: ''
    },
    service: {
      type: Object,
      default: () => ({})
    },
    action: {
      type: String,
      default: ''
    },
    actions: {
      type: Array,
      default: () => FormActions
    },
    params: {
      type: Array,
      default: () => (['id'])
    },
    success: {
      type: String,
      default: ''
    },
    debug: {
      type: Boolean,
      default: false
    }
  }
}

export default FormProps
