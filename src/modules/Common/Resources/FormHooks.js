import {parseItems, parseRecord} from 'src/services/resource'

const getParameters = (route, params) => {
  // route.params.id
  console.log(route, params)
  return []
}

// Mixin FormHooks
const FormHooks = {
  /**
   * hook BeforeCreate
   */
  created () {
    /**
     * @type {{}}
     */
    this.items = parseItems(this.schemas, this.scope)
    /**
     */
    this.record = parseRecord(this.items)
    /**
     */
    if (this.tabs.length) {
      const itemsFromTab = {}
      this.tabs.forEach(_tab => {
        if (!this.selected) {
          this.selected = _tab.value
        }
        itemsFromTab[_tab.value] = parseItems(this.schemas.filter(_item => _item.schema.tab === _tab.value), this.scope)
      })
      this.itemsFromTab = itemsFromTab
    }
  },
  // getData from service
  beforeRouteEnter (to, from, next) {
    const parameters = getParameters(to, this.params)
    if (!parameters.length) {
      next()
    }
    this.service
      .get(parameters.join('/'))
      .then((response) => {
        next(vm => vm.setData(response.data))
      })
      .catch((response) => {
        this.error(response.error)
      })
  },
  // when route changes and this component is already rendered,
  // the logic will be slightly different.
  beforeRouteUpdate (to, from, next) {
    this.data = null
    const parameters = getParameters(to, this.params)
    if (!parameters.length) {
      next()
    }
    this.service
      .get(to.params.id)
      .then((response) => {
        this.setData(response.data)
        next()
      })
      .catch((response) => {
        this.error(response.error)
      })
  }
}

export default FormHooks
