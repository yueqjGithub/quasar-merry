<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="img-out cus-ani-zoomIn ani-duration-1s">
      <img :src="imgSrc" alt="" class="img-show">
      <img src="~assets/module7/m7s2p2.png" alt="" class="img-sub cus-ani-fadeIn ani-duration-1s ani-delay-15s">
      <img src="~assets/module7/m7s2p3.png" alt="" class="img-sub cus-ani-zoomIn ani-duration-1s ani-delay-2s">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section2',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[1]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding: .4rem 0;
  .img-out{
    width: 106vw;
    height: 85vh;
    overflow: hidden;
    background: url("~assets/module7/m7s2p1.png");
    background-size: 100% 100%;
    text-align: center;
    .img-show{
      width: 100%;
      min-height: 100%;
      mask-image: url("~assets/module7/m7s2mask2.png");
      mask-size: 100% 85vh;
      mask-clip: border-box;
      mask-repeat: no-repeat;
      transform-origin: center center;
      transform: scale(0.99, 0.99);
    }
    .img-sub{
      position: absolute;
      width: 20vw;
      &:nth-of-type(2){
        right: 0;
        top: 0;
      }
      &:nth-of-type(3){
        left: 0;
        bottom: 0;
      }
    }
  }
}
</style>
