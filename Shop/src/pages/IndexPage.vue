<template lang="pug">
div.container
  ShopTopBar
  SearcherBar
  div
    p a11111sdasdaasdasdasd
    p asdasdaasdasdasd
  div
    p asdasd

</template>


<script setup lang="ts">
  import ShopTopBar from "../components/ShopTopBar.vue";
  import SearcherBar from "../components/SearcherBar.vue";
  import {provide} from "vue";

  const searchClick = (msg: string) => {
    console.log(msg)
  }
  provide('searchValueClick', searchClick) //给自己的后代组件传递数据 /消息订阅/全局事件总线

</script>
<style scoped lang="sass">
@import "src/assets/sass/backgroud"

</style>