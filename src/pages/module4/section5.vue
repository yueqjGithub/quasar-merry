<template>
  <div class="full-page page-container relative-position">
    <div class="flex-col flex-jst-center flex-ali-center">
      <img src="~assets/module4/sec5img1.png" alt="" class="width-20 cus-ani-rotateLeftIn ani-duration-15s">
      <p class="word-sub font-16 q-ma-md cus-ani-fadeIn ani-duration-1s">GRATEFUL TIME</p>
      <div class="width-30 cus-ani-scaleX ani-duration-05s ani-delay-05s" style="height: 2px;background: #ebd095"></div>
    </div>
    <div class="q-pa-md img-out cus-ani-slideLeftIn ani-duration-15s ani-delay-1s flex-row flex-jst-center flex-ali-center">
      <img :src="imgSrc" alt="">
    </div>
    <div class="btm-out flex-row flex-jst-btw flex-ali-center full-width">
      <img src="~assets/module4/sec5img2.png" alt="" class="width-20 cus-ani-slideLeftIn ani-duration-1s ani-delay-1s">
      <img src="~assets/module4/sec5img3.png" alt="" class="width-40 cus-ani-fadeIn ani-duration-1s ani-delay-1s">
      <img src="~assets/module4/sec2flw.png" alt="" class="self-end width-20 cus-ani-fadeIn ani-duration-1s ani-delay-1s">
    </div>
  </div>
</template>

<script>
import urls from 'src/api/urls'
export default {
  name: 'section5',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[6] && `${urls.imgHost}${this.imgList[6]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding-top: .4rem;
  .img-out{
    width: 100%;
    max-height: 50vh;
    overflow: hidden;
  }
  .btm-out{
    .self-end{
      margin-top: .6rem;
    }
  }
}
</style>
