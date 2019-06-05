<template>
  <el-container class="login-container">
    <el-row class="login-carousel-row" type="flex" justify="center">
      <carousel class="login-carousel" v-bind:items="items"></carousel>
    </el-row>
    <el-row class="login-form-row" type="flex" justify="center">
      <el-form class="login-form" :label-position="labelPosition" :model="loginForm">
        <el-row>
          <el-col :span="14">
            <h3>登陆</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="14">
            <el-input v-model="loginForm.username" placeholder="账号"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="14">
            <el-input v-model="loginForm.password" placeholder="密码"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="14">
            <el-button type="primary" style="width:100%;">登陆</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-row>
  </el-container>
</template>

<script>
import { carousel } from "@/components/";
export default {
  components: { carousel },
  data() {
    return {
      items: [
        { url: "/images/login-background.jpg", fit: "fill" },
        { url: "/images/login-background.jpg", fit: "contain" },
        { url: "/images/login-background.jpg", fit: "cover" },
        { url: "/images/login-background.jpg", fit: "none" },
        { url: "/images/login-background.jpg", fit: "scale-down" }
      ],
      loginForm: { username: "", password: "" },
      labelPosition: "left"
    };
  }
};
</script>


<style>
.login-container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/images/login-background.jpg") no-repeat center 0; /*引入背景图，不重复出现*/
  background-size: cover; /*图片随屏幕大小同步缩放,但是图片画面可能只显示一部分*/
  overflow-x: hidden;
  min-height: 600px;
  min-width: 100%;
}
.login-carousel-row {
  width: 50%;
}
.login-carousel {
  /* 上  右 下 左*/
  margin: 30% 0% 0% 20%;
  width: 100%;
}
.login-form-row {
  width: 50%;
}
.login-form {
  /* 上  右 下 左*/
  margin: 30% 0% 0% 35%;
  width: 100%;
}
.el-row {
  margin-bottom: 20px;
}
html,
body,
#app {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>

