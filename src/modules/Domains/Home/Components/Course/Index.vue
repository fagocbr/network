<template>
  <app-view>
    <div class="grid">
      <subjects class="column has-50"></subjects>
    </div>
  </app-view>
</template>

<script type="text/javascript">
  import AppView from 'src/modules/Domains/Home/Layout/AppView.vue'
  import Subjects from 'src/modules/Domains/Home/Components/Widgets/Subjects.vue'

  export default {
    components: {
      AppView, Subjects
    },
    name: 'course-index'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
