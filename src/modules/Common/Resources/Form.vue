<template>
  <div class="resource-form">
    <div class="form-container">
      <div class="form-title">{{ title }}</div>
      <div slot="buttons-top" class="form-top">
        <form-action :actions="buttonsTop"></form-action>
      </div>
      <div slot="form" class="form-body">
        <div class="form" v-if="tabs.length">
          <div v-for="_tab in tabs">
            <button class="primary" @click="selected = _tab.value">{{ _tab.label }}</button>
          </div>
          <div v-for="_tab in tabs" v-show="_tab.value === selected">
            <component v-for="_item in itemsFromTab[_tab.value]" :key="_item.field" :ref="_item.field"
                       :is="_item.component" :schema="_item.schema" v-model="record[_item.field]" :state="state"></component>
          </div>
        </div>
        <div class="form" v-if="!tabs.length">
          <component v-for="_item in items" :key="_item.field" :ref="_item.field" :is="_item.component"
                     :schema="_item.schema" v-model="record[_item.field]" :state="state"></component>
        </div>
      </div>
      <div slot="buttons-bottom" class="form-bottom">
        <form-action :actions="buttonsBottom"></form-action>
      </div>
    </div>
    <div slot="buttons-floating" class="form-floating-action">
      <form-action :actions="buttonsFloating"></form-action>
    </div>

    <pre v-if="debug">{{ items }}</pre>
    <pre v-if="debug">{{ record }}</pre>
  </div>
</template>

<script type="text/javascript">
  import 'src/modules/Common/Fields'

  import FormHooks from 'src/modules/Common/Resources/FormHooks'
  import FormMethods from 'src/modules/Common/Resources/FormMethods'
  import FormProps from 'src/modules/Common/Resources/FormProps'
  import FormData from 'src/modules/Common/Resources/FormData'
  import FormComputed from 'src/modules/Common/Resources/FormComputed'

  import FormAction from 'src/modules/Common/Resources/FormAction.vue'

  const ResourceForm = {
    name: 'resource-form',
    mixins: [
      FormHooks, FormMethods, FormProps, FormData, FormComputed
    ],
    components: {
      FormAction
    }
  }

  export default ResourceForm
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .resource-form
    display block
</style>
