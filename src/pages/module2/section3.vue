<template>
  <div class="full-page relative-position page-container">
    <div class="full-page click-content"></div>
    <div class="full-height bg-container">
      <img :src="imgSrc" alt="" class="section-bg cus-ani-scaleLoop">
    </div>
    <div class="tips-out full-width q-pa-md relative-position">
      <div class="tip-word full-width text-center">
        <p class="font-18 text-bold text-white cus-ani-slideRightIn ani-duration-1s ani-delay-1s">YOU ARE MY SUNSHINE</p>
      </div>
      <div class="circle circle1 cus-ani-slideLeftIn ani-duration-1s"></div>
      <div class="circle circle2 cus-ani-slideRightIn ani-duration-1s"></div>
      <div class="circle circle3 cus-ani-slideTopIn ani-duration-1s"></div>
      <img src="~assets/module2/b3p.png" alt="" class="cus-ani-slideLeftIn ani-duration-1s ani-delay-1s tip-f">
    </div>
  </div>
</template>

<script>
import urls from '../../api/urls'
export default {
  name: 'section3',
  props: ['imgList'],
  computed: {
    imgSrc () {
      return this.imgList[1] && `${urls.imgHost}${this.imgList[2]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.section-bg{
  height: 100%;
}
.bg-container{
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
.page-container{
  padding-bottom: 1rem;
  .tips-out{
    position: absolute;
    bottom: 1rem;
    height: 40vw;
    .tip-f{
      position: absolute;
      width: 20vw;
      left: 3vw;
      top: 5vw;
    }
    .tip-word{
      position: absolute;
      z-index: 6;
      top: 50%;
      left: 50%;
      transform: translate(-40%, -10%);
    }
    .circle{
      border-radius: 50%;
      background: rgba(0,0,0,.4);
      &.circle1{
        width: 35vw;
        height: 35vw;
        position: absolute;
        left: 5vw;
        top: 0;
      }
      &.circle2{
        width: 20vw;
        height: 20vw;
        position: absolute;
        left: 35vw;
        top: 15vw;
      }
      &.circle3{
        width: .4rem;
        height: .4rem;
        position: absolute;
        right: 5%;
        bottom: 35%;
      }
    }
  }
}
</style>
