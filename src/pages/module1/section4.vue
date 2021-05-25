<template>
  <div class="full-page relative-position page-container">
    <div class="full-height bg-container">
      <img :src="imgSrc" alt="" class="section-bg cus-ani-scaleLoop">
    </div>
    <div class="full-width flex-col flex-jst-end flex-ali-center tips-container q-pa-md">
      <div class="flex-col flex-jst-ard flex-ali-end tips-out cus-ani-rotateX ani-delay-1s ani-duration-1s">
        <p class="font-24 text-white text-bold cus-ani-slideTopIn ani-duration-05s ani-delay-2s">因为有你</p>
        <p class="font-16 text-white text-bold cus-ani-slideBottomIn ani-duration-05s ani-delay-2s">不用面向大海 也会春暖花开</p>
      </div>
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
      return this.imgList[2] && `${urls.imgHost}${this.imgList[2][0]}`
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
.tips-container{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  padding-bottom: 1rem;
  .tips-out{
    width: 80vw;
    height: 24vw;
    background: url("~assets/module1/b4p.png");
    background-size: 100% 100%;
  }
}
</style>
