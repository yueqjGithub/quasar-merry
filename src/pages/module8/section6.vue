<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <img src="~assets/module8/m8s3p1.png" alt="" class="top-flw cus-ani-slideTopIn ani-duration-1s width-20">
    <div class="full-width m8-img-out-sub">
      <div class="flex-row flex-jst-center flex-ali-center cont-out">
        <img :src="imgSrc" alt="" class="full-width">
      </div>
    </div>
    <div class="full-width btm-out flex-row flex-jst-start flex-ali-end">
      <img src="~assets/module8/m8s2p1.png" alt="" class="width-40 cus-ani-zoomIn ani-duration-1s">
      <img src="~assets/module8/m8s6p1.png" alt="" class="width-50">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section5',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[7]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  .top-flw{
    position: absolute;
    right: .25rem;
    top: 0;
    z-index: 7;
  }
  .cont-out{
    max-height: 80vh;
    overflow: hidden;
  }
  .btm-out{
    margin-top: -.3rem;
    position: relative;
  }
}
</style>
