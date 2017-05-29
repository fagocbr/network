export default [
  {
    id: 'apply',
    position: ['top', 'bottom'],
    classNames: ['primary', 'raised'],
    label: 'Salvar',
    click: resourceForm => {
      resourceForm.applyRecord()
    }
  },
  {
    id: 'back',
    position: ['top', 'bottom'],
    classNames: ['link', 'raised'],
    label: 'Voltar',
    click: resourceForm => {
      resourceForm.$router.push(resourceForm.base)
    }
  },
  {
    id: 'add',
    icon: 'add',
    position: ['floating'],
    classNames: ['primary', 'circular', 'button-bottom-right', 'raised'],
    click: resourceForm => {
      resourceForm.$router.push(`${resourceForm.base}/create`)
    }
  }
]
