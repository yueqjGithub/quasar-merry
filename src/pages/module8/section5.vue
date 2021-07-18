<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="full-page overflow-hidden flex-row flex-jst-center flex-ali-center">
      <img :src="imgSrc" alt="" class="full-width">
      <img src="~assets/module8/m8s5p1.png" alt="" class="s5-sub cus-ani-slideTopIn ani-duration-1s">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section5',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[6]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  .s5-sub{
    width: 40%;
    position: absolute;
    right: .1rem;
    top: 70%;
  }
}
</style>
