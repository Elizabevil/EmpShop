<template lang="pug">

.hero_capsule
  //a.hero_click_overlay
  img.hero_capsule_img(src='https://cdn.cloudflare.steamstatic.com/steam/apps/594650/hero_capsule.jpg?t=1669136183', data-src='https://cdn.cloudflare.steamstatic.com/steam/apps/594650/hero_capsule.jpg?t=1669136183')
  div.hover_screenshots
    div.hover_video_container( data-background="url( https://cdn.cloudflare.steamstatic.com/steam/apps/594650/ss_ecccaab1143081ca96d8bf00d8b1c4d3d3291e64.600x338.jpg?t=1669136183)"  )
      video.hero_video(preload="none" muted="muted")
        source(src="https://cdn.cloudflare.steamstatic.com/steam/apps/256893785/microtrailer.webm?t=1656430960?v=3"
          type="video/webm")

  div.hero_data.hero_add_to_cart
    button.btn_green_white_innerfade.btn_medium( type="button")
      span
  .discount_block
    .discount_pct -60%
    .discount_prices
      .discount_original_price $49.00
      .discount_final_price $19.60

</template>


<script setup lang="ts">


</script>

<style lang="sass">
@import "src/assets/sass/hero"
</style>
