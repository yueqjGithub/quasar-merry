<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="top-content flex-col full-width flex-jst-start flex-ali-center">
      <img src="~assets/module7/m7s4p1.png" alt="" class="width-50">
      <p class="no-ma-p m7-text-primary font-18">LOVE YOU FOREVER</p>
      <div class="flex-row flex-jst-btw flex-ali-center avt-out">
        <div class="avt-item cus-ani-slideTopIn ani-duration-1s" v-for="k in avatarList" :key="k.sec" :style="{backgroundImage: `url(${k.src})`}"
             :class="`ani-delay-${k.sec}s`"></div>
      </div>
      <p class="m7-text-primary font-18 cus-ani-slideTopIn ani-duration-1s ani-delay-15s">此刻永留心，永远美丽，属于我们的幸福日子</p>
    </div>
    <div class="img-out cus-ani-zoomIn ani-duration-1s">
      <img :src="imgSrc" alt="" class="img-show">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section4',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[8]
    },
    avatarList () {
      return [
        { src: this.imgList[5], sec: 0 },
        { src: this.imgList[6], sec: '05' },
        { src: this.imgList[7], sec: 1 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  .top-content{
    p:nth-of-type(2){
      margin: .1rem auto;
    }
  }
  .avt-out{
    width: 108vw;
    .avt-item{
      width: 30vw;
      height: 30vw;
      border: 2px solid #d69241;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center center;
    }
  }
  .img-out {
    width: 106vw;
    height: 55vh;
    overflow: hidden;
    background: url("~assets/module7/m7s2p1.png");
    background-size: 100% 100%;
    text-align: center;
    .img-show {
      width: 100%;
      min-height: 100%;
      mask-image: url("~assets/module7/m7s2mask2.png");
      mask-size: 100% 55vh;
      mask-clip: border-box;
      mask-repeat: no-repeat;
      transform-origin: center center;
      transform: scale(0.99, 0.99);
    }
  }
}
</style>
