<template lang="pug">


.card_info
  .card_title MIDWEEK MADNESS
  .card_details MIDWEEK MADNESS
  .discount_block
    .discount_pct  {{discount_pct}}%
    .discount_prices
      .discount_original_price {{priceUnit}}{{discount_original_price}}
      .discount_final_price {{priceUnit}}{{discount_final_price}}

</template>

<script setup lang="ts">
  import {reactive, toRef, toRefs} from "vue";

  let data = reactive({
    priceUnit: "$",
    discount_original_price: 13,
    discount_final_price: 10,
  })
  const {priceUnit, discount_final_price, discount_original_price} = toRefs(data)
  const discount_pct = -(1 - discount_final_price.value / discount_original_price.value).toFixed(2) * 100

</script>

<style lang="sass">
$font_size: 20px

.card_info
  position: absolute
  width: auto
  display: flex
  color: #acdbf5
  font-size: 20px
  background: url("@/assets/background_spotlight.jpg")
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-items: center


  .card_title
    width: auto
    display: block
    color: #f3f3f3
    font-size: $font_size
    margin: 10px
    text-align: center

  .card_details
    width: auto
    display: block
    color: #acdbf5
    font-weight: 300
    font-size: calc($font-size / 1.8)
    text-align: center


  .discount_block
    position: relative
    display: flex
    flex-direction: row
    min-width: calc($font-size * 1.8)
    max-width: calc($font-size * 10)
    height: calc($font-size * 1.8)
    padding: 10px
    align-content: center
    justify-items: center

    .discount_pct
      font-size: calc($font-size)
      color: #BEEE11
      background: #4c6b22
      padding: 6px


    .discount_prices
      display: flex
      background-color: #344654
      color: #00d8ff
      padding: 5px
      min-width: 30px
      flex-direction: column
      align-items: center
      justify-content: center


      .discount_original_price
        color: #afafaf
        font-size: calc($font-size / 2)
        font-style: italic
        text-decoration-line: line-through

      .discount_final_price
        color: #BEEE11
        font-size: calc($font-size / 1.2)

</style>
