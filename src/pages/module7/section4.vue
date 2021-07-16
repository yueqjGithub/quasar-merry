<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="img-out cus-ani-zoomIn ani-duration-1s">
      <img :src="imgSrc" alt="" class="img-show">
    </div>
    <div class="full-width flex-col flex-jst-start flex-ali-center q-pa-sm">
      <img src="~assets/module7/m7s4p1.png" alt="" class="width-50 cus-ani-scaleX ani-duration-1s ani-delay-05s">
      <p class="m7-text-primary font-22 cus-ani-slideBottomIn ani-duration-05s ani-delay-1s no-ma-p">想对你说</p>
      <div class="s4-eng m7-text-primary full-width text-center cus-ani-slideBottomIn ani-duration-05s ani-delay-15s">
        I WANT TO TELL YOU
      </div>
      <p class="m7-text-primary font-22 cus-ani-slideBottomIn ani-duration-05s ani-delay-2s no-ma-p">因为我们彼此的不完美</p>
      <p class="m7-text-primary font-22 cus-ani-slideBottomIn ani-duration-05s ani-delay-25s no-ma-p">才让我们成为彼此的完美伴侣</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section4',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[4]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  .img-out {
    width: 106vw;
    height: 65vh;
    overflow: hidden;
    background: url("~assets/module7/m7s2p1.png");
    background-size: 100% 100%;
    text-align: center;
    .img-show {
      width: 100%;
      min-height: 100%;
      mask-image: url("~assets/module7/m7s2mask2.png");
      mask-size: 100% 65vh;
      mask-clip: border-box;
      mask-repeat: no-repeat;
      transform-origin: center center;
      transform: scale(0.99, 0.99);
    }
  }
}
.s4-eng{
  font-size: .22rem;
  border-bottom: 2px solid #d69241;
}
</style>
