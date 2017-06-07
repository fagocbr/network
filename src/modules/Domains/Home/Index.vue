<template>
  <app-layout :left="left" :right="right" :footer="footer" :swipe="swipe" :flat="flat" :search="search">
    <div slot="header" style="padding: 0 10px">

      <app-drawer-pin v-model="swipe"></app-drawer-pin>

      <q-dialog-select class="dialog-select" type="radio" v-model="nature.selected" :options="nature.options"
                       ok-label="Selecionar" cancel-label="Fechar" title="Matrículas"></q-dialog-select>
      <q-dialog-select class="dialog-select" type="radio" v-model="course.selected" :options="course.options"
                       ok-label="Selecionar" cancel-label="Fechar" title="Matrículas"></q-dialog-select>
      <q-dialog-select class="dialog-select" type="radio" v-model="reference.selected" :options="reference.options"
                       ok-label="Selecionar" cancel-label="Fechar" title="Matrículas"></q-dialog-select>

    </div>
  </app-layout>
</template>

<script type="text/javascript">
  import AppLayout from 'src/modules/Common/Layout/AppLayout.vue'
  import AppToolbar from 'src/modules/Common/Layout/AppToolbar.vue'
  import AppDrawerPin from 'src/modules/Common/Layout/AppDrawerPin.vue'
  import {mapActions} from 'vuex'

  export default {
    name: 'dashboard',
    components: {
      AppLayout, AppToolbar, AppDrawerPin
    },
    methods: {
      ...mapActions(['setAppMenuLeft'])
    },
    data: () => ({
      left: true,
      right: true,
      footer: false,
      swipe: false,
      flat: true,
      search: true,
      nature: {
        selected: '2',
        options: [
          {
            value: '2',
            label: 'GRADUAÇÃO'
          }
        ]
      },
      course: {
        selected: '2',
        options: [
          {
            value: '2',
            label: 'CIÊNCIA DA COMPUTAÇÃO'
          }
        ]
      },
      reference: {
        selected: '2',
        options: [
          {
            value: '2',
            label: '2017-1'
          }
        ]
      }
    }),
    created () {
      this.setAppMenuLeft([
        {
          icon: 'home',
          to: {
            path: '/home', exact: true
          },
          label: 'Principal'
        },
        {
          label: 'Registro Acadêmico',
          icon: 'assignment_ind',
          to: {
            path: '/dashboard/academic', exact: true
          }
        },
        {
          label: 'Financeiro',
          icon: 'attach_money',
          to: {
            path: '/dashboard/financial', exact: true
          }
        },
        {
          label: 'Ouvidoria',
          icon: 'announcement',
          to: {
            path: '/dashboard/ombudsman', exact: true
          }
        },
        {
          label: 'Arquivos',
          icon: 'folder',
          to: {
            path: '/dashboard/files', exact: true
          }
        },
        {
          label: 'Benefícios',
          icon: 'card_giftcard',
          to: {
            path: '/dashboard/benefits', exact: true
          }
        },
        {
          label: 'Indicação Valiosa',
          icon: 'thumb_up',
          to: {
            path: '/dashboard/indication', exact: true
          }
        },
        {
          label: 'Dispensas',
          icon: 'done_all',
          to: {
            path: '/dashboard/dispensation', exact: true
          }
        },
        {
          label: 'Colação de Grau',
          icon: 'school',
          to: {
            path: '/dashboard/graduation', exact: true
          }
        }
      ])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .dialog-select
    margin 0 10px 0 0
</style>
