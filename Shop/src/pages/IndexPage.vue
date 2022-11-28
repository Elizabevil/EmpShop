<template lang="pug">

div
  .leftPane
    .sidebar
      ul
        li(v-for="bar in listBar")
          router-link(:to="bar.path", data-toggle='collapse', aria-expanded='false') {{bar.title}}
          ul
            li(v-for="item in bar.children" )
              router-link(:to="item.path") {{item.title}}
  
  .rightPane
    .content
      router-view


</template>


<script setup lang="ts">


import {useRouter} from "vue-router";
import {onMounted, reactive} from "vue";
import {CkStrIsNotEmpty, IsNotEmpty} from "../utils/CheckInfo";

const router = useRouter();
const listBar = reactive([
  {
    "title": "主页", "path": "/index", "children": [
      {"title": "主页内容", "path": "/index"},
    ]
  },
  {"title": "关于", "path": "/index/about", "children": []},
  {"title": "文件夹", "path": "", "children": []},
  {"title": "联系", "path": "", "children": []},
])
onMounted(() => {
  console.log(IsNotEmpty("a s d"));
})
</script>

<style lang="less" scoped>
a {
  margin: 8px 0;
  font-size: 14px;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
}

a :hover {
  background: #03e9f4;
}

a :active {
  color: #418cfd;
  background: #418cfd60;
}

ul {
  list-style-type: none;
}

.leftPane {
  float: left;
  padding-right: 30px;
}

.rightPane {
  float: left;
  padding-left: 30px;
}

</style>