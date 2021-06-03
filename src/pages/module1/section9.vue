<template>
  <div class="full-page relative-position page-container q-pa-md flex-col flex-jst-center flex-ali-center bg-white">
    <img src="~assets/module1/f1ap.png" alt="" class="bg-fl bg-fl-l cus-ani-slideLeftIn ani-duration-05s ani-delay-05s">
    <img src="~assets/module1/f1ap.png" alt="" class="bg-fl bg-fl-r cus-ani-slideRightIn ani-duration-05s ani-delay-05s">
    <div class="content-container q-pa-lg cus-ani-zoomIn ani-duration-05s flex-col flex-jst-start flex-ali-center relative-position">
      <div class="tips-title flex-row flex-jst-ard flex-ali-center q-ma-md full-width">
        <div class="title-dot bg-warning"></div>
        <p class="font-20 text-bold text-warning cus-ani-slideTopIn ani-duration-05s ani-delay-1s no-ma-p">距离典礼还有</p>
        <div class="title-dot bg-warning"></div>
      </div>
      <img src="~assets/module1/wd.png" alt="" class="width-50 ma-row-md cus-ani-slideBottomIn ani-duration-05s ani-delay-1s">
      <p class="time-show cus-ani-slideBottomIn ani-duration-1s ani-delay-15s font-20">{{timeShow}}</p>
      <img src="~assets/module1/bird.png" alt="" class="width-50 cus-ani-slideBottomIn ani-duration-05s ani-delay-25s">
      <div class="ma-row-md flex-col flex-jst-start flex-ali-center">
        <p class="font-18 cus-ani-slideLeftIn ani-duration-05s ani-delay-3s">{{area}}</p>
        <p class="font-18 cus-ani-slideTopIn ani-duration-05s ani-delay-3s">{{address}}</p>
        <p class="font-18 cus-ani-slideRightIn ani-duration-05s ani-delay-3s">{{timeTarget}}</p>
      </div>
      <div class="full-width flex-row flex-jst-ard flex-ali-center">
        <a class="flex-col flex-jst-start flex-ali-center tel-a cus-ani-slideLeftIn ani-duration-05s ani-delay-35s" :href="`tel:${manTel}`">
          <img src="~assets/module1/tel.png" alt="" style="margin-bottom: .05rem">
          <p>男方</p>
        </a>
        <a class="flex-col flex-jst-start flex-ali-center tel-a cus-ani-slideRightIn ani-duration-05s ani-delay-35s" :href="`tel:${womanTel}`">
          <img src="~assets/module1/tel.png" alt="" style="margin-bottom: .05rem">
          <p>女方</p>
        </a>
      </div>
<!--      cao-->
      <div class="cao1 cao">
        <img src="~assets/module1/f1bp.png" alt="" class="cus-ani-slideTopIn ani-duration-05s ani-delay-05s">
      </div>
      <div class="cao2 cao">
        <img src="~assets/module1/f1bp.png" alt="" class="cus-ani-slideTopIn ani-duration-05s ani-delay-05s">
      </div>
      <div class="cao3 cao">
        <img src="~assets/module1/f1bp.png" alt="" class="cus-ani-slideTopIn ani-duration-05s ani-delay-05s">
      </div>
    </div>
    <div class="flex-col flex-jst-center flex-ali-center width-80 cus-ani-fadeIn ani-duration-1s ani-delay-4s">
      <img src="~assets/module1/nav.png" alt="" class="width-10" @click="openNav">
      <p class="text-warning font-16" @click="openNav">一键导航</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import urls from '../../api/urls'
import dayjs from 'dayjs'
export default {
  name: 'section9',
  data () {
    return {
      nowTime: dayjs(),
      timeDiff: 0,
      interval: null
    }
  },
  computed: {
    ...mapState(['info']),
    manTel () {
      return this.info.find(item => item.key === 'groomsman_tel_varchar')?.value
    },
    womanTel () {
      return this.info.find(item => item.key === 'bridesmaid_tel_varchar')?.value
    },
    time () {
      return this.info.find(item => item.key === 'start_date') && this.info.find(item => item.key === 'start_date').value.replace(/-/g, '/')
    },
    timeTarget () {
      const vm = this
      return dayjs(vm.time).format('YYYY-MM-DD HH时mm分')
    },
    timeShow () {
      const vm = this
      const dayMore = vm.timeDiff % 86400
      const diffDay = (vm.timeDiff - dayMore) / 86400
      const hourMore = dayMore % 3600
      const diffHour = (dayMore - hourMore) / 3600
      const minMore = hourMore % 60
      const diffMin = (hourMore - minMore) / 60
      return `${diffDay}天${diffHour}小时${diffMin}分${minMore}秒`
    },
    area () {
      return this.info.find(item => item.key === 'area_area') && this.info.find(item => item.key === 'area_area').value
    },
    address () {
      return this.info.find(item => item.key === 'address_address') && this.info.find(item => item.key === 'address_address').value
    },
    mapUrl () {
      const vm = this
      const lat = this.info.find(item => item.key === 'area_area') && this.info.find(item => item.key === 'area_area').latitude
      const lon = this.info.find(item => item.key === 'area_area') && this.info.find(item => item.key === 'area_area').longitude
      return `https://apis.map.qq.com/uri/v1/marker?marker=coord:${lat},${lon};title:${vm.address};addr:&referer=toypoy`
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.interval = null
  },
  methods: {
    init () {
      const vm = this
      vm.timeDiff = Math.abs(dayjs(vm.time).diff(vm.nowTime, 'second'))
      vm.interval = setInterval(() => {
        vm.timeDiff--
      }, 1000)
    },
    openNav () {
      const vm = this
      window.open(vm.mapUrl)
    }
  }
}
</script>

<style lang="scss" scoped>
.tel-a{
  color: #333333;
  text-decoration: none;
  p{
    text-align: center;
  }
}
.page-container{
  padding-top: .3rem;
  .bg-fl{
    position: absolute;
    width: 30%;
    &.bg-fl-l{
      left: -10%;
      bottom: -10%;
    }
    &.bg-fl-r{
      right: -10%;
      top: -10%;
    }
  }
  .content-container{
    background: url("~assets/module1/bbp.png");
    background-size: 100% 100%;
    width: 90%;
    padding-top: .3rem;
    margin-bottom: .3rem;
    .tips-title{
      .title-dot{
        width: 5px;
        height: 5px;
      }
    }
    .time-show{
      color: #ed4158;
      margin: .2rem auto;
    }
    .cao{
      position: absolute;
      width: 30vw;
      img{
        width: 100%;
      }
      &.cao1{
        left: 50%;
        top: 0%;
        transform: translate(-50%, -50%) rotateY(180deg);
      }
      &.cao2{
        left: 0%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-75deg);
      }
      &.cao3{
        right: 0;
        top: 50%;
        transform: translate(50%, 100%) rotate(90deg);
      }
    }
  }
}
</style>
