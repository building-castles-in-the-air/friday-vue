<template>
  <!-- 图片轮播组件 -->
  <el-carousel indicator-position="outside" height="350px">
    <el-carousel-item v-for="(item,index) in items" :key="index">
      <el-image :src="item.url" :fit="item.fit"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "carousel",
  props: ["items"]
};
</script>