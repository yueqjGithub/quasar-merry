<template>
  <div class="full-page page-container relative-position">
    <div class="full-page click-content"></div>
    <div class="top-out relative-position flex-row flex-jst-ard flex-ali-center">
      <div class="img-1-out cus-ani-slideLeftIn ani-duration-1s">
        <img :src="imgSrc[0]" alt="">
      </div>
      <div class="img-2-out cus-ani-zoomIn ani-duration-2s ani-delay-05s">
        <img :src="imgSrc[1]" alt="">
      </div>
      <div class="top-bg-square cus-ani-zoomIn ani-duration-1s ani-delay-05s"></div>
      <img src="~assets/module4/hua3.png" alt="" class="top-flw cus-ani-rotateLeftIn ani-duration-1s ani-delay-05s">
    </div>
    <div class="full-width center-out flex-col flex-jst-center flex-ali-center">
      <img src="~assets/module4/sec4img1.png" alt="" class="width-20 q-ma-md cus-ani-zoomIn ani-duration-15s ani-delay-15s">
      <p class="font-16 cus-ani-fadeIn ani-duration-15s ani-delay-15s word-sub" style="color: #7a7a7b">YOU ARE MY WORLD</p>
    </div>
    <div class="img-btm full-width cus-ani-slideLeftIn ani-duration-2s ani-delay-1s">
      <img :src="imgSrc[2]" alt="">
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
      return [
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
  padding-top: .4rem;
  .top-out{
    .img-1-out{
      width: 1.5rem;
      height: 2.3rem;
      overflow: hidden;
      z-index: 2;
      img{
        width: 100%;
      }
    }
    .img-2-out{
      width: 1.2rem;
      height: 1.5rem;
      overflow: hidden;
      z-index: 2;
      img{
        width: 100%;
      }
    }
    .top-bg-square{
      width: 1.5rem;
      height: 1rem;
      border: 2px solid #ebd095;
      position: absolute;
      left: 30%;
      top: 40%;
      z-index: 1;
    }
    .top-flw{
      position: absolute;
      bottom: 0;
      right: 0;
      width: 15%;
      z-index: 3;
    }
  }
  .img-btm{
    max-height: 3rem;
    overflow: hidden;
    img{
      max-width: 100%;
    }
  }
}
</style>
