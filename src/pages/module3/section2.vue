<template>
  <div class="full-page page-container relative-position">
    <div class="full-page click-content"></div>
    <div class="content-out full-width flex-col flex-jst-start flex-ali-center cus-ani-slideBottomIn ani-duration-1s">
      <p class="cont-word font-45 text-bold">MY</p>
      <p class="cont-word font-65 text-bold">SUNSHINE</p>
      <p class="cont-word font-55 text-bold">ALWAYS</p>
      <div class="pic-out">
        <img :src="imgSrc" alt="">
      </div>
      <img src="~assets/module3/msg.png" alt="" class="btm-flw">
      <img src="~assets/module3/bird1.png" alt="" class="bird">
    </div>
  </div>
</template>

<script>
import urls from 'src/api/urls'

export default {
  name: 'section2',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[0] && `${urls.imgHost}${this.imgList[0]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.font-45{font-size: .45rem}
.font-65{font-size: .65rem}
.font-55{font-size: .55rem}
.page-container{
  padding: .4rem 0 0 0;
  .content-out{
    .bird{
      width: 14vw;
      position: absolute;
      right: 0;
      top: .2rem;
    }
    .btm-flw{
      width: 50%;
    }
    .cont-word{
      color: #ea8077;
      width: 100%;
      text-align: center;
      margin-bottom: 0;
      line-height: 1;
    }
    .pic-out{
      margin-top: -.2rem;
      width: 90%;
      align-self: start;
      position: relative;
      z-index: -1;
      background: #ffcfcd;
      img{
        width: 100%;
        min-height: 40vh;
        transform: translate(5%, 5%);
      }
    }
  }
}
</style>
