<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="img-out">
      <img :src="imgSrc[0]" alt="" class="img-show cus-ani-slideLeftIn ani-duration-1s">
      <img src="~assets/module7/m7s2p2.png" alt="" class="img-sub cus-ani-fadeIn ani-duration-1s ani-delay-1s">
    </div>
    <div class="img-out">
      <img :src="imgSrc[1]" alt="" class="img-show cus-ani-slideRightIn ani-duration-1s">
      <img src="~assets/module7/m7s2p3.png" alt="" class="img-sub cus-ani-fadeIn ani-duration-1s ani-delay-1s">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section3',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return [this.imgList[2], this.imgList[3]]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding: .4rem 0;
  .img-out{
    position: relative;
    width: 106vw;
    height: 78vw;
    overflow: hidden;
    background: url("~assets/module7/m7s1p3.png");
    background-size: 100% 100%;
    text-align: center;
    z-index: 1;
    .img-sub{
      width: 25%;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .img-show{
      width: 100%;
      mask-image: url("~assets/module7/m7s1mask1.png");
      mask-size: 100% 77vw;
      mask-clip: border-box;
      mask-repeat: no-repeat;
    }
    +.img-out{
      margin-top: .3rem;
      .img-sub{
        width: 25%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
