<template lang="pug">
.box
  .content
    .login-wrapper
      h1 登录
      .login-form
        .username.form-item
          span 使用邮箱或者手机号
          input.input-item(type='text')
        .password.form-item
          span 密码
          input.input-item(type='password')
        button.login-btn Sign In


      .divider
        span.line
        span.divider-text 其他方式登录
        span.line
      .other-login-wrapper
        .other-login-item
          img(src='https://ts1.cn.mm.bing.net/th/id/R-C.71deac23c198b7f63fb61e7293ad76d8?rik=saBFfTEGfQU0Qw&riu=http%3a%2f%2fpic.ntimg.cn%2f2008-01-13%2f200811392350693_2.jpg&ehk=AxveDFI5kdtBqy%2f%2fB0okvMHFwxF2bwI6xoGmlXyesyo%3d&risl=&pid=ImgRaw&r=0', alt)
        .other-login-item
          img(src='./asset/WeChat.png', alt)
</template>

<script lang="ts" setup>
  import {reactive, ref, watch} from "vue"
  import {useRouter} from "vue-router"
  import IndexPage from "../App.vue"

  const username = ref("")
  const password = ref("")
  const loginData = reactive([
    {"msg": "email", type: "text", "vmode": username},
    {"msg": "password", type: "password", "vmode": password},
  ])
  const submit = () => {
    console.log(username.value)
    console.log(password.value)
  }
</script>

<style scoped lang="sass">
@import "src/assets/sass/login"
</style>