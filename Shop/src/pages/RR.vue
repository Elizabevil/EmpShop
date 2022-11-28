<template lang="pug">
div.inline
  ul
    li
      a.active aaaa
    li
      a bbbb
    li
      a cccc
div.nature
  ul
    li
      a.active aaaa
    li
      a bbbb



div.static static
div.fixed fixed
div.absolute absolute
div.sticky sticky
div.column 分列显示 分列显示分列显示分列显示分列显示分列显示分列显示分列显示分列显示
p as
p as
p as
</template>

<script setup lang="ts">


</script>

<style scoped lang="sass">

div.nature ul
  list-style-type: none
  margin: 0
  padding: 0
  border: 1px solid #555
  //边框
  width: 10%
  height: 30%
  /* 全高 */
  position: fixed
  /* 使它产生粘性，即使在滚动时 */
  overflow: auto
/* 如果侧栏的内容太多，则启用滚动条 */

div.nature li
  text-align: center
//display: inline  //默认情况下，<li> 元素是块元素。在这里，我们删除每个列表项之前和之后的换行符，这样它们才能显示在一行。

div.nature li a
  display: block
//- 将链接显示为块元素可以使整个链接区域都可以被单击（而不仅仅是文本），我们还可以指定宽度（如果需要，还可以指定内边距、外边距、高度等）。
/* 鼠标悬停时改变链接颜色 */
div.nature li a:hover:not(.active)
  background-color: #555
  color: white

div.nature li a.active
  background-color: #4CAF50
  color: white


div.inline ul
  list-style-type: none
  margin: 0
  padding: 0
  overflow: hidden
  background-color: #333

div.inline li
  float: left

div.inline li a
  display: block
  color: white
  text-align: center
  padding: 14px 16px
  text-decoration: none

div.inline li a:hover
  background-color: #66dce3

div.inline li a.active
  background-color: #4CAF50

div.inline li a:hover:not(.active)
  background-color: #ec6f6f

div
  //background: #1a1a1a
  background-image: url("src/assets/qiyuan.jpg")
  background-repeat: no-repeat
  background-position: right top
  background-attachment: fixed

div.static
  position: static
  border: 3px solid #73AD21

div.fixed
  position: fixed
  bottom: 0
  right: 0
  width: 300px
  border: 3px solid #73AD21

div.absolute
  position: absolute
  top: 80px
  right: 0
  width: 200px
  height: 100px
  border: 3px solid #73AD21

div.sticky
  position: -webkit-sticky
  /* Safari */
  position: sticky
  top: 0
  background-color: green
  border: 2px solid #4CAF50

div.column
  column-count: 3
  column-gap: 20px
  column-rule-style: solid
  column-rule-width: 2px
  column-rule-color: #284189
</style>