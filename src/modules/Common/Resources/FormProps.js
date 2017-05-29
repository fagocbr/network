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
      default: () => ([
        {
          position: ['top', 'bottom'],
          classNames: ['primary', 'raised'],
          label: 'Salvar',
          click: vm => {
            vm.apply()
          }
        },
        {
          position: ['top', 'bottom'],
          classNames: ['link', 'raised'],
          label: 'Fechar',
          icon: 'add',
          click: vm => {
            vm.$router.push(vm.$parent.base)
          }
        },
        {
          position: ['floating'],
          classNames: ['primary', 'circular', 'button-bottom-right', 'raised'],
          label: '',
          icon: 'add',
          click: vm => {
            vm.$router.push(`${vm.$parent.base}/create`)
          }
        }
      ])
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
