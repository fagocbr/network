<template>
  <q-layout :class="classNames">

    <div v-if="header" slot="header" class="toolbar">
      <app-drawer-toggle v-if="left" :drawer="leftDrawer"
                         side="left" v-show="showToggleDrawerLeft"></app-drawer-toggle>

      <slot name="header">
        <app-toolbar></app-toolbar>
      </slot>

      <app-drawer-toggle v-if="right" :drawer="rightDrawer"
                         side="right"></app-drawer-toggle>
    </div>

    <app-drawer-left ref="leftDrawer" v-show="left" :flat="flat" :swipe="swipe" :search="search"></app-drawer-left>

    <slot name="content">
      <div class="layout-view" ref="layoutView">
        <transition name="slide-left">
          <router-view class="layout-router"></router-view>
        </transition>
      </div>
    </slot>

    <app-drawer-right ref="rightDrawer" v-show="right"></app-drawer-right>

    <div slot="footer" v-if="footer">
      <app-footer></app-footer>
    </div>

  </q-layout>
</template>

<script type="text/javascript">
  import AppToolbar from 'src/modules/Common/Layout/AppToolbar.vue'
  import AppDrawerToggle from 'src/modules/Common/Layout/AppDrawerToggle.vue'
  import AppDrawerLeft from 'src/modules/Common/Layout/AppDrawerLeft.vue'
  import AppDrawerRight from 'src/modules/Common/Layout/AppDrawerRight.vue'
  import AppFooter from 'src/modules/Common/Layout/AppFooter.vue'

  const AppLayout = {
    name: 'app-layout',
    components: {
      AppToolbar, AppDrawerToggle, AppDrawerLeft, AppDrawerRight, AppFooter
    },
    props: {
      header: {
        type: Boolean,
        default: true
      },
      left: {
        type: Boolean,
        default: true
      },
      right: {
        type: Boolean,
        default: true
      },
      footer: {
        type: Boolean,
        default: true
      },
      flat: {
        type: Boolean,
        default: false
      },
      swipe: {
        type: Boolean,
        default: false
      },
      search: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      scrolled: false,
      rightDrawer: {},
      leftDrawer: {}
    }),
    computed: {
      classNames () {
        const classNames = ['app-layout']
        if (this.flat) {
          classNames.push('flat-header')
        }
        if (this.swipe) {
          classNames.push('swipe-header')
        }
        if (!this.left) {
          classNames.push('no-left')
        }
        if (!this.scrolled) {
          classNames.push('no-scroll')
        }
        return classNames
      },
      showToggleDrawerLeft () {
        return this.left
      }
    },
    methods: {
      handleScroll () {
        this.scrolled = this.$refs.layoutView.scrollTop > 0
      }
    },
    mounted () {
      this.leftDrawer = this.$refs.leftDrawer
      this.rightDrawer = this.$refs.rightDrawer
      if (this.$refs.layoutView) {
        this.$refs.layoutView.addEventListener('scroll', this.handleScroll)
      }
    },
    destroyed () {
      if (this.$refs.layoutView) {
        this.$refs.layoutView.removeEventListener('scroll', this.handleScroll)
      }
    }
  }

  export default AppLayout
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .flat-header
    &.no-scroll .layout-header
      box-shadow none

  .flat-header
    .layout-header
      padding-left 38px

  .swipe-header:not(.no-left)
    .layout-header
      padding-left 38px

  @media (min-width 768px)
    .flat-header:not(.swipe-header):not(.no-left)
      .layout-header
        padding-left 250px
</style>
