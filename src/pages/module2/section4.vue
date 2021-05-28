<template>
  <div class="full-page relative-position page-container">
    <div class="full-height bg-container">
      <img :src="imgSrc" alt="" class="section-bg cus-ani-scaleLoop">
    </div>
    <div class="tips-container flex-col flex-jst-end flex-ali-center">
      <div class="tips-out flex-col flex-jst-start flex-ali-center">
        <div class="flex-row flex-jst-center flex-ali-center full-width">
          <img src="~assets/module2/heart4p.png" alt="" class="width-20 cus-ani-slideLeftIn ani-duration-1s ani-delay-1s">
          <p class="font-22 text-sj text-bold cus-ani-slideTopIn ani-duration-1s ani-delay-1s no-ma-p">因为有你</p>
        </div>
        <img src="~assets/module2/arr.png" alt="" class="full-width cus-ani-slideLeftIn ani-duration-1s">
        <p class="text-sj font-18 cus-ani-slideBottomIn ani-duration-1s ani-delay-1s">不用面朝大海，也会春暖花开</p>
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
      return this.imgList[2] && `${urls.imgHost}${this.imgList[2]}`
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
  }
}
</style>
