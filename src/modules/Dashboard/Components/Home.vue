<template>
  <div class="app-content" style="position: relative">
    <div class="toolbar sub-toolbar">
      Home
    </div>
    <div class="app-container">
      <resource-form :title="title" :base="base" :scope="scope" :schemas="schemas" :service="service"></resource-form>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ResourceForm from 'src/modules/Common/Resources/Form.vue'
  import {schemas, service} from 'src/modules/Domains/Aluno/Model/resources'

  export default {
    name: 'dashboard-home',
    components: {
      'resource-form': ResourceForm
    },
    data: () => ({
      title: 'Formulário do Mal',
      base: '/dashboard',
      scope: 'edit',
      service: service,
      schemas: schemas
    })
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
