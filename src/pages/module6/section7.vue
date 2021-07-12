<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-end">
    <div class="full-page click-content"></div>
    <div class="cont-out q-pa-md relative-position flex-col flex-jst-start flex-ali-end cus-ani-slideRightIn ani-duration-05s">
      <div class="full-width relative-position flex-row flex-jst-end flex-ali-end bird-out">
        <img src="~assets/module6/m6-bird1.png" alt="" class="btm-bird">
        <img src="~assets/module6/m6-bird2.png" alt="" class="btm-bird">
      </div>
      <img src="~assets/module6/m6s6p1.png" alt="" class="width-80 cus-ani-slideLeftIn ani-duration-1s">
      <img src="~assets/module6/m6s7p1.png" alt="" class="width-60 ma-row-md cus-ani-slideRightIn ani-duration-1s">
      <div class="img-out cus-ani-slideLeftIn ani-delay-05s ani-duration-15s">
        <img :src="imgSrc" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section7',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[7]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
}
.cont-out {
  flex: 1;
  margin-right: -.27rem;
  padding-bottom: .5rem;
  background: #ffffff;
  width: 97%;
  .bird-out{
    padding-left: 19%;
    .btm-bird{
      width: 11vw;
      &+.btm-bird{
        width: 14vw;
        margin-left: .2rem;
      }
    }
  }
  .img-out{
    flex: 1;
    width: 90%;
    overflow: hidden;
    border-radius: .07rem;
    background: black;
    img{
      width: 100%;
    }
  }
}
</style>
