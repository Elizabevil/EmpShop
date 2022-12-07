<script setup lang="ts">

  import {reactive, ref} from "vue"

  const page = ref(4)
  const translateX = ref(0)
  const tsion = ref(true)
  const src = reactive(
      ['./img/qiyuan.jpg', './img/qiyuan.jpg', './img/qiyuan.jpg', './img/qiyuan.jpg', './img/qiyuan.jpg',
      ]
  )

  // 上一张
  function last() {
    translateX.value--
    tsion.value = true
    if (translateX < 0) {
      setTimeout(() => {
        tsion.value = false
        translateX.value = src.length - 1
      }, 500)
    }
  }

  // 下一张
  function next() {
    translateX.value++
    tsion.value = true
    if (translateX.value > src.length - 1) {
      setTimeout(() => {
        tsion.value = false
        translateX.value = 0
      }, 500)
    }
  }

  function swiper(i) {
    translateX.value = i
  }

</script>

<template lang="pug">

div
  ul.swip_ul
    li(v-for="(item,index) in src" )
      img.swip_img(:src="src[index%page]")
      span.img_content asd
</template>

<style lang="sass" scoped>
.swip_ul
  list-style-type: none
  display: flex
  align-items: center
  flex-wrap: nowrap
  background-color: #e16666

.swiper-container
  list-style: none
  margin-left: auto
  margin-right: auto
  overflow: hidden
  padding: 0
  position: relative
  z-index: 1

.swip_ul li
  float: left

.swip_img
  padding: 4px
  width: 200px
  height: 150px

.swip_img:hover
  opacity: 80%

.img_content
  color: #03e9f4
  text-align: center
  align-self: center
</style>

