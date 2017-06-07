<template>
  <app-view>
    <div class="grid --wrap">
      <div class="column has-100 --padding">
        <resume :clear="true"></resume>
      </div>
      <div class="column has-50 --padding">
        <subjects></subjects>
      </div>
      <div class="column has-50 --padding">
        <subjects></subjects>
      </div>
      <div class="column has-100 --padding">
        <subjects></subjects>
      </div>
      <div class="column has-60 --padding">
        <subjects></subjects>
      </div>
      <div class="column has-20 --padding">
        <subjects></subjects>
      </div>
      <div class="column has-20 --padding">
        <subjects></subjects>
      </div>
    </div>
  </app-view>
</template>

<script type="text/javascript">
  import AppView from 'src/modules/Domains/Home/Layout/AppView.vue'
  import Subjects from 'src/modules/Domains/Home/Components/Widgets/Subjects.vue'
  import Resume from 'src/modules/Domains/Home/Components/Widgets/Resume.vue'

  export default {
    components: {
      AppView, Resume, Subjects
    },
    name: 'course-index'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
