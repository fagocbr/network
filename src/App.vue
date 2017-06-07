<template>
  <router-view></router-view>
</template>

<script type="text/javascript">
  import { Utils } from 'quasar-framework'
  import { mapActions } from 'vuex'
  /*
   * Root component
   */
  export default {
    name: 'app-root',
    data: () => ({
      title: 'Title'
    }),
    created () {
      window.document.title = this.title
      this.resize()
      if (window.addEventListener) {
        window.addEventListener('resize', this.resize, true)
      }
    },
    methods: {
      ...mapActions(['setAppWidth', 'setAppHeight']),
      resize () {
        let {width, height} = Utils.dom.viewport()
        this.setAppWidth(width)
        this.setAppHeight(height)
      }
    }
  }
</script>

<style></style>
