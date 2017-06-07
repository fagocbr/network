<template>
  <q-drawer ref="drawer" :class="classNames" :swipe-only="swipe">
    <div class="toolbar sub-toolbar" style="display: block">
      <div class="user-avatar --big" style="background-image: url('/statics/photos/user.jpg')"></div>
      <div class="user-account">
        William Correa
      </div>
    </div>
    <div class="list no-border platform-delimiter">
      <input v-if="search" v-model="filter" placeholder="Pesquisar" class="drawer-search full-width">
      <q-drawer-link v-for="_item in menuLeft" :key="_item.icon"
                     :icon="_item.icon" :to="_item.to">
        <span v-html="_item.html"></span>
      </q-drawer-link>
    </div>
  </q-drawer>
</template>

<script type="text/javascript">
  import Drawer from 'src/modules/Common/Layout/Drawer'

  const AppDrawerLeft = Drawer('left')

  export default AppDrawerLeft
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .drawer
    .user-avatar
      margin 10px 20px
    mark
      background yellow
    .drawer-content .list
      background #ffffff
    .drawer-search
      padding 10px
    .drawer-search::placeholder
      font-style italic
      color #dddddd
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
