<script setup lang="ts">
  import {inject, ref} from "vue";
  import {debounce} from "../utils/tools/FunHandle";

  const searchValue = ref("")
  let searchClick = inject('searchValueClick')
  const searchValueClick = () => {
    searchClick(searchValue.value)
  }

</script>
<template lang="pug">
div.search-box
  input.search-txt(placeholder="Search" v-model="searchValue" v-on:keyup.enter="searchValueClick")
  button.search-btn(@click="searchValueClick")
    img.search-img(src="@/assets/search.png" )

</template>
<style scoped lang="sass">

.search-box
  position: absolute
  top: 10%
  right: 5%
  transform: translate(-10%, -50%)
  background: #2f3640
  height: 40px
  border-radius: 100%
  padding: 10px
  display: flex
  justify-content: center


.search-box:hover > .search-txt
  width: 200px
  padding: 0 6px

.search-box:hover > .search-btn
  background: white

.search-btn
  float: right
  width: 40px
  height: 40px
  border-radius: 50%
  background: #2f3640
  display: flex
  justify-content: center
  align-items: center
  transition: 0.4s

.search-txt
  border: none
  background: none
  outline: none
  float: left
  padding: 0
  color: white
  font-size: 16px
  transition: 0.4s
  line-height: 40px
  width: 0px

.search-img
  width: 20px

</style>