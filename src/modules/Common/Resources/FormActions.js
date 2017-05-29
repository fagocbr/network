export default [
  {
    id: 'apply',
    position: ['top', 'bottom'],
    classNames: ['primary'],
    label: 'Salvar',
    click: resourceForm => {
      resourceForm.applyRecord()
    }
  },
  {
    id: 'back',
    position: ['top', 'bottom'],
    classNames: ['white'],
    label: 'Voltar',
    click: resourceForm => {
      resourceForm.$router.push(resourceForm.base)
    }
  },
  {
    id: 'add',
    icon: 'add',
    position: ['floating'],
    classNames: ['primary', 'circular'],
    click: resourceForm => {
      resourceForm.$router.push(`${resourceForm.base}/create`)
    }
  }
]
