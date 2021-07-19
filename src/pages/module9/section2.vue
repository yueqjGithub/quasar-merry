<template>
  <div class="full-page page-container flex-col flex-jst-btw flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="cont-1 full-width flex-row flex-jst-center flex-ali-center overflow-hidden cus-ani-slideTopIn ani-duration-1s">
      <img :src="imgSrc[0]" alt="">
    </div>
    <div class="cont-2 flex-row flex-jst-btw flex-ali-center">
      <img src="~assets/module9/m9s2p1.png" alt="" class="btm-sub">
      <div class="flex-1 flex-row flex-nowrap flex-jst-btw flex-ali-center">
        <div class="img-out cus-ani-slideLeftIn ani-duration-1s">
          <img :src="imgSrc[1]" alt="">
        </div>
        <div class="img-out cus-ani-slideRightIn ani-duration-1s">
          <img :src="imgSrc[2]" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section2',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return [this.imgList[1], this.imgList[2], this.imgList[3]]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding: .3rem 0;
  .cont-2{
    margin-top: .2rem;
    .btm-sub{
      width: .4rem;
      margin-right: -.15rem;
      position: relative;
      z-index: 1;
      margin-left: .2rem;
    }
    .img-out{
      width: 48%;
      height: calc(50vw - .15rem);
      overflow: hidden;
      img{
        width: 100%;
        min-height: 100%;
      }
    }
  }
}
</style>
