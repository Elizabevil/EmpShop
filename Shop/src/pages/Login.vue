<template lang="pug">
.login_background

.login_box(v-show="isLoginPage" )
  div.Login_Title Sign In
  form.Login_form
    div
      ul
        li(v-for="(item,index) in login_blank" :key="index" )
          .form_title {{item.msg}}
          input(v-model="item.vmode.value" :type="item.type"
            :placeholder="item.placeholder" required=true
            minlength="3" maxlength="64")

    div.remember_me
      input(type="checkbox")
      div  Remember me
    button.loginButton(@click.prevent="SignIn") Sign In

.login_box(v-show="!isLoginPage" )
  div.Login_Title Join Us
  form.register_form
    div
      ul
        li(v-for="(item,index) in regist_blank" :key="index" )
          .form_title {{item.msg}}
          input(v-model="item.vmode.value" :type="item.type" required)


    div.remember_me
    button.loginButton(@click.prevent="SignIn") Sign Up
div.changeToRegister(@click="changePage") To Change
</template>

<script lang="ts" setup>

import {ref} from "vue"
import {Instance} from "../utils/AxiosUtils"
import {LogError, LogSuccess} from "../utils/notification/Index";

let isLoginPage = ref(true)
const email_ref = ref("")
const password_ref = ref("")
const rePassword_ref = ref("")
const login_blank = [
  {msg: "Email", vmode: email_ref, type: "email", placeholder: "example@example.com"},
  {msg: "Password", vmode: password_ref.value, type: "password", placeholder: "your password"},
]
const regist_blank = [
  {msg: "Email", vmode: email_ref, type: "email"},
  {msg: "Password", vmode: password_ref.value, type: "password"},
  {msg: "RePassword", vmode: rePassword_ref.value, type: "password"},
]

const RePassword = ref("")

const SignIn = () => {
  const userInfo = {
    username: login_blank[0].vmode,
    password: login_blank[1].vmode
  }
  console.log(userInfo)
  Instance.get("/login", {}).then(resp => {
    console.log(resp.data)
    LogSuccess("Login In Success")

  }, error => {
    console.log(error)
    LogError("Login In Error")
  })
}

const changePage = () => {
  isLoginPage.value = !isLoginPage.value
}
</script>

<style scoped lang="sass">
@import "src/assets/sass/login"
@import "src/assets/sass/LoginButtun"
@import "src/assets/sass/regist"

</style>