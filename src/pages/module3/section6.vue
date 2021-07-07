<template>
  <div class="full-page page-container relative-position flex-col flex-jst-start flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="full-width cont-1 flex-row flex-jst-btw flex-ali-center">
      <div class="cont-l flex-1 flex-col flex-jst-center flex-ali-start relative-position self-stretch">
        <img src="~assets/module3/hua2.png" alt="" class="width-80 lf-flw">
        <img src="~assets/module3/love.png" alt="" class="width-60 cus-ani-slideLeftIn ani-duration-05s">
        <img src="~assets/module3/you.png" alt="" class="width-60 self-end cus-ani-slideRightIn ani-duration-05s">
        <img src="~assets/module3/forever.png" alt="" class="width-60 cus-ani-slideBottomIn ani-duration-05s">
      </div>
      <div class="img-out cus-ani-slideRightIn ani-duration-05s">
        <img :src="imgSrc" alt="">
      </div>
    </div>
    <div class="full-width q-ma-md">
      <img src="~assets/module3/hongren1.png" alt="" class="full-width cus-ani-slideTopIn ani-delay-05s ani-duration-1s">
    </div>
    <div class="img-out img-btm full-width cus-ani-slideLeftIn ani-duration-05s">
      <img :src="imgSrc1" alt="">
    </div>
  </div>
</template>

<script>
import urls from 'src/api/urls'

export default {
  name: 'section6',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[5] && `${urls.imgHost}${this.imgList[5]}`
    },
    imgSrc1 () {
      return this.imgList[6] && `${urls.imgHost}${this.imgList[6]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  padding-top: .5rem;
  .lf-flw{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .img-out{
    border: 3px solid #ffcfcd;
    width: 70%;
    margin-left: 1%;
    overflow-y: hidden;
    max-height: 28vh;
    &.img-btm{
      border-left: none;
      border-right: none;
    }
    img{
      width: 100%;
    }
  }
}
</style>
