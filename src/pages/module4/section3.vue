<template>
  <div class="full-page flex-col flex-jst-start flex-ali-center page-container relative-position">
    <div class="full-page click-content"></div>
    <div class="img-top full-width relative-position">
      <div class="bg-img">
        <img :src="imgSrc" alt="" class="cus-ani-slideRightIn ani-duration-1s">
      </div>
      <div class="sec-img2">
        <img src="~assets/module4/sec3img2.png" alt="" class="sec-img2 cus-ani-fadeIn ani-duration-05s ani-delay-1s">
      </div>
    </div>
    <img src="~assets/module4/sec3img1.png" alt="" class="sec-img1 cus-ani-fadeIn ani-duration-05s ani-delay-1s">
<!--    下面部分-->
    <div class="btm-out full-width flex-row flex-jst-btw flex-ali-center">
      <div class="btm-img-out self-stretch flex-4 overflow-hidden">
        <img :src="imgSrc1" alt="" class="full-width cus-ani-slideLeftIn ani-duration-1s">
      </div>
      <div class="flex-2 btm-right flex-col flex-jst-center flex-ali-center">
        <img src="~assets/module4/sec3img3.png" alt="" class="width-60 cus-ani-fadeIn ani-duration-05s ani-delay-1s">
        <div class="font-14 text-no-wrap cus-ani-fadeIn ani-duration-05s ani-delay-1s word-sub">YOU & ME</div>
        <img src="~assets/module4/sec3img4.png" alt="" class="width-50 cus-ani-rotateLeftIn ani-duration-1s ani-delay-1s">
      </div>
    </div>
  </div>
</template>

<script>
import urls from 'src/api/urls'
export default {
  name: 'section2',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[2] && `${urls.imgHost}${this.imgList[2]}`
    },
    imgSrc1 () {
      return this.imgList[3] && `${urls.imgHost}${this.imgList[3]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding: .34rem;
  .img-top{
    z-index: 2;
    .bg-img{
      width: 100%;
      max-height: 30vh;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .sec-img2{
      position: absolute;
      width: .35rem;
      bottom: 0;
      right: 0;
      transform: translate(0, 100%);
      img{
        width: 100%;
      }
    }
  }
  .sec-img1{
    z-index: 3;
    position: absolute;
    left: .2rem;
    top: .3rem;
    width: .4rem;
  }
  .btm-out{
    margin-top: .4rem;
    .btm-right{
      padding-top: 1rem;
      .font-14{
        margin: .3rem 0;
      }
    }
  }
}
</style>
