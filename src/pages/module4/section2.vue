<template>
  <div class="full-page flex-col flex-jst-start flex-ali-center page-container q-pa-md">
    <div class="img-out relative-position full-width">
      <img src="~assets/module4/sec2flw.png" alt="" class="sec-flw cus-ani-rotateLeftIn ani-duration-1s ani-delay-1s">
      <img :src="imgSrc" alt="" class="full-width cus-ani-slideTopIn ani-duration-1s">
      <div class="sec-btm-flw">
        <img src="~assets/module4/hua1.png" alt="" class="cus-ani-rotateLeftIn ani-duration-1s ani-delay-1s">
      </div>
    </div>
    <div class="ma-row-md flex-row flex-jst-center flex-ali-center relative-position">
      <div class="flex-col flex-jst-start flex-ali-center">
        <img src="~assets/module4/sec2eng.png" alt="" class="width-50 q-ma-sm cus-ani-slideTopIn ani-duration-05s ani-delay-2s">
        <img src="~assets/module4/sec2chn.png" alt="" class="width-40 q-ma-sm cus-ani-slideTopIn ani-duration-05s ani-delay-25s">
        <div class="width-30 cus-ani-slideTopIn ani-duration-05s ani-delay-25s" style="height: 2px;background: yellow"></div>
      </div>
      <img src="~assets/module4/hua3.png" alt="" class="btm-flw cus-ani-rotateRightIn ani-duration-1s ani-delay-1s">
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
      return this.imgList[1] && `${urls.imgHost}${this.imgList[1]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  .sec-flw{
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    z-index: +1;
  }
  .sec-btm-flw{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20%;
    transform: rotate(130deg);
    img{
      width: 100%;
    }
  }
  .btm-flw{
    position: absolute;
    left: 5%;
    width: 15%;
  }
}
</style>
