<template lang="pug">
.box
  SliceNotification

  .login_background
  div.Login_Title Sign In
  form.Login_form
    div
      ul
        li(v-for="(item,index) in form_blank" :key="index" )
          .form_title {{item.msg}}
          input(v-model="item.vmode")

    div.remember_me
      input(type="checkbox")
      div  Remember me
    button.loginButton(@click.prevent="SignIn") Sign In

  div.changeToRegister Join IN
</template>

<script lang="ts" setup>

import {ref} from "vue"
import {Instance} from "../utils/AxiosUtils"
import SliceNotification from "../components/notification/SliceNotification.vue";

const form_blank = [{
  msg: "Email", vmode: ref("").value
}, {
  msg: "Password", vmode: ref("").value
},
]
const SignIn = () => {
  const userInfo = {
    username: form_blank[0].vmode,
    password: form_blank[1].vmode
  }
  console.log(userInfo)
  Instance.get("/login", {}).then(resp => {
    console.log(resp.data)
  }, error => {
    console.log(error)
  })
}

</script>

<style scoped lang="sass">
@import "src/assets/sass/base"
@import "src/assets/sass/checkBox"
@import "src/assets/sass/LoginButtun"

.changeToRegister
  display: flex
  position: absolute
  width: 100%
  bottom: 0
  /* 关键 */
  left: 0
  /* IE下  一定要记得 */
  height: 60px
  /* footer的高度一定要是固定值*/
  background: #424242

.box
  width: 100vw
  height: 100vh
  display: flex
  color: #03e9f4
  background-clip: border-box
  flex-direction: column
  flex-wrap: nowrap
  align-content: center
  align-items: center
  justify-content: center


.Login_Title
  color: #ffffff
  font-size: 32px
  margin-bottom: 20px
  margin-right: 400px
  text-transform: uppercase
  font-weight: 200

.Login_form
  padding: 10px
  position: relative
  background: #000000
  border: 1px solid #6e6e6e
  border-radius: 5%
  display: flex
  flex-direction: column
  align-items: center


  .form_title
    color: #3e87fd
    font-size: calc($font_size / 1.5)
    border: 2px

ul
  list-style: none

ul li
  margin-top: calc($font_size / 2)

  input
    min-width: 300px
    margin-top: calc($font_size / 5)
    border-radius: 5px
    padding: calc($font_size / 2)
    box-sizing: border-box
    font-size: calc($font_size / 1.5)
    font-weight: 400
    background: rgb(208, 208, 208)

  &:focus
    outline: none

.remember_me
  padding: 10px
  text-align: left
  display: flex
  flex-direction: row
  align-items: center
  margin-right: auto

  div
    margin-left: 5px


</style>