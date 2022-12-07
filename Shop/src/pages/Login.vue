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
          input(v-model="item.vmode.value" :type="item.type"
            :placeholder="item.placeholder" required=true
            minlength="3" maxlength="64")

    div.remember_me
    button.loginButton(@click.prevent="SignUp") Sign Up
div.changeToRegister(@click="changePage") To Change
  div {{login_blank}}
</template>

<script lang="ts" setup>

import {ref, watchEffect} from "vue"
import {LogError, LogSuccess} from "../utils/notification/Index";

let isLoginPage = ref(true)
const ref_email = ref("")
const ref_password = ref("")
const ref_rePassword = ref("")

let login_blank = [
  {msg: "Email", vmode: ref_email, type: "email", placeholder: "example@example.com"},
  {msg: "Password", vmode: ref_password, type: "password", placeholder: "your password"},
]
let regist_blank = [
  {msg: "Email", vmode: ref_email, type: "email", placeholder: "example@example.com"},
  {msg: "Password", vmode: ref_password, type: "password", placeholder: "your password"},
  {msg: "RePassword", vmode: ref_rePassword, type: "password", placeholder: "re your password"},
]

const double_password = {
  ref_password,
  ref_rePassword,
}

watchEffect(() => {
  let isSample = double_password.ref_password.value.trim() == double_password.ref_rePassword.value.trim()
  if (isSample && !double_password.ref_rePassword.value == "") {
    LogSuccess("yes")
  }
})

const SignIn = () => {
  const userInfo = {
    username: ref_email.value,
    password: ref_password.value
  }
  console.log(userInfo)
  // Instance.get("/login", {}).then(resp => {
  //   console.log(resp.data)
  //   LogSuccess("Login In Success")
  // }, error => {
  //   console.log(error)
  //   LogError("Login In Error")
  // })
}
const SignUp = () => {
  const userInfo = {
    username: ref_email.value.trim(),
    password: ref_password.value.trim()
  }
  console.log(userInfo)
}

const changePage = () => {
  isLoginPage.value = !isLoginPage.value
  ref_email.value = ""
  ref_password.value = ""
  ref_rePassword.value = ""


}
</script>

<style scoped lang="sass">
@import "src/assets/sass/login"
@import "src/assets/sass/LoginButtun"
@import "src/assets/sass/regist"

</style>