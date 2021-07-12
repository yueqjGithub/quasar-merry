<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="pic-out">
      <img :src="imgSrc[0]" alt="" class="cus-ani-slideLeftIn ani-duration-05s">
    </div>
    <div class="pic-out">
      <img :src="imgSrc[1]" alt="" class="cus-ani-slideRightIn ani-duration-05s">
    </div>
    <img src="~assets/module5/sec2flw.png" alt="" class="mid-flw cus-ani-fadeIn ani-delay-05 ani-duration-05s">
    <div class="q-pa-lg full-width flex-row flex-jst-center flex-ali-center">
      <img src="~assets/module5/m5s3p1.png" alt="" class="width-80 cus-ani-slideBottomIn ani-duration-05s ani-delay-05s">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section3',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return [this.imgList[0], this.imgList[1]]
    }
  }
}
</script>

<style lang="scss" scoped>
.pic-out{
  width: 100%;
  height: 60vw;
  background: white;
  transform: skewX(
      -7deg
  ) skewY(
      -3deg
  ) scale(1.1);
  margin-bottom: .4rem;
  overflow: hidden;
  img{
    width: 100%;
  }
}
.mid-flw{
  width: 25%;
  position: absolute;
  right: 0;
  top: 43%;
}
</style>
