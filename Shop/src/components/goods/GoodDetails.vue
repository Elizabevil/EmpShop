<template lang="pug">
.card_detail
  .card_detail_title
    .card_detail_title 'Call of the Wild'
    .card_detail_released Time
  .card_detail_container
    img.card_detail_img(:src="gameImgs[imgIndex].url" alt="item"  )
    .card_detail_evaluation overall user reviews
      br
      div overall user reviews
  .card_detail_user_tags User tags
    .ul
      .li Fishing
      .li nihao
      .li nihao

</template>

<script setup lang="ts">
  import {onMounted, reactive, ref} from "vue"

  const gameTags = ["as", "asdss"]

  const gameImgs = reactive([{
        "url": "https://www.w3school.com.cn/ui2017/compatible_chrome.png",
        "isShow": true,
      }, {

        "url": "https://www.w3school.com.cn/ui2017/compatible_ie.png",
        "isShow": false,
      }]
  )
  let imgIndex = ref<number>(0)

  function setTime() {
    let index = 0
    setInterval(() => {
      index++
      imgIndex.value = index % gameImgs.length
      gameImgs[imgIndex.value].isShow = true
      console.log(index)
    }, 1500)

  }

  onMounted(() => {
    setTime()
  })
</script>

<style lang="sass">
$font_size: 20px

.card_detail
  position: absolute
  width: 200px
  display: flex
  color: #acdbf5
  background: #def5f3
  font-size: 20px
  flex-direction: column
  align-items: center

  .card_detail_title
    background: rgba(112, 111, 111, 0)

  .card_detail_container
    padding: 5px

    .card_detail_img
      width: 100%
      height: 100px
      min-width: 150px
      vertical-align: center
      horiz-align: center
      background-size: cover
      display: inline-block
      background: #706f6f

  .card_detail_evaluation
    margin-top: 2px
    background: #706f6f
    color: #d7d7d7
    font-style: normal
    font-size: calc($font-size / 1.5)
    text-align: left

  .card_detail_user_tags
    color: #4d4d4d
    font-style: oblique


    .card_detail_user_tags ul
      width: auto
      list-style-type: none
      margin: 0
      padding: 0
      overflow: hidden
      background-color: #333
      display: flex
      align-items: center

      .card_detail_user_tags ul li
        float: left


</style>
