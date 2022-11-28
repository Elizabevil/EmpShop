<template lang="pug">

div.root_container
  div.form
    div.left_video
      video(src="@/assets/vii.mp4" autoplay=true muted=true)
    div.right
      ul
        li(v-for="(bar,index) in loginData" :key="index" )
          label {{bar.msg}}
            input(:type="bar.type",  v-model="bar.vmode" autocomplete="off")

      button(@click="submit") 点击登录
</template>

<script lang="ts" setup>
  import {reactive, ref, watch} from "vue"
  import {useRouter} from "vue-router"

  const username = ref("")
  const password = ref("")
  const loginData = reactive([
    {"msg": "用户名", type: "text", "vmode": username},
    {"msg": "密码", type: "password", "vmode": password},
  ])

  const submit = () => {
    console.log(username.value)
  }
</script>

<style scoped lang="sass">
$font-stack: Helvetica, sans-serif
$primary-color: #333

.root_container

ul

video
  width: 960px

.left_video
  margin-top: auto
  float: left
  width: 20%

.right
  margin-left: auto
  margin-right: auto
  float: right
  width: 80%

</style>