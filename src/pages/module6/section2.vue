<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="cont-out q-pa-md full-width relative-position flex-col flex-jst-start flex-ali-end cus-ani-slideRightIn ani-duration-05s">
      <img :src="imgSrc" alt="" class="full-width cus-ani-slideTopIn ani-duration-05s ani-delay-05s">
      <div class="full-width q-pa-lg relative-position flex-row flex-jst-center flex-ali-center">
        <img src="~assets/module6/m6s2p1.png" alt="" class="width-60">
        <div class="ax-pic">
          <img src="~assets/module6/m6ax.png" alt="" class="cus-ani-fadeLoop ani-duration-05s">
        </div>
        <div class="ax-pic">
          <img src="~assets/module6/m6ax.png" alt="" class="cus-ani-fadeLoop ani-duration-1s">
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
      return this.imgList[0]
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
