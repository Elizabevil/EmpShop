<template lang="pug">
div.container
  //ShopTopBar(:menus="menus")
  //ShopSliceBar(:menus="menus")
  ShopMenuBar
  //SearcherBar
  .cccc
  div
    p a11111sdasdaasdasdasd
    p asdasdaasdasdasd
  div
    p asdasd

</template>


<script setup lang="ts">
import ShopMenuBar from "../components/bar/ShopMenuBar.vue";

import ShopTopBar from "../components/bar/ShopTopBar.vue";
import SearcherBar from "../components/bar/SearcherBar.vue";
import {provide} from "vue";
import ShopSliceBar from "../components/bar/ShopSliceBar.vue";

const searchClick = (msg: string) => {
  console.log(msg)
}

const menus = ["help", "community", "news", "ABOUT"]

provide('searchValueClick', searchClick) //给自己的后代组件传递数据 /消息订阅/全局事件总线

</script>
<style scoped lang="sass">
@import "src/assets/sass/backgroud"
.cccc
  margin-left:  auto
</style>