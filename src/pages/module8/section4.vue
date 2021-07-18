<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="cont-1 full-width flex-row flex-jst-btw flex-ali-center">
      <div class="flex-2 m8-img-out-sub cus-ani-slideLeftIn ani-duration-1s">
        <img :src="imgSrc[0]" alt="" class="full-width u-pic" style="max-height: 40vh">
      </div>
      <div class="flex-1 flex-col flex-jst-start flex-ali-center">
        <img src="~assets/module8/m8s2p1.png" alt="" class="width-40 cus-ani-slideTopIn ani-duration-05s ani-delay-05s">
        <div class="q-pa-md"></div>
        <img src="~assets/module8/m8s4p1.png" alt="" class="width-80 cus-ani-slideTopIn ani-duration-05s ani-delay-1s">
      </div>
    </div>
    <div class="cont-1 full-width flex-row flex-jst-btw flex-ali-center">
      <div class="flex-2 flex-col flex-jst-start flex-ali-center">
        <img src="~assets/module8/m8s3p1.png" alt="" class="width-40 cus-ani-slideLeftIn ani-duration-05s ani-delay-15s">
        <div class="q-pa-md"></div>
        <img src="~assets/module8/m8s3p3.png" alt="" class="width-80 cus-ani-slideLeftIn ani-duration-05s ani-delay-2s">
      </div>
      <div class="flex-3 m8-img-out-sub m8-img-out-sub-r cus-ani-slideRightIn ani-duration-1s">
        <img :src="imgSrc[1]" alt="" class="full-width u-pic" style="max-height: 40vh">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section4',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return [this.imgList[4], this.imgList[5]]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding: .3rem 0;
}
</style>
