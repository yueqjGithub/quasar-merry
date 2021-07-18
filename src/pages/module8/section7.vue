<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <img src="~assets/module8/m8s7p1.png" alt="" class="top-flw">
    <div class="cont-out m8-img-out-sub m8-img-out-sub-r full-width">
      <div class="img-out">
        <img :src="imgSrc" alt="">
      </div>
    </div>
    <div class="flex-1 full-width flex-row flex-jst-end flex-ali-end btm-out cus-ani-fadeIn ani-duration-1s ani-delay-05s">
      <img src="~assets/module8/m8s2p1.png" alt="">
      <img src="~assets/module8/m8s3p1.png" alt="" style="transform:rotate(180deg);margin-right:-.3rem;">
      <img src="~assets/module8/m8s7p2.png" alt="">
      <img src="~assets/module8/m8s3p4.png" alt="">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'section5',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[8]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding-top: .7rem;
  .top-flw{
    position: absolute;
    top: 0;
    left: .5rem;
    z-index: 6;
    width: 20%;
  }
  .cont-out{
    transform: rotate(-5deg);
    .img-out{
      overflow: hidden;
      max-height: 70vh;
      img{
        width: 100%;
      }
    }
  }
  .btm-out{
    img{
      width: 15%;
      margin: -.05rem;
    }
  }
}
</style>
