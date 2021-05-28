<template>
  <div class="full-page relative-position page-container flex-col flex-jst-btw flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="full-height bg-container">
      <img :src="imgSrc" alt="" class="section-bg cus-ani-slideLoop">
    </div>
    <img src="~assets/module2/b5p.png" alt="" class="full-width cus-ani-slideTopIn ani-duration-1s ani-delay-05s">
    <img src="~assets/module2/tl5p.png" alt="" class="width-50 cus-ani-slideBottomIn ani-duration-1s ani-delay-05s" style="margin-bottom: 1rem">
  </div>
</template>

<script>
import urls from '../../api/urls'
export default {
  name: 'section5',
  props: ['imgList'],
  computed: {
    imgSrc () {
      return this.imgList[3] && `${urls.imgHost}${this.imgList[3]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.section-bg{
  height: 100%;
}
.bg-container{
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
