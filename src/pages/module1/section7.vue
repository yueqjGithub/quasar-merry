<template>
  <div class="full-page relative-position page-container">
    <div class="full-height bg-container">
      <img :src="imgSrc" alt="" class="section-bg cus-ani-slideLoop">
    </div>
    <div class="full-width flex-col flex-jst-end flex-ali-center tips-container q-pa-md">
      <div class="tips-out full-width q-pa-md flex-col flex-jst-center flex-ali-center relative-position cus-ani-zoomIn ani-duration-1s">
        <p class="font-24 text-white text-bold cus-ani-slideBottomIn ani-duration-05s ani-delay-1s">相惜相守，天长地久</p>
        <p class="text-sj font-16 cus-ani-slideBottomIn ani-duration-05s ani-delay-15s">从初次见面，到牵手相伴</p>
        <p class="text-sj font-16 cus-ani-slideBottomIn ani-duration-05s ani-delay-2s">仿佛一切命中注定</p>
        <img src="~assets/module1/rb7p.png" alt="" class="tip-bg1 cus-ani-slideRightIn ani-duration-05s ani-delay-1s">
        <div class="tip-bg2">
          <img src="~assets/module1/rb7p.png" alt="" class="cus-ani-slideRightIn ani-duration-05s ani-delay-1s">
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
      return this.imgList[5] && `${urls.imgHost}${this.imgList[5]}`
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
    background: rgba(0,0,0,.5);
    padding: .5rem 0;
    p{
      margin-bottom: .05rem;
    }
    .tip-bg1{
      position: absolute;
      right: .1rem;
      top: .1rem;
      height: .6rem;
    }
    .tip-bg2{
      position: absolute;
      left: .1rem;
      bottom: .1rem;
      transform: rotate(180deg);
      img{
        height: .6rem;
      }
    }
  }
}
</style>
