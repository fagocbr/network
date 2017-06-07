<template>
  <div class="pin-wrapper hide-small">
    <svg class="pin-icon" viewBox="0 0 24 24" @click="changePinDrawer">
      <path fill="#EEEEEE" :d="draw"></path>
    </svg>
  </div>
</template>

<script type="text/javascript">
  const AppDrawerPin = {
    name: 'app-drawer-pin',
    props: ['value'],
    data: () => ({
      pin: false,
      no: 'M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z',
      yes: 'M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z'
    }),
    computed: {
      draw () {
        return this.pin ? this.yes : this.no
      }
    },
    methods: {
      changePinDrawer () {
        this.pin = !this.pin
        this.$emit('input', this.pin)
      }
    },
    created () {
      this.pin = !!this.value
    }
  }

  export default AppDrawerPin
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .pin-wrapper
    display inline-block
    margin 10px 5px
    width 24px
    height 24px
    opacity .7
    transition opacity .3s
    .pin-icon
      cursor pointer
    &:hover
      opacity 1
</style>
