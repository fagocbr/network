<template>
  <app-widget class="widget-user-resume" ref="appWidget" :padding="0" :clear="clear">
    <div slot="content" class="grid">
      <div class="column --avatar">
        <div class="user-avatar --medium" style="background-image: url('/statics/photos/user.jpg')"></div>
      </div>
      <div class="column">
        William Correa
      </div>
    </div>
  </app-widget>
</template>

<script type="text/javascript">
  import AppWidget from 'src/modules/Common/Layout/AppWidget.vue'

  export default {
    components: {
      AppWidget
    },
    name: 'widget-user-resume',
    props: {
      clear: {
        default: false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .widget-user-resume
    .grid .column.--avatar
      max-width 90px
</style>
