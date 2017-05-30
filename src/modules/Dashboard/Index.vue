<template>
  <div>
    <app-layout :left="left" :right="right" :footer="footer" :swipe="swipe" :flat="flat"></app-layout>
  </div>
</template>

<script type="text/javascript">
  import AppLayout from 'src/modules/Common/Layout/AppLayout.vue'
  import AppToolbar from 'src/modules/Common/Layout/AppToolbar.vue'
  import {mapActions} from 'vuex'

  export default {
    name: 'dashboard',
    components: {
      AppLayout, AppToolbar
    },
    methods: {
      ...mapActions(['setAppMenuLeft'])
    },
    data: () => ({
      left: true,
      right: true,
      footer: false,
      swipe: false,
      flat: true
    }),
    created () {
      this.setAppMenuLeft([
        {
          icon: 'home',
          to: {
            path: '/dashboard', exact: true
          },
          label: 'Home'
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
</style>
