<template>
  <div class="full-page page-container relative-position flex-col flex-jst-start flex-ali-center">
    <div class="full-page click-content"></div>
    <img src="~assets/module3/ax1.png" alt="" class="width-30 cus-ani-slideTopIn ani-duration-15s">
    <div class="full-width img-out relative-position flex-col flex-jst-start flex-ali-end">
      <img :src="imgSrc" alt="" class="show-img cus-ani-slideLeftIn ani-duration-1s ani-delay-05s">
      <div class="img-bg flex-col flex-jst-end flex-ali-end q-pa-md cus-ani-slideRightIn ani-duration-1s ani-delay-05s">JUST MARRIED</div>
    </div>
    <div class="flex-1 flex-col flex-jst-end flex-ali-center q-pa-md">
      <img src="~assets/module3/btm.png" alt="" class="full-width cus-ani-slideBottomIn ani-duration-1s ani-delay-1s">
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
      return this.imgList[4] && `${urls.imgHost}${this.imgList[4]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding-top: .5rem;
  .show-img{
    width: 97%;
    margin-top: .1rem;
    position: relative;
    z-index: 2;
  }
  .img-bg{
    background: #ffcecc;
    position: absolute;
    left: 0;
    top: .5rem;
    font-size: .2rem;
    font-weight: bold;
    z-index: 1;
    height: 100%;
    width: 80%;
    color: #e97f76;
  }
}
</style>
