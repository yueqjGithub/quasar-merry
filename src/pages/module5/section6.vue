<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="img-out">
      <img :src="imgSrc[0]" alt="" class="cus-ani-slideLeftIn ani-duration-1s">
    </div>
    <div class="q-pa-md"></div>
    <div class="img-out">
      <img :src="imgSrc[1]" alt="" class="cus-ani-slideRightIn ani-duration-1s">
    </div>
    <div class="q-pa-lg"></div>
    <div class="q-pa-lg flex-row flex-jst-center flex-ali-center">
      <img src="~assets/module5/m5s5p1.png" alt="" class="full-width cus-ani-slideBottomIn ani-duration-05s ani-delay-1s">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section6',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return [this.imgList[4], this.imgList[5]]
    }
  }
}
</script>

<style lang="scss" scoped>
.img-out{
  width: 100%;
  overflow: hidden;
  height: 55vw;
  img{
    width: 100%;
  }
}
</style>
