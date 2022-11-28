<template lang="pug">
div.containerImg
  div.left
    ul.vertical_ul
      li
        a asdasd
        a asdasd
        a asdasd
        a asdasd
  div.right
    p asdasdaasdasdasd

</template>


<script setup lang="ts">
</script>


<style scoped lang="sass">
@import '../assets/sass/NavBar'
@import '../assets/sass/backgroud'
//导入外部scss文件

div.left
  width: 15%
  height: 100%
  min-width: 20px
  padding: 0 20px
  position: relative
  box-shadow: 1px 0 5px #00000060
  z-index: 1

div.right
  float: right
  background-color: rgba(139, 94, 185, 0.48)
</style>