<template>
  <el-carousel>
    <el-carousel-item v-for="(item,index) in items" :key="index">
      <!-- <img src={{item.url}}> -->
      <el-image :src="item.url" :fit="item.fit"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: ["items"]
};
</script>


<style>

</style>