<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="cont-out q-pa-md full-width relative-position flex-col flex-jst-start flex-ali-center cus-ani-slideRightIn ani-duration-05s">
      <div class="show-img cus-ani-slideTopIn ani-duration-15s ani-delay-05s">
        <img :src="imgSrc" alt="" class="full-width">
      </div>
      <div class="full-width q-pa-lg relative-position flex-row flex-jst-center flex-ali-center">
        <img src="~assets/module6/m6s4p1.png" alt="" class="width-60 cus-ani-zoomIn ani-duration-1s">
        <div class="ax-pic">
          <img src="~assets/module6/m6ax.png" alt="" class="cus-ani-fadeLoop ani-duration-05s">
        </div>
        <div class="ax-pic">
          <img src="~assets/module6/m6ax.png" alt="" class="cus-ani-fadeLoop ani-duration-1s">
        </div>
      </div>
      <img src="~assets/module6/m6-bird1.png" alt="" class="width-10">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section4',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[3]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding: .5rem 0;
}
.cont-out {
  background: #ffffff;
  border-bottom: 3px solid #ffc2c2;
  .show-img{
    max-height: 55vh;
    overflow: hidden;
    width: 100%;
    img{
      width: 100%;
    }
  }
}
.ax-pic{
  width: 4vw;
  transform: translate(0, -50%) rotate(15deg);
  img{
    width: 100%;
  }
  &+.ax-pic{
    width: 4vw;
    transform: translate(50%, -70%) rotate(-15deg);
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
