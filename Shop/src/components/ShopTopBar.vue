<script setup lang="ts">
interface Props {
  menus: string[]
}

const props = withDefaults(defineProps<Props>(), {
  menus: () => ['News']
})

</script>

<template lang="pug">

ul.horizon_ul.font_uppercase
  li
    a.shieldLogo
  li(v-for="(item,index) in props.menus" )
    a {{item}}


</template>


<style scoped lang="sass">
@import "../assets/sass/NavBar"
@import "../assets/sass/font"
.shieldLogo
  background: url("src/assets/download.png")
  background-size: 30px

</style>