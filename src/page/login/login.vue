<template>
  <div class="login-background">
    <div class="login-carousel-div">
      <carousel class="login-carousel" v-bind:items="items"></carousel>
    </div>
    <div class="login-form">
      <!-- <el-form :label-position="left" label-width="80px" :model="loginForm">
        <el-form-item label="账号：">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="loginForm.pwd"></el-input>
        </el-form-item>
      </el-form> -->
    </div>
  </div>
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
      loginForm: {}
    };
  }
};
</script>


<style>
.login-background {
  /*方法一*/
  position: fixed;
  top: 0;
  left: 0;
  /*以上三句是让整个span放在屏幕的最左上方*/
  width: 100%;
  height: 100%;
  /*以上两句实现全屏大小*/
  background: url("/images/login-background.jpg") no-repeat center 0; /*引入背景图，不重复出现*/
  background-size: cover; /*图片随屏幕大小同步缩放,但是图片画面可能只显示一部分*/
  min-height: 100%;
  overflow-y: auto;
}
.login-carousel {
  width: 30%;
}
.login-carousel-div {
  display: inline;
}
.login-form {
  display: inline;
}
</style>

