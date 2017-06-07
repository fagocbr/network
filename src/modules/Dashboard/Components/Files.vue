<template>
  <div class="admin app-content">
    <div class="toolbar sub-toolbar">
      <q-tabs ref="tab" :default-tab="selected">
        <q-tab v-for="_tab in tabs" :key="_tab.id" :name="'t-' + _tab.id">
          <i class="q-tab-closer" @click.stop.prevent="closeTab(_tab)">highlight_off</i>
          <label class="q-tab-inner" @click="selectTab(_tab)" v-html="_tab.label"></label>
        </q-tab>
      </q-tabs>
    </div>
    <div v-for="_tab in tabs" :key="_tab.id" v-show="selected === 't-' + _tab.id"
         :style="style" class="app-container">
      <img src="statics/siga.png" alt="">
    </div>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'

  export default {
    name: '',
    data: () => ({
      selected: 't-0',
      tabs: [
        {
          id: 0,
          label: 'Natureza'
        },
        {
          id: 1,
          label: 'Curso'
        },
        {
          id: 2,
          label: 'Ficha Acadêmica'
        },
        {
          id: 3,
          label: 'Ficha Financeira'
        }
      ]
    }),
    computed: {
      ...mapGetters(['getAppHeight']),
      style () {
        return {
          'height': (this.getAppHeight - 110) + 'px'
        }
      }
    },
    methods: {
      /**
       * @param tab
       */
      selectTab (tab) {
        this.selected = 't-' + tab.id
      },
      /**
       * @param tab
       */
      closeTab (tab) {
        this.tabs.splice(this.tabs.indexOf(tab), 1)
        if (this.selected === 't-' + tab.id && this.tabs.length) {
          this.selected = 't-' + this.tabs[0].id
          console.log(this.selected)
          this.$refs.tab.setActiveTab(this.selected)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .admin
    &.app-content
      position relative
    .app-container
      margin -160px 2% 0 2%
      background #ffffff
  .q-tab
    position relative
    font-size 12px
    min-height 0
    height 30px
    padding 0
    margin 0 1px
    .q-tab-inner
      padding 5px 25px 8px 15px
    .q-tab-closer
      padding 3px
      position absolute
      top 0
      right 0
      z-index 2

  .q-tab.active
    color #388e3c
    border-bottom 2px solid #fff
    background #fff
    border-radius 2px 2px 0 0
    z-index 10
</style>
