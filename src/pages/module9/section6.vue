<template>
  <div class="full-page page-container flex-col flex-jst-btw flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="full-width q-pa-lg text-center">
      <img src="~assets/module9/m9s6p1.png" alt="" class="width-80">
    </div>
    <div class="flex-1 overflow-hidden full-width">
      <img :src="imgSrc" alt="" class="full-width cus-ani-slideBottomIn ani-duration-1s">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section6',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[8]
    }
  }
}
</script>

<style lang="scss" scoped></style>
