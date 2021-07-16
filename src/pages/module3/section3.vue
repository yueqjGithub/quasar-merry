<template>
  <div class="full-page page-container relative-position flex-col flex-jst-start flex-ali-center">
    <div class="full-page click-content"></div>
    <img src="~assets/module3/hua2.png" alt="" class="top-flw q-ma-md">
    <div class="img-out cus-ani-zoomIn ani-duration-05s">
      <div class="img-slide cus-ani-slideRightIn ani-duration-1s">
        <img :src="imgSrcList[0]" alt="">
      </div>
      <div class="img-slide cus-ani-slideLeftIn ani-duration-1s">
        <img :src="imgSrcList[1]" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import urls from 'src/api/urls'

export default {
  name: 'section3',
  props: ['imgList', 'info'],
  computed: {
    imgSrcList () {
      return [
        this.imgList[1] && `${urls.imgHost}${this.imgList[1]}`,
        this.imgList[2] && `${urls.imgHost}${this.imgList[2]}`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  .top-flw{
    height: 20vh;
  }
  .img-out{
    width: 95%;
    height: 70vh;
    border: 2px solid #ea8077;
    position: relative;
    .img-slide{
      width: 100%;
      max-height: 35vh;
      overflow-y: hidden;
      position: absolute;
      &:nth-of-type(1){
        left: 5%;
        top: -5%;
      }
      &:nth-of-type(2){
        right: 5%;
        bottom: -5%;
      }
      img{
        width: 100%;
      }
    }
  }
}
</style>
