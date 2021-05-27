<template>
  <div class="full-page relative-position page-container">
    <div class="full-height bg-container">
      <img :src="imgSrc" alt="" class="section-bg cus-ani-slideLoop">
    </div>
    <div class="full-width flex-col flex-jst-end flex-ali-start tips-container q-pa-md">
      <div class="tips-sup cus-ani-slideLeftIn ani-duration-1s ani-delay-1s"></div>
      <p class="font-26 text-white text-bold cus-ani-slideRightIn ani-duration-1s ani-delay-1s q-ma-md" style="align-self: center">YOU ARE MY SUNSHINE</p>
      <div class="tips-sup cus-ani-slideRightIn ani-duration-1s ani-delay-1s" style="align-self: flex-end"></div>
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
      return this.imgList[1] && `${urls.imgHost}${this.imgList[1]}`
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
}
.tips-sup{
  width: 35%;
  height: .4rem;
  background: rgba(255,255,255,.8);
  &:first-of-type{
    height: .15rem;
  }
}
</style>
