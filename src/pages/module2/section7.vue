<template>
  <div class="full-page relative-position page-container">
    <div class="full-height bg-container">
      <img :src="imgSrc" alt="" class="section-bg cus-ani-slideLoop">
    </div>
    <div class="full-width flex-col flex-jst-end flex-ali-center tips-container q-pa-lg">
      <div class="tips-out full-width flex-col flex-jst-btw flex-ali-center relative-position cus-ani-zoomIn ani-duration-1s">
        <img src="~assets/module2/b5p.png" alt="" class="full-width cus-ani-scaleX ani-duration-1s ani-delay-1s">
        <div class="full-width flex-col flex-jst-start flex-ali-center ma-row-md">
          <p class="font-24 text-white text-bold cus-ani-slideBottomIn ani-duration-05s ani-delay-2s">相惜相守，天长地久</p>
          <p class="text-sj font-14 cus-ani-slideBottomIn ani-duration-05s ani-delay-25s">从初次见面，到牵手相伴</p>
          <p class="text-sj font-14 cus-ani-slideBottomIn ani-duration-05s ani-delay-3s">仿佛一切命中注定</p>
        </div>
        <img src="~assets/module2/lbird.png" alt="" class="tips-bird bird-l cus-ani-slideLeftIn ani-duration-1s ani-delay-35s">
        <img src="~assets/module2/rbird.png" alt="" class="tips-bird bird-r cus-ani-slideRightIn ani-duration-1s ani-delay-35s">
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
    p{
      margin-bottom: .05rem;
    }
    .tips-bird{
      width: 20%;
      position: absolute;
      bottom: -.1rem;
      &.bird-l{
        left: -10%;
      }
      &.bird-r{
        right: -10%;
      }
    }
  }
}
</style>
