import {api} from 'src/services/api'

/**
 * GET v1/:module/:entity ~> service.get()
 * POST v1/:module/:entity ~> service.post({})
 * PUT v1/:module/:entity/:id ~> service.post(id, {})
 * PATCH v1/:module/:entity/:id ~> service.post(id, {})
 * DELETE v1/:module/:entity/:id ~> service.post(id)
 */
export const service = api('academico/aluno')

/**
 * @type {[*]}
 */
export const schemas = [
  {
    field: 'aln_nome',
    label: 'Nome',
    scope: ['create', 'edit'],
    schema: {
      component: 'field-input',
      order: 1,
      disabled: true,
      overrides: {
        edit: {
          order: 2
        }
      }
    }
  },
  {
    field: 'aln_observacao',
    label: 'Observação',
    scope: ['create', 'edit'],
    schema: {
      component: 'field-textarea',
      order: 1,
      overrides: {
        edit: {
          order: 2
        }
      }
    }
  },
  {
    field: 'aln_sexo',
    label: 'Sexo',
    scope: ['create', 'edit'],
    schema: {
      component: 'field-radio',
      options: [
        {
          value: 'F',
          label: 'Feminino'
        },
        {
          value: 'M',
          label: 'Masculino'
        }
      ],
      default: 'F',
      order: 1,
      overrides: {
        edit: {
          order: 2
        }
      }
    }
  },
  {
    field: 'aln_dinheiro',
    label: 'Sexo',
    scope: ['create', 'edit'],
    schema: {
      component: 'field-radio',
      disabled: true,
      default: 'M',
      options: [
        {
          value: 'F',
          label: 'Feminino'
        },
        {
          value: 'M',
          label: 'Masculino'
        }
      ],
      order: 1,
      overrides: {
        edit: {
          order: 2
        }
      }
    }
  }
]
