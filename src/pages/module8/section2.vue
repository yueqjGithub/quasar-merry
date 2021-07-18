<template>
  <div class="full-page page-container flex-col flex-jst-btw flex-ali-center q-pa-lg">
    <div class="full-page click-content"></div>
    <div class="top-out full-width cus-ani-slideTopIn ani-duration-1s">
      <img :src="imgSrc" alt="">
    </div>
    <div class="flex-1 full-width flex-col flex-ali-start flex-jst-end">
      <div class="full-width flex-row flex-jst-btw flex-ali-end ma-row-md">
        <img src="~assets/module8/m8s1p3.png" alt="" class="width-10">
        <img src="~assets/module8/m8s2p1.png" alt="" class="width-40 cus-ani-fadeIn ani-duration-1s ani-delay-1s">
      </div>
      <img src="~assets/module8/m8s2p2.png" alt="" class="width-60 cus-ani-slideBottomIn ani-duration-05s ani-delay-1s">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section2',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[1]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  .top-out{
    max-height: 60vh;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
}
</style>
