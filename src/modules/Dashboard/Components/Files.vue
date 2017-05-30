<template>
  <div class="app-content" style="position: relative">
    <div class="toolbar sub-toolbar">
      <q-tabs :refs="$refs" default-tab="tab-1">
        <q-tab name="tab-1" route="/dashboard/resume">
          Resumo
        </q-tab>
        <q-tab name="tab-2" route="/dashboard/courses/graduation">
          Graduação
        </q-tab>
        <q-tab name="tab-3" route="/dashboard/courses/pos-graduation">
          Pós-Graduação
        </q-tab>
        <q-tab name="tab-4" route="/dashboard/courses/event">
          Evento
        </q-tab>
        <q-tab name="tab-5" route="/dashboard/courses/extension">
          Extensão
        </q-tab>
      </q-tabs>
    </div>
    <div class="app-container" style="margin: -143px 1% 30px 2%;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: '',
    props: {},
    data: () => ({}),
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
  .q-tab.active {
    color: #388e3c;
    border-bottom: 2px solid #fff;
    background: #fff;
    border-radius: 2px 2px 0 0;
    z-index: 10;
  }
</style>
