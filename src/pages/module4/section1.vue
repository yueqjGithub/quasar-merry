<template>
  <div class="full-page flex-col flex-jst-center flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="cont-container relative-position">
      <img src="~assets/module4/sec1-bg.png" alt="" class="full-width" style="z-index: 2">
      <div class="word-container flex-col flex-jst-start flex-ali-center">
        <img src="~assets/module4/wedding.png" alt="" class="width-60 cus-ani-slideTopIn ani-duration-05s ani-delay-15s">
        <span class="name-show cus-ani-fadeIn ani-duration-05s ani-delay-2s">{{manName}}</span>
        <img src="~assets/module4/and.png" alt="" class="width-30 cus-ani-slideTopIn ani-duration-05s ani-delay-25s">
        <span class="name-show cus-ani-fadeIn ani-duration-05s ani-delay-3s">{{womanName}}</span>
        <span class="time-show cus-ani-fadeIn ani-duration-05s ani-delay-3s">{{timeTarget}}</span>
        <span class="add-show cus-ani-fadeIn ani-duration-05s ani-delay-3s">{{address}}</span>
      </div>
      <div class="img-border-out full-width">
        <img src="~assets/module4/out1.png" alt="" class="cus-ani-slideTopIn ani-duration-15s">
      </div>
      <div class="img-border-out" style="width: 92%">
        <img src="~assets/module4/out2.png" alt="" class="cus-ani-slideBottomIn ani-duration-15s">
      </div>
<!--      flowers-->
      <img src="~assets/module4/hua1.png" alt="" class="flower-1 sec1-flowers">
      <img src="~assets/module4/hua2.png" alt="" class="flower-2 sec1-flowers">
      <img src="~assets/module4/hua3.png" alt="" class="flower-3 sec1-flowers">
      <img src="~assets/module4/hua4.png" alt="" class="flower-4 sec1-flowers">
      <img src="~assets/module4/hua5.png" alt="" class="flower-5 sec1-flowers">
      <img src="~assets/module4/hua6.png" alt="" class="flower-6 sec1-flowers">
      <img src="~assets/module4/hua7.png" alt="" class="flower-7 sec1-flowers">
      <img src="~assets/module4/hua8.png" alt="" class="flower-8 sec1-flowers">
      <img src="~assets/module4/hua7.png" alt="" class="flower-9 sec1-flowers">
      <img src="~assets/module4/hua6.png" alt="" class="flower-10 sec1-flowers">
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import urls from '../../api/urls'
export default {
  name: 'section1',
  props: ['imgList', 'info'],
  data () {
    return {}
  },
  computed: {
    avatar () {
      return this.imgList[0] && `${urls.imgHost}${this.imgList[0]}`
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
.cont-container{
  width: 90%;
  z-index: 2;
  .img-border-out{
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img{
      width: 100%;
    }
  }
  .word-container{
    width: 100%;
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .name-show{
      font-size: .28rem;
      margin: .1rem auto;
    }
    .time-show{
      margin-top: .15rem;
      font-size: .18rem;
    }
    .add-show{
      margin-top: .15rem;
      font-size: .18rem;
    }
  }
  .sec1-flowers{
    position: absolute;
    z-index: -1;
    animation-name: cusAniFadeIn;
    animation-fill-mode: forwards;
    opacity: 0;
    animation-delay: 2s;
    animation-duration: 1s;
    &.flower-1{
      left: -4%;
      top: 24%;
      width: 22%;
    }
    &.flower-2{
      left: -4%;
      top: 12%;
      width: 22%;
    }
    &.flower-3{
      left: 5%;
      top: 3%;
      width: 22%;
    }
    &.flower-4{
      left: 23%;
      top: -5%;
      width: 28%;
    }
    &.flower-5{
      left: 53%;
      top: -5%;
      width: 28%;
    }
    &.flower-6{
      left: 75%;
      top: 4%;
      width: 28%;
    }
    &.flower-7{
      left: 83%;
      top: 17%;
      width: 28%;
    }
    &.flower-8{
      right: -3%;
      bottom: 2%;
      width: 28%;
    }
    &.flower-9{
      left: 22%;
      bottom: -4%;
      width: 31%;
    }
    &.flower-10{
      left: 0%;
      bottom: -1%;
      width: 33%;
    }
  }
}
</style>
