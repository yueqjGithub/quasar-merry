<template>
  <div class="full-page relative-position page-container">
    <div class="full-height bg-container">
      <img :src="imgSrc" alt="" class="section-bg cus-ani-scaleLoop">
    </div>
    <div class="full-width flex-col flex-jst-end flex-ali-center tips-container q-pa-md">
      <p class="font-16 text-sj cus-ani-slideLeftIn ani-duration-05s ani-delay-1s">从相遇的那一刻，每一天</p>
      <p class="font-16 text-sj cus-ani-slideRightIn ani-duration-05s ani-delay-1s">路不再是路，而是相伴</p>
      <p class="font-16 text-sj cus-ani-slideLeftIn ani-duration-05s ani-delay-1s">从相知的那一瞬间，每一秒</p>
      <p class="font-16 text-sj cus-ani-slideRightIn ani-duration-05s ani-delay-1s">生活不再是生活，而是彼此的融合</p>
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
      return this.imgList[3] && `${urls.imgHost}${this.imgList[3][0]}`
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
</style>
