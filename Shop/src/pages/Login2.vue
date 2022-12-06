<template lang="pug">
.box
  .login_background

  div.Login_Title Sign In
  div.Login_form
    div
      ul
        li
          .form_title Email
          input
        li
          .form_title Password
          input
    div.remember_me
      input(type="checkbox")
      div  Remember me
    button Sign In
</template>

<script lang="ts" setup>

</script>

<style scoped lang="sass">
@import "src/assets/sass/base"
@import "src/assets/sass/checkBox"
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


.login_background
  position: absolute
  width: 100%
  height: 100%
  background: url("src/assets/login_back.jpg") no-repeat 100% 100%
  -webkit-background-size: cover
  -moz-background-size: cover
  -o-background-size: cover
  background-size: cover
  z-index: -1

.Login_Title
  color: #ffffff
  font-size: 32px
  margin-bottom: 20px
  margin-right: 400px
  text-transform: uppercase
  font-weight: 200

.Login_form
  padding: 20px
  position: relative
  background: #000000
  border: 1px solid #000
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
    margin-top: calc($font_size / 2)
    border-radius: 5px
    padding: calc($font_size / 2)
    box-sizing: border-box
    font-size: $font_size
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


button
  position: relative
  background: linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)
  border-radius: 2px
  border: none
  outline: none
  padding: 8px
  color: #fff
  font-size: 18px
  font-weight: 500
  font-family: inherit
  text-align: center
  letter-spacing: .03em
  cursor: pointer
  min-width: 200px

</style>