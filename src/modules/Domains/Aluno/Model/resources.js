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
      component: 'field-text',
      order: 1,
      overrides: {
        edit: {
          order: 2
        }
      }
    }
  }
]
