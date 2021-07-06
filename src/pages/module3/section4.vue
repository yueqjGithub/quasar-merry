<template>
  <div class="full-page page-container relative-position flex-col flex-jst-start flex-ali-center q-pa-lg">
    <div class="full-page click-content"></div>
    <img src="~assets/module3/bird1.png" alt="" class="bird">
    <div class="flex-1 img-out q-pa-lg flex-row flex-jst-center flex-ali-center cus-ani-zoomIn ani-duration-1s">
      <img :src="imgSrc" alt="" class="full-width cus-ani-zoomIn ani-duration-1s ani-delay-05s">
      <img src="~assets/module3/msg.png" alt="" class="btm-flw width-30">
    </div>
  </div>
</template>

<script>
import urls from 'src/api/urls'

export default {
  name: 'section3',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[3] && `${urls.imgHost}${this.imgList[3]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding-top: .5rem;
}
.bird{
  width: 14vw;
  position: absolute;
  right: 0;
  top: .2rem;
}
.img-out{
  width: 130%;
  background: url("~assets/module3/container.png");
  background-size: 100% 100%;
  position: relative;
  .btm-flw{
    position: absolute;
    bottom: -.1rem;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
