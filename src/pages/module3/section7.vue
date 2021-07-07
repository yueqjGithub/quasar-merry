<template>
  <div class="full-page page-container relative-position flex-col flex-jst-start flex-ali-center">
    <div class="full-page click-content"></div>
    <img src="~assets/module3/ax1.png" alt="" class="width-30 cus-ani-slideTopIn ani-duration-15s">
    <div class="full-width flex-col flex-jst-center flex-ali-center q-pa-md">
      <img src="~assets/module3/hongren2.png" alt="" class="full-width q-ma-sm cus-ani-slideBottomIn ani-duration-1s ani-delay-05s">
      <img src="~assets/module3/hongren3.png" alt="" class="full-width">
    </div>
    <div class="flex-1 q-pa-md img-out cus-ani-slideBottomIn ani-duration-1s ani-delay-05s" :style="`backgroundImage: url(${imgSrc})`"></div>
  </div>
</template>

<script>
import urls from 'src/api/urls'

export default {
  name: 'section7',
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
  padding-top: .5rem;
  .img-out{
    width: 100%;
    background-position: top center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
}
</style>
