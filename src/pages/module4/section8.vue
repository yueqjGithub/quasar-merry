<template>
  <div class="full-page page-container relative-position flex-col flex-jst-start flex-ali-start">
    <div class="full-page click-content"></div>
    <div class="full-width q-pa-md flex-row flex-wrap flex-jst-btw flex-ali-start relative-position">
      <div class="img-out-item cus-ani-slideTopIn ani-duration-1s ani-delay-3s">
        <img :src="imgSrc[0]" alt="">
      </div>
      <div class="img-out-item cus-ani-slideLeftIn ani-duration-1s ani-delay-2s">
        <img :src="imgSrc[1]" alt="">
      </div>
      <div class="img-out-item cus-ani-slideRightIn ani-duration-1s">
        <img :src="imgSrc[2]" alt="">
      </div>
      <div class="img-out-item cus-ani-slideTopIn ani-duration-1s ani-delay-1s">
        <img :src="imgSrc[3]" alt="">
      </div>
      <img src="~assets/module4/sec5img1.png" alt="" class="sec8-mid-flw cus-ani-rotateRightIn ani-duration-1s ani-delay-3s">
    </div>
    <img src="~assets/module4/sec5img2.png" alt="" class="sec8-top-flw cus-ani-slideLeftIn ani-duration-1s ani-delay-3s">
    <div class="full-width flex-col flex-jst-start flex-ali-center q-ma-lg">
      <p class="font-16 word-sub cus-ani-fadeIn ani-duration-1s ani-delay-35s">LOVE STORY</p>
      <div class="q-pa-sm width-50  cus-ani-fadeIn ani-duration-1s ani-delay-45s" style="border:2px solid #ebd095">
        <img src="~assets/module4/sec8word.png" alt="" class="full-width">
      </div>
    </div>
  </div>
</template>

<script>
import urls from '../../api/urls.js'

export default {
  name: 'section8',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return [
        this.imgList[2] && `${urls.imgHost}${this.imgList[2]}`,
        this.imgList[3] && `${urls.imgHost}${this.imgList[3]}`,
        this.imgList[4] && `${urls.imgHost}${this.imgList[4]}`,
        this.imgList[5] && `${urls.imgHost}${this.imgList[5]}`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding-top: .27rem;
  .img-out-item{
    width: 50%;
    height: 55vw;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .sec8-top-flw{
    position: absolute;
    left: .15rem;
    top: 0;
    width: .7rem;
  }
  .sec8-mid-flw{
    position: absolute;
    bottom: -.3rem;
    width: 1rem;
    right: 0;
  }
}
</style>
