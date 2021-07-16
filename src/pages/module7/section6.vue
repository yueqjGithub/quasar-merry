<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="img-out cus-ani-zoomIn ani-duration-1s">
      <img :src="imgSrc[0]" alt="" class="img-show">
    </div>
    <img src="~assets/module7/m7s2p2.png" alt="" class="mid-img cus-ani-fadeIn ani-duration-1s ani-delay-1s">
    <div class="btm-out flex-row flex-jst-btw flex-ali-center">
      <div class="img-out cus-ani-slideLeftIn ani-duration-1s ani-delay-1s relative-position">
        <img src="~assets/module7/m7s2p2.png" alt="" class="mid-img1 cus-ani-fadeIn ani-duration-1s ani-delay-15s">
        <img :src="imgSrc[1]" alt="" class="img-show">
      </div>
      <div class="img-out cus-ani-slideRightIn ani-duration-1s ani-delay-1s relative-position">
        <img src="~assets/module7/m7s2p2.png" alt="" class="mid-img2 cus-ani-fadeIn ani-duration-1s ani-delay-15s">
        <img :src="imgSrc[2]" alt="" class="img-show">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section7',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return [this.imgList[2], this.imgList[3], this.imgList[4]]
    }
  }
}
</script>

<style lang="scss" scoped>
.img-out {
  width: 106vw;
  height: 45vh;
  overflow: hidden;
  background: url("~assets/module7/m7s2p1.png");
  background-size: 100% 100%;
  text-align: center;
  .img-show {
    width: 100%;
    min-height: 100%;
    mask-image: url("~assets/module7/m7s2mask2.png");
    mask-size: 100% 45vh;
    mask-clip: border-box;
    mask-repeat: no-repeat;
    transform-origin: center center;
    transform: scale(0.99, 0.99);
  }
}
.btm-out{
  width: 104vw;
  .img-out{
    width: 47vw;
    height: 58vw;
    .img-show{
      mask-size: 100% 57vw;
    }
    .mid-img1{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 38%;
      z-index: 6;
    }
    .mid-img2{
      z-index: 6;
      position: absolute;
      top: 0;
      left: 0;
      width: 38%;
    }
  }
}
.mid-img{
  width: 30%;
  align-self: flex-end;
  margin-top: -15vw;
}
</style>
