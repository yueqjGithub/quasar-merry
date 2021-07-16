<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <img src="~assets/module7/m7s1p1.png" alt="" class="width-60">
    <div class="q-pa-md flex-row flex-jst-center flex-ali-center width-80">
      <div class="m7-text-primary font-24">{{manName}}</div>
      <img src="~assets/module7/m7s1p2.png" alt="" class="width-10 q-ma-md">
      <div class="m7-text-primary font-24">{{womanName}}</div>
    </div>
    <div class="img-out cus-ani-zoomIn ani-duration-1s">
      <img :src="imgSrc" alt="" class="img-show">
    </div>
    <div class="q-pa-md"></div>
    <p class="m7-text-primary font-20 cus-ani-slideBottomIn ani-duration-05s ani-delay-1s">{{timeTarget}}</p>
    <p class="m7-text-primary font-20 cus-ani-slideBottomIn ani-duration-05s ani-delay-15s">{{address}}</p>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'section1',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[0]
    },
    manName () {
      return this.info.find(item => item.key === 'groom_varchar') && this.info.find(item => item.key === 'groom_varchar').value
    },
    womanName () {
      return this.info.find(item => item.key === 'bridal_varchar') && this.info.find(item => item.key === 'bridal_varchar').value
    },
    time () {
      return this.info.find(item => item.key === 'start_date') && this.info.find(item => item.key === 'start_date').value.replace(/-/g, '/')
    },
    timeTarget () {
      const vm = this
      return dayjs(vm.time).format('YYYY-MM-DD HH时mm分')
    },
    area () {
      return this.info.find(item => item.key === 'area_area') && this.info.find(item => item.key === 'area_area').value
    },
    address () {
      return this.info.find(item => item.key === 'address_address') && this.info.find(item => item.key === 'address_address').value
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  padding: .4rem 0;
  .img-out{
    width: 106vw;
    height: 98vw;
    overflow: hidden;
    background: url("~assets/module7/m7s1p3.png");
    background-size: 100% 100%;
    text-align: center;
    .img-show{
      width: 100%;
      mask-image: url("~assets/module7/m7s1mask1.png");
      mask-size: 100% 98vw;
      mask-clip: border-box;
      mask-repeat: no-repeat;
      transform-origin: center center;
      transform: scale(0.99, 0.99) translate(0px, -2px);
    }
  }
}
</style>
