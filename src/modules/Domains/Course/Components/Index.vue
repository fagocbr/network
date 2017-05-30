<template>
  <div class="app-content" style="position: relative">
    <div class="app-container" style="margin: 20px 1% 30px 2%;">
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
