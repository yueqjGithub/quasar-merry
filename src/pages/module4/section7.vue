<template>
  <div class="full-page page-container relative-position q-pa-md flex-col flex-jst-start flex-ali-start">
    <div class="cont-1 full-width flex-col flex-jst-start flex-ali-center relative-position">
      <div class="cont-1-out cus-ani-slideLeftIn ani-duration-1s">
        <img :src="imgSrc[0]" alt="">
      </div>
      <div class="cont-1-out cus-ani-slideRightIn ani-duration-1s">
        <img :src="imgSrc[1]" alt="">
      </div>
      <img src="~assets/module4/sec3img1.png" alt="" class="cont-1-flw cus-ani-fadeIn ani-delay-1s ani-duration-05s">
    </div>
    <div class="full-width cont-2 flex-row flex-jst-btw flex-ali-start">
      <div class="flex-col flex-jst-start flex-ali-start">
        <div class="cont-split cus-ani-scaleX ani-duration-1s ani-delay-05s"></div>
        <p class="font-16 word-sub cus-ma-row-md cus-ani-slideBottomIn ani-duration-1s ani-delay-1s">SWEET MOMENT</p>
        <img src="~assets/module4/xfsg.png" alt="" class="width-40 cus-ani-slideBottomIn ani-duration-1s ani-delay-15s">
      </div>
      <div class="cont-2-right cus-ani-rotateRightIn ani-duration-15s ani-delay-15s">
        <img src="~assets/module4/hua3.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import urls from '../../api/urls.js'

export default {
  name: 'section7',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return [
        this.imgList[3] && `${urls.imgHost}${this.imgList[3]}`,
        this.imgList[4] && `${urls.imgHost}${this.imgList[4]}`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cont-1{
  .cont-1-out{
    width: 100%;
    height: 46vw;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .cont-1-flw{
    position: absolute;
    left: 0;
    top: 0;
    width: 15vw;
  }
}
.cont-split{
  width: 25%;
  margin: .5rem 0 .15rem 0;
  height: 4px;
  background: #ebd095;
}
.cont-2-right{
  width: 25vw;
  transform-origin: center;
  img{
    width: 100%;
    transform: rotateY(180deg) rotateZ(65deg);
  }
}
</style>
