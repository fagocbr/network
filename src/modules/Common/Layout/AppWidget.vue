<template>
  <div class="app-widget card">

    <div class="card-title">
      <slot name="title">
        <label v-html="title"></label>
        <div class="pull-right">
          <button v-for="_button in buttons" :class="_button.className" @click="handleButton(_button)">
            <i>{{ _button.icon }}</i>
          </button>
        </div>
      </slot>
    </div>

    <div class="card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'app-widget',
    props: {
      title: {
        default: ''
      },
      buttons: {
        default: () => ([])
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
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-widget.card
    font-family Roboto
    background #ffffff
    .card-title
      label
        font-size 18px
      .pull-right
        button
          padding 2px 4px
          margin 0
          min-height 0
</style>
