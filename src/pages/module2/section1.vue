<template>
  <div class="full-page flex-col flex-jst-btw flex-ali-center page-container q-pa-md">
    <div class="full-page click-content"></div>
    <div class="content-container full-width full-height cus-ani-zoomIn ani-duration-05s flex-col flex-jst-start flex-ali-center">
      <img src="~assets/module2/light.png" alt="" class="full-width cus-ani-slideTopIn ani-duration-05s ani-delay-05s">
      <img src="~assets/module2/gm.png" alt="" class="width-80 cus-ani-zoomIn ani-duration-05s ani-delay-1s ma-row-md">
      <img src="~assets/module2/heart1p.png" alt="" class="width-60 cus-ani-slideTopIn ani-duration-1s ani-delay-15s ma-row-md">
      <img src="~assets/module2/std.png" alt="" class="width-80 cus-ani-slideBottomIn ani-duration-1s ani-delay-15s ma-row-md">
      <img src="~assets/module2/ba1p.png" alt="" class="width-60 cus-ani-slideTopIn ani-duration-1s ani-delay-45s tips-top">
      <span class="text-sj font-22 cus-ani-rotateIn ani-duration-2s ani-delay-25s">诚邀您参加我们的婚礼</span>
      <img src="~assets/module2/bb1p.png" alt="" class="width-60 cus-ani-slideBottomIn ani-duration-1s ani-delay-45s tips-btm">
      <div class="btm-container flex-row flex-jst-btw flex-ali-end q-pa-md full-width">
        <img src="~assets/module2/lf1p.png" alt="" class="width-10 cus-ani-slideLeftIn ani-duration-1s ani-delay-55s">
        <img src="~assets/module2/mf1p.png" alt="" class="width-20 cus-ani-slideBottomIn ani-duration-1s ani-delay-55s">
        <img src="~assets/module2/rf1p.png" alt="" class="width-10 cus-ani-slideRightIn ani-duration-1s ani-delay-55s">
      </div>
    </div>
    <img src="~assets/module2/lbranch.png" alt="" class="bg-lf width-10 cus-ani-slideLeftIn ani-duration-1s ani-delay-55s">
    <img src="~assets/module2/rbranch.png" alt="" class="bg-rf width-10 cus-ani-slideRightIn ani-duration-1s ani-delay-55s">
  </div>
</template>

<script>
export default {
  name: 'section1',
  props: ['imgList', 'info'],
  data () {
    return {}
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.content-container{
  background: url("~assets/module2/b1p.png");
  background-size: 100% 100%;
  position: relative;
  .tips-top{
    margin: .3rem auto;
  }
  .tips-btm{
    margin: .3rem auto;
  }
  .btm-container{
    position: absolute;
    bottom: .1rem;
  }
}
.bg-lf{
  position: fixed;
  left: 0;
  top: .5rem;
}
.bg-rf{
  position: fixed;
  right: 0;
  top: .5rem;
}
</style>
