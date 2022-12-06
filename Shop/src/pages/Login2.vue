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
    div
      div  Remember me
      div.newlogindialog_Checkbox(tabindex="0")
      svg.SVGIcon_Button.SVGIcon_Check(version='1.1', xmlns='http://www.w3.org/2000/svg', x='0px', y='0px', width='256px', height='256px', viewbox='0 0 256 256', stroke-width='35', stroke='#fff', stroke-linecap='round', stroke-linejoin='round', stroke-miterlimit='10')
        polyline(fill='none', points='49.5,147.75 95,210.75 206.5,45.25 ')

    button 登录

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
.Login_Title
  color: #fff
  font-size: 32px
  text-transform: uppercase
  letter-spacing: .055em
  font-weight: 200

.Login_form
  padding: 20px
  position: relative
  background: #000000
  border: 1px solid #000
  border-radius: 10%
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


.newlogindialog_Checkbox
  width: 14px
  height: 14px
  padding: 3px
  border-radius: 2px
  background-color: #32353c
  cursor: pointer


button
  position: relative
  background: linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)
  border-radius: 2px
  border: none
  outline: none
  padding: 12px
  color: #fff
  font-size: 18px
  font-weight: 500
  font-family: inherit
  text-align: center
  letter-spacing: .03em
  cursor: pointer
  min-width: 200px

</style>