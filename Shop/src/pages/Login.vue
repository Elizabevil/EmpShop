<template lang="pug">
LoginBack
.container
  .login-box(v-if="isLoginPage" )
    h2 Login
    ul
      li(v-for="btn in  loginData")
        .user-box
          input(:type="btn.type" v-model="btn.vmode")
          label  {{btn.msg}}
    
    a(@click="ToChange") 点击切换
      span
      span
      span
      span
    a(@click="login") 点击登录
      span
      span
      span
      span
  .login-box(v-if="!isLoginPage" )
    h2 Register
    ul
      li(v-for="btn in  registerData")
        .user-box
          p asd
          input(:type="btn.type" v-model="btn.vmode")
          label  {{btn.msg}}
      
    
    a(@click="ToChange") 点击切换
      span
      span
      span
      span
    a(@click="login") 点击登录
      span
      span
      span
      span


</template>

<script lang="ts" setup>
import {reactive, ref, watch} from "vue";
import {Instance} from "../utils/AxiosUtils";
import {useRouter} from "vue-router";
import LoginBack from "../components/LoginBack.vue";
import {map} from "jquery";

const router = useRouter();
const username = ref("");
const password = ref("");

const rePassword = ref("");
const email = ref("");
const isLoginPage = ref(true);


const loginData = reactive([
  {"msg": "用户名", type: "text", "vmode": username, "isError": false, "errMsg": ""},
  {"msg": "密码", type: "password", "vmode": password, "isError": false, "errMsg": ""},
])

const registerData = reactive([
  {"msg": "用户名", type: "text", "vmode": username, "isError": false, "errMsg": ""},
  {"msg": "邮箱", type: "email", "vmode": email, "isError": false, "errMsg": ""},
  {"msg": "密码", type: "password", "vmode": password, "isError": false, "errMsg": ""},
  {"msg": "重新输入密码", type: "password", "vmode": rePassword, "isError": false, "errMsg": ""},
])


const login = () => {
  
  Instance({
    method: "post",
    url: "/login",
    data: {
      "username": username.value,
      "password": password.value
    },
  }).then((resp) => {
    console.log(resp)
    localStorage.setItem("token", resp.data.data.token)
    router.push({name: 'index'})
  })
  
  
}
const register = () => {
  Instance({
    method: "post",
    url: "/register",
    data: {
      "username": username.value,
      "password": password.value,
      "email": email.value
    },
  }).then((resp) => {
    console.log(resp)
    localStorage.setItem("token", resp.data.data.token)
    router.push({name: 'index'})
  })
}


const ToChange = () => {
  isLoginPage.value = !isLoginPage.value
  console.log(isLoginPage.value)
}

</script>

<style scoped>

li {
  list-style: none
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  
}

.login-box {
  margin-left: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(66, 60, 60, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #ffffff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.user-box input {

}

.user-box p {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: rgb(255, 255, 255);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

label {
  position: absolute;
  padding: 10px 0;
  pointer-events: none;
  transition: .5s;
}


input:focus ~ label,
input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin: 40px 20px 0;
  letter-spacing: 4px
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
}

</style>