<template>
  <div>
    <div class="progressive">
      <img
        class="preview lazy"
        src="../assets/bg_1.jpeg"
        data-src="https://wjygrit21.oss-cn-hangzhou.aliyuncs.com/bg7.jpeg"
      />
    </div>
    <div class="space"></div>

    <div class="progressive">
      <img
        class="preview lazy"
        src="../assets/bg_9.jpeg"
        data-src="https://wjygrit21.oss-cn-hangzhou.aliyuncs.com/bg9.jpeg"
      />
    </div>
    <div class="space"></div>

    <div class="progressive">
      <img
        class="preview lazy"
        src="../assets/bg_10.jpeg"
        data-src="https://wjygrit21.oss-cn-hangzhou.aliyuncs.com/bg10.jpeg"
      />
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
import Progressive from "@/components/progressive";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(1);
    let progress = new Progressive({
      el: ".progressive",
      removePreview: true,
      scale: true,
    });
    progress.fire();
  },
};
</script>

<style lang="scss"></style>
