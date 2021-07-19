<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <img src="~assets/module9/m9s3p2.png" alt="" class="width-50">
    <div class="q-pa-md"></div>
    <img src="~assets/module9/m9s3p3.png" alt="" class="width-60">
    <div class="q-pa-md"></div>
    <div class="flex-1 relative-position full-width flex-row flex-jst-center flex-ali-center overflow-hidden">
      <img :src="imgSrc" alt="" class="full-width cus-ani-zoomIn ani-duration-1s">
      <img src="~assets/module9/m9s3p1.png" alt="" class="img-sub full-width">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section3',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[4]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding: .3rem 0;
  .img-sub{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
}
</style>
