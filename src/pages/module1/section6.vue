<template>
  <div class="full-page relative-position page-container">
    <div class="full-height bg-container">
      <img :src="imgSrc" alt="" class="section-bg cus-ani-scaleLoop">
    </div>
    <div class="full-width flex-col flex-jst-end flex-ali-center tips-container q-pa-md">
      <div class="tips-out flex-col flex-jst-center flex-ali-center relative-position">
        <p class="text-sj font-18 cus-ani-slideRightIn ani-duration-1s ani-delay-1s">是最长情的告白</p>
        <img src="~assets/module1/su6p.png" alt="" class="pb-bg cus-ani-slideTopIn ani-duration-1s">
        <img src="~assets/module1/pb.png" alt="" class="pb-pic cus-ani-slideBottomIn ani-duration-1s">
        <img src="~assets/module1/b6p.png" alt="" class="pb-flower cus-ani-slideRightIn ani-duration-1s">
        <div class="pb-btm">
          <img src="~assets/module1/su6p.png" alt="" class="cus-ani-slideTopIn ani-duration-1s">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import urls from '../../api/urls'
export default {
  name: 'section6',
  props: ['imgList'],
  computed: {
    imgSrc () {
      return this.imgList[4] && `${urls.imgHost}${this.imgList[4]}`
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
    box-sizing: border-box;
    padding: .5rem 0;
    width: 100%;
    .pb-bg{
      position: absolute;
      left: 0;
      top: 0;
      width: 35%;
    }
    .pb-pic{
      position: absolute;
      left: 15%;
      width: 20%;
      top: 10%;
    }
    .pb-flower{
      position: absolute;
      right: 5%;
      top: 0%;
      width: 25%;
    }
    .pb-btm{
      position: absolute;
      bottom: 0;
      right: 20%;
      width: 10%;
      transform: rotate(180deg);
      img{
        width: 100%;
      }
    }
  }
}
</style>
