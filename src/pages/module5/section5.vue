<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="full-width cus-ani-fadeIn ani-duration-1s">
      <img :src="imgSrc" alt="" class="full-width">
    </div>
    <div class="full-width q-pa-lg btm-out cus-ani-slideBottomIn ani-duration-05s ani-delay-05s flex-col flex-jst-center flex-ali-center">
      <img src="~assets/module5/sec2flw.png" alt="" class="width-40">
      <img src="~assets/module5/m5s3p1.png" alt="" class="width-80">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section5',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[4]
    }
  }
}
</script>

<style lang="scss" scoped>
.btm-out{
  img{
    transform: rotate(20deg);
    &+img{
      transform: rotate(2deg);
    }
  }
}
</style>
