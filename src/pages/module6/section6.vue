<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <img src="~assets/module6/m6s6p1.png" alt="" class="width-80">
    <img src="~assets/module6/m6s6p2.png" alt="" class="width-60 ma-row-md">
    <div class="full-width img-out cus-ani-slideBottomIn ani-duration-2s">
      <img :src="imgSrc[0]" alt="" class="full-width">
    </div>
    <div class="full-width flex-row flex-jst-btw flex-ali-center ma-row-md">
      <div class="img-out img-btm cus-ani-slideLeftIn ani-duration-2s ani-delay-05s">
        <img :src="imgSrc[1]" alt="">
      </div>
      <div class="img-out img-btm cus-ani-slideRightIn ani-duration-2s ani-delay-05s">
        <img :src="imgSrc[2]" alt="">
      </div>
    </div>
    <div class="full-width q-pa-lg relative-position flex-row flex-jst-center flex-ali-end bird-out">
      <img src="~assets/module6/m6-bird1.png" alt="" class="btm-bird">
      <img src="~assets/module6/m6-bird2.png" alt="" class="btm-bird">
      <div class="ax-pic">
        <img src="~assets/module6/m6ax.png" alt="" class="cus-ani-fadeLoop ani-duration-05s">
      </div>
      <div class="ax-pic">
        <img src="~assets/module6/m6ax.png" alt="" class="cus-ani-fadeLoop ani-duration-1s">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section6',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return [this.imgList[4], this.imgList[5], this.imgList[6]]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding: .5rem .27rem;
  background-color: #ffffff;
  background-image: none;
  .img-out{
    border-radius: .07rem;
    overflow: hidden;
    height: 70vw;
    img{
      width: 100%;
    }
    &.img-btm{
      width: 47%;
    }
  }
}
.bird-out{
  padding-left: 19%;
  margin-top: -.7rem;
  .btm-bird{
    width: 11vw;
    &+.btm-bird{
      width: 14vw;
      margin-left: .2rem;
    }
  }
}
.ax-pic{
  width: 4vw;
  transform: translate(0, -200%) rotate(15deg);
  img{
    width: 100%;
  }
  &+.ax-pic{
    width: 4vw;
    transform: translate(50%, -180%) rotate(-15deg);
  }
}
.cus-ani-fadeLoop{
  animation-name: cuaAniFadeLoop;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes cuaAniFadeLoop {
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
