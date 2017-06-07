<template>
  <app-widget ref="appWidget" :title="title" :buttons="buttons" :clear="clear">
    <div slot="content">Teste</div>
  </app-widget>
</template>

<script type="text/javascript">
  import AppWidget from 'src/modules/Common/Layout/AppWidget.vue'

  export default {
    components: {
      AppWidget
    },
    name: 'widget-subjects',
    props: {
      clear: {
        default: false
      }
    },
    data () {
      return {
        title: 'Resumo Acadêmico',
        buttons: [
          {
            className: 'primary clear',
            icon: 'loop',
            handler: () => {
              console.log(this)
            }
          },
          {
            className: 'primary clear',
            icon: 'link',
            handler: () => {
              console.log(this)
            }
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
