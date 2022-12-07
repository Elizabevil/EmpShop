<script setup lang="ts">


const two_menus = [
  {title: "asd", datas: ["aout", "asda", "ads"]},
  {title: "asd2", datas: ["aout2", "asda2"]}
]
</script>

<template lang="pug">

ul.nav
  li
    a.first_title(href='http://www.script-tutorials.com/') Home
  li(v-for="(item,index) in two_menus" )
    a.first_title(href='#') {{item.title}}
    ul.second_ul
      li(v-for="(item2,index2) in item.datas" )
        a.second_title(href='#') {{item2}}

</template>


<style scoped lang="sass">
@import "src/assets/sass/base"


.nav
  //background: url('public/img/qiyuan.jpg') no-repeat scroll 0 0 transparent
  background: linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)
  clear: both
  height: $font_size *2
  font-size: $font_size
  padding: 0 0 0 9px
  position: relative
  width: 400px


  ul
    border: 1px solid #222
    border-radius: 0 5px 5px 5px
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5)
    position: absolute
    overflow: hidden
    -moz-transform: scaleY(0)
    -ms-transform: scaleY(0)
    -o-transform: scaleY(0)
    -webkit-transform: scaleY(0)
    transform: scaleY(0)

  li
    //background: url('public/img/login_back.jpg') no-repeat scroll right 5px transparent
    color: #c0c0c0
    float: left
    position: relative


    .first_title
      color: #ce9e9e
      display: block
      float: left
      font-weight: normal
      height: 30px
      padding: 10px 20px 0
      position: relative
      text-decoration: none
      text-shadow: 1px 1px 1px #000000


  li:hover
    //background: url('public/img/login_back.jpg') no-repeat scroll right 5px transparent
    background-color: #66dce3
    float: left
    position: relative

    .second_ul
      left: 0
      top: $font_size *2
      position: absolute
      width: 180px
      -moz-transform: scaleY(1)
      -ms-transform: scaleY(1)
      -o-transform: scaleY(1)
      -webkit-transform: scaleY(1)
      transform: scaleY(1)

      li
        width: 100%
        .second_title
          color: #a4a4a4
          display: block
          font-weight: normal
          height: 30px
          padding: 10px 20px 0
          position: relative
          text-decoration: none

        .second_title:hover
          background: #418094
          font-style: inherit


</style>