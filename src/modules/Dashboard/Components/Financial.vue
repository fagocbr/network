<template>
  <div class="app-content">
    <div class="toolbar sub-toolbar">
      Forms
    </div>
    <div class="app-container form-wrapper">
      <resource-form :title="title" :base="base" :service="service" :action="action"
                     :scope="scope" :schemas="schemas" :actions="actions"></resource-form>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ResourceForm from 'src/modules/Common/Resources/Form.vue'

  export default {
    name: 'dashboard-form',
    components: {
      ResourceForm
    },
    data: () => ({
      title: 'Forms do Mal',
      base: '/dashboard/forms',
      service: {},
      action: 'create',
      scope: 'create',
      schemas: [
        {
          field: 'aln_nome',
          label: 'Nome',
          scope: ['create', 'index', 'edit'],
          schema: {
            tab: 'one',
            component: 'field-input',
            order: 1,
            overrides: {
              index: {
                order: 2
              }
            }
          }
        }
      ],
      actions: [
        {
          id: 'save',
          position: ['top', 'bottom'],
          classNames: ['primary', 'raised'],
          disabled: true,
          label: 'Salvar',
          click: resourceForm => {
            resourceForm.applyRecord()
          }
        },
        {
          position: ['top', 'bottom'],
          classNames: ['raised'],
          label: 'Habilitar',
          click: resourceForm => {
            resourceForm.mapAction(_action => {
              if (_action.id === 'save') {
                _action.disabled = !_action.disabled
              }
              return _action
            })
          }
        },
        {
          position: ['floating'],
          classNames: ['primary', 'circular', 'button-bottom-right', 'raised'],
          label: '',
          icon: 'add',
          click: resourceForm => {
            resourceForm.$router.push(`${resourceForm.base}/create`)
          }
        }
      ]
    })
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-content
    position relative
</style>
