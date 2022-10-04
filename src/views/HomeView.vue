<template>
  <div>
    <div class="progressive">
      <img class="preview" src="../assets/bg_1.jpeg" v-progressive="bg1" />
    </div>
    <div class="space"></div>

    <div class="progressive">
      <img class="preview lazy" src="../assets/bg_9.jpeg" v-progressive="bg9" />
    </div>
    <div class="space"></div>

    <div class="progressive">
      <img
        class="preview lazy"
        src="../assets/bg_10.jpeg"
        v-progressive="bg10"
      />
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      bg1: "https://wjygrit21.oss-cn-hangzhou.aliyuncs.com/bg7.jpeg",
      bg10: "https://wjygrit21.oss-cn-hangzhou.aliyuncs.com/bg10.jpeg",
      bg9: "https://wjygrit21.oss-cn-hangzhou.aliyuncs.com/bg9.jpeg",
    };
  },
};
</script>

<style scoped></style>
