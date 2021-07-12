<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-width flex-row flex-jst-center">
      <div class="flex-1 cus-ani-slideRightIn ani-duration-1s">
        <img :src="imgSrc[0]" alt="" class="full-width">
      </div>
      <div class="flex-1 flex-col flex-jst-center flex-ali-center">
        <img src="~assets/module5/sec1pic2.png" alt="" class="width-50">
        <img src="~assets/module5/m5s4p1.png" alt="" class="width-50">
        <div class="full-width flex-col flex-jst-center flex-ali-center q-pa-md cus-ani-slideBottomIn ani-duration-05s">
          <p class="no-ma-p font-14 m5-text-primary">微笑牵手浪漫</p>
          <p class="no-ma-p font-14 m5-text-primary">你就是我遇见的最大惊艳</p>
          <p class="no-ma-p font-14 m5-text-primary">幸福悄悄滋长</p>
          <p class="no-ma-p font-14 m5-text-primary">只想继续牵手</p>
        </div>
      </div>
    </div>
    <div class="q-pa-md"></div>
    <div class="full-width cus-ani-slideLeftIn ani-duration-1s ani-delay-05s">
      <img :src="imgSrc[1]" alt="" class="full-width">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section4',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return [this.imgList[2], this.imgList[3]]
    }
  }
}
</script>
