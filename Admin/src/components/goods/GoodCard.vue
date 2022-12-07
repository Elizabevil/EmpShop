<template lang="pug">

//a.hero_click_overlay
img.good_img(src='https://cdn.cloudflare.steamstatic.com/steam/apps/594650/hero_capsule.jpg?t=1669136183', data-src='https://cdn.cloudflare.steamstatic.com/steam/apps/594650/hero_capsule.jpg?t=1669136183')
div.hover_screenshots
  div.hover_video_container( data-background="url( https://cdn.cloudflare.steamstatic.com/steam/apps/594650/ss_ecccaab1143081ca96d8bf00d8b1c4d3d3291e64.600x338.jpg?t=1669136183)"  )
    video.hero_video(preload="none" muted="muted")
      source(src="https://cdn.cloudflare.steamstatic.com/steam/apps/256893785/microtrailer.webm?t=1656430960?v=3"
        type="video/webm")


p aaaaaaaaaaaa
GoodPrice
</template>


<script setup lang="ts">
  import GoodPrice from "./GoodPrice.vue";
</script>

<style lang="sass">
$font_size: 20px
.good_img
  width: 200px
  height: 300px

.good_img:hover
  width: 1200px


</style>
