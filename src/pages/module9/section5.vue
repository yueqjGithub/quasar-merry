<template>
  <div class="full-page page-container q-pa-lg flex-col flex-jst-btw flex-ali-center" :style="{background: `url(${imgSrc})`}">
    <div class="full-page click-content"></div>
    <img src="~assets/module9/m9s5p2.png" alt="" class="width-60 cus-ani-slideTopIn ani-duration-05s">
    <img src="~assets/module9/m9s5p1.png" alt="" class="width-80 cus-ani-slideBottomIn ani-duration-05s ani-delay-05s">
  </div>
</template>

<script>
export default {
  name: 'section5',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[7]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  background-size: auto 100%;
  background-position: center center;
}
</style>
