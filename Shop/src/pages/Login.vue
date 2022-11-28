<template lang="pug">
div.background
img
  //form.login-box
  //  ul
  //    li(v-for="btn in  loginData")
  //      label {{btn.msg}}
  //        input(:type="btn.type" v-model="btn.vmode")

</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";

const username = ref("");
const password = ref("");
const loginData = reactive([
  {"msg": "用户名", type: "text", "vmode": username, "isError": false, "errMsg": ""},
  {"msg": "密码", type: "password", "vmode": password, "isError": false, "errMsg": ""},
])


</script>

<style scoped lang="sass">
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color

.background
  background-size: 100% 100%
  background: url("./src/assets/qiyuan.jpg")

img


</style>