<template>
  <q-drawer ref="drawer" :class="classNames" :swipe-only="swipe">
    <div class="toolbar sub-toolbar" style="display: block">
      <div class="user-avatar" style="background-image: url('/statics/photos/user.jpg')"></div>
      <div class="user-account">
        William Correa
      </div>
    </div>
    <div class="list no-border platform-delimiter">
      <input v-if="search" v-model="filter" placeholder="Pesquisar" class="drawer-search full-width">
      <q-drawer-link v-for="_item in menuLeft" :key="_item.icon"
                     :icon="_item.icon" :to="_item.to">
        {{ _item.label }}
      </q-drawer-link>
    </div>
  </q-drawer>
</template>

<script type="text/javascript">
  import Drawer from 'src/modules/Common/Layout/Drawer'

  export default Drawer('left')
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .drawer
    .drawer-search
      padding 10px
    .drawer-search::placeholder
      font-style italic
      color #dddddd
    .user-avatar
      display block
      margin 10px 25px
      width 170px
      height 170px
      border-radius 100px
      background-size cover
      background-repeat no-repeat
  @media screen and (min-width: 768px)
    .drawer:not(.active):not(.swipe-only)
      .drawer-content
        z-index 1
    .flat.drawer:not(.active):not(.swipe-only)
      .drawer-content.left-side
        position fixed !important
        top 0
        z-index 12
        user-select none
        .toolbar
          box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
</style>
