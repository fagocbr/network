<template>
  <div :class="['app-widget', 'card', clear ? ' --clear' : '']">

    <div class="card-title" v-if="title">
      <slot name="title">
        <label v-html="title"></label>
        <div class="pull-right">
          <button v-for="_button in buttons" :class="_button.className" @click="handleButton(_button)">
            <i>{{ _button.icon }}</i>
          </button>
        </div>
      </slot>
    </div>

    <div class="card-content" :style="style">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
  const AppWidget = {
    name: 'app-widget',
    props: {
      title: {
        default: ''
      },
      padding: {
        default: '20px'
      },
      clear: {
        default: false
      },
      buttons: {
        default: () => ([])
      }
    },
    computed: {
      style () {
        return {
          'padding': this.padding
        }
      }
    },
    methods: {
      /**
       * @param button
       */
      handleButton (button) {
        if (button.handler) {
          button.handler()
        }
      }
    }
  }

  export default AppWidget
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-widget.card
    font-family Roboto
    background #ffffff
    margin 0
    &.--clear
      background transparent
      box-shadow none
    .card-title
      label
        font-size 18px
      .pull-right
        button
          padding 2px 4px
          margin 0
          min-height 0
</style>
