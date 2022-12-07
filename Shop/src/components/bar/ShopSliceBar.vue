<script setup lang="ts">
interface Props {
  menus: string[]
}

const props = withDefaults(defineProps<Props>(), {
  menus: () => ['News']
})

</script>

<template lang="pug">
ul.vertical_ul.fontaa
  li
    a 用户a
  li(v-for="(item,index) in props.menus" )
    a {{item}}


</template>


<style scoped lang="sass">
@import "../../assets/sass/NavBar"

</style>