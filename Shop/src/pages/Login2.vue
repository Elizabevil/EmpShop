<template lang="pug">
.box
  div.Login_form
    div Login
    div
      ul
        li
          .form_title Email
          input
        li
          .form_title Password
          input
    div
      button 登录

</template>

<script lang="ts" setup>

</script>

<style scoped lang="sass">
@import "src/assets/sass/base"
.box
  width: 100vw
  height: 100vh
  display: flex
  background: #4b4b4b
  flex-direction: column
  flex-wrap: nowrap
  align-content: center
  align-items: center
  justify-content: center


.Login_form
  padding: 20px
  position: absolute
  background: #838383
  border: 1px solid #000
  border-radius: 10%
  display: flex
  flex-direction: column
  align-items: center


  .form_title
    color: #b6b6b6
    font-size: calc($font_size / 1.5)
    border: 2px

ul
  list-style: none

ul li
  margin-top: calc($font_size / 2)

input
  margin-top: calc($font_size / 2)
  border-radius: 20px
  padding: calc($font_size / 2)
  box-sizing: border-box
  font-size: $font_size
  font-weight: 400
  background: rgba(75, 75, 75, 1)

  &:focus
    outline: none

button
  min-width: 100px
  border-radius: 10px
  color: rgb(217, 153, 153)
  border: 0
  font-weight: 100
  margin-top: 10px
  cursor: pointer

</style>