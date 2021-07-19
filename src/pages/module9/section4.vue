<template>
  <div class="full-page page-container flex-col flex-jst-btw flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="flex-1 full-width overflow-hidden cus-ani-slideRightIn ani-duration-1s">
      <img :src="imgSrc[0]" alt="" class="full-width">
    </div>
    <div class="q-pa-sm"></div>
    <div class="flex-2 full-width overflow-hidden cus-ani-slideLeftIn ani-duration-1s ani-delay-05s relative-position">
      <img :src="imgSrc[1]" alt="" class="full-width">
      <img src="~assets/module9/m9s4p1.png" alt="" class="img-sub cus-ani-fadeIn ani-duration-1s ani-delay-15s">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section4',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return [this.imgList[5], this.imgList[6]]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  &>div{
    img{
      min-height: 100%;
    }
    .img-sub{
      position: absolute;
      left: 0;
      top: 0;
      width: 61%;
      height: auto;
      min-height: unset;
    }
  }
}
</style>
