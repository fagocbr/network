<template>
  <div class="app-content" style="position: relative">
    <div class="toolbar sub-toolbar">
      <q-dialog-select type="radio" v-model="selected" :options="options" style="min-width: 250px"
                       ok-label="Selecionar" cancel-label="Fechar" title="Matrículas"></q-dialog-select>
    </div>
    <div class="app-container">
      <q-tabs :refs="$refs" default-tab="tab-1">
        <q-tab name="tab-1" route="/dashboard/resume">
          Resumo
        </q-tab>
        <q-tab name="tab-2" route="/dashboard/academic/courses/disciplines">
          Disciplinas
        </q-tab>
        <q-tab name="tab-3" route="/dashboard/academic/courses/internship">
          Estágio
        </q-tab>
      </q-tabs>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: '',
    props: {},
    data: () => ({
      selected: '2',
      options: [
        {
          value: '2',
          label: 'CIÊNCIA DA COMPUTAÇÃO'
        }
      ]
    }),
    computed: {},
    methods: {},
    created () {
    },
    mounted () {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .q-tab {
    min-height: 0;
    padding: 5px 20px 5px 20px;
  }
</style>
