<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="cont-out flex-1 q-pa-lg full-width relative-position flex-col flex-jst-start flex-ali-end cus-ani-slideBottomIn ani-duration-05s">
      <img src="~assets/module6/m6s1p1.png" alt="" class="width-40 cus-ani-fadeIn ani-duration-1s ani-delay-1s">
      <img src="~assets/module6/m6s1word.png" alt="" class="width-80 ma-row-md cus-ani-scaleX ani-duration-1s ani-delay-15s">
      <img src="~assets/module6/m6s1p2.png" alt="" class="width-60 ma-row-md cus-ani-slideRightIn ani-duration-05s ani-delay-2s">
      <div class="width-60 flex-row flex-jst-start flex-ali-center cus-ani-slideRightIn ani-duration-05s ani-delay-25s">
        <div class="font-28 m6-text-primary">{{manName}}</div>
        <img src="~assets/module6/m6s1p3.png" alt="" class="width-10 q-ma-lg">
        <div class="font-28 m6-text-primary">{{womanName}}</div>
      </div>
      <div class="font-22 m6-text-sub cus-ani-slideRightIn ani-duration-05s ani-delay-3s">{{timeTarget}}</div>
      <img src="~assets/module6/m6s1p2.png" alt="" class="width-60 ma-row-md cus-ani-slideRightIn ani-duration-05s ani-delay-35s">
      <p class="font-18 m6-text-sub cus-ani-slideRightIn ani-duration-05s ani-delay-4s">
        诚挚邀请您：参加我们的婚礼
      </p>
      <img src="~assets/module6/m6ax.png" alt="" class="width-10 cus-ani-slideTopIn ani-duration-05s ani-delay-35s">
      <div class="flex-1"></div>
      <img src="~assets/module6/m6-bird1.png" alt="" class="bird-1 bird-pic cus-ani-slideLeftIn ani-duration-05s ani-delay-05s">
      <img src="~assets/module6/m6-bird2.png" alt="" class="bird-2 bird-pic cus-ani-slideRightIn ani-duration-05s ani-delay-05s">
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'section1',
  props: ['imgList', 'info'],
  computed: {
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
  padding: .5rem 0;
}
.cont-out{
  background: #ffffff;
  border-bottom: 3px solid #ffc2c2;
  .bird-pic{
    position: absolute;
    &.bird-1{
      width: 44%;
      bottom: -11%;
      left: 0;
    }
    &.bird-2{
      width: 50%;
      bottom: -5%;
      left: 47%;
    }
  }
}
</style>
