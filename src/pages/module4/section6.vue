<template>
  <div class="full-page page-container relative-position">
    <div class="full-page click-content"></div>
    <div class="relative-position full-width cont-out q-pa-lg">
      <img :src="imgSrc" alt="" class="full-width cus-ani-slideTopIn ani-duration-15s">
      <div class="hua hua-1 cus-ani-slideLeftIn ani-duration-1s ani-delay-15s">
        <img src="~assets/module4/hua2.png" alt="">
      </div>
      <div class="hua hua-2 cus-ani-rotateLeftIn ani-duration-1s ani-delay-15s">
        <img src="~assets/module4/hua1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import urls from '../../api/urls.js'

export default {
  name: 'section6',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[7] && `${urls.imgHost}${this.imgList[7]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.cont-out{
  .hua{
    position: absolute;
    img{
      width: 100%;
      transform: rotate(90deg);
    }
    &.hua-1{
      width: .8rem;
      left: 0;
      top: .2rem;
    }
    &.hua-2{
      width: .8rem;
      right: .2rem;
      bottom: -.3rem;
    }
  }
}
</style>
