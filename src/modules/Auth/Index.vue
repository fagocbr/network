<template>
  <div class="auth">

    <app-layout :left="false" :right="false" :footer="false">
      <stars slot="content">
        <div class="form-login">
          <img src="/statics/logo.png" alt="logo" style="margin: 40px 0 0 0; height: 200px">
          <br>
          <form @submit.prevent="submit" class="form" style="max-width: 420px; margin: 0 auto;">
            <component :is="schemas.user.component" :schema="schemas.user" v-model="record.user"></component>
            <component :is="schemas.password.component" :schema="schemas.password" v-model="record.password"></component>
            <component :is="schemas.remember.component" :schema="schemas.remember" v-model="record.remember"></component>
            <div class="field">
              <button class="primary raised full-width">Log In</button>
            </div>
            <small style="color: #b4b4b4">Just click to log in</small>
          </form>
        </div>
      </stars>
    </app-layout>
  </div>
</template>

<script type="text/javascript">
  import AppLayout from 'modules/Common/Layout/AppLayout.vue'
  import Stars from 'src/modules/Foolish/Stars.vue'

  import 'src/modules/Common/Fields'

  export default {
    name: 'auth-index',
    components: {
      AppLayout, Stars
    },
    data: () => ({
      schemas: {
        user: {
          component: 'field-input',
          label: 'Login'
        },
        password: {
          component: 'field-password',
          label: 'Password'
        },
        remember: {
          component: 'field-checkbox',
          label: 'Remember'
        }
      },
      record: {
        user: '',
        password: '',
        remember: false
      }
    }),
    methods: {
      submit () {
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .auth
    .form-login
      background #fff
      text-align center
      margin 20px auto 0 auto
      max-width 420px
      padding 0 40px 40px 40px
      border-radius 3px
      border 1px solid #092735
</style>
