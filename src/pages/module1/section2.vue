<template>
  <div class="full-page flex-col flex-jst-btw flex-ali-center relative-position page-container page-hidden">
    <img src="~assets/module1/f1bp.png" alt="" class="bg-fl fl1 cus-ani-slideLeftIn ani-duration-1s ani-delay-1s">
    <img src="~assets/module1/f1ap.png" alt="" class="bg-fl fl2 cus-ani-slideRightIn ani-duration-1s ani-delay-1s">
    <img src="~assets/module1/f1ap.png" alt="" class="bg-fl fl3 cus-ani-slideLeftIn ani-duration-1s ani-delay-1s">
    <div class="fl4 bg-fl">
      <img src="~assets/module1/f1bp.png" alt="" class="cus-ani-slideRightIn ani-duration-1s ani-delay-1s">
    </div>
    <img src="~assets/module1/f1ap.png" alt="" class="bg-fl fl5 cus-ani-slideLeftIn ani-duration-1s ani-delay-1s">
    <img src="~assets/module1/f1ap.png" alt="" class="bg-fl fl6 cus-ani-slideLeftIn ani-duration-1s ani-delay-1s">
<!--    内容-->
    <div class="full-width flex-1 flex-col flex-jst-start flex-ali-center">
      <img src="~assets/module1/wel2p.png" alt="" class="width-40 q-pa-md cus-ani-slideTopIn ani-duration-1s">
      <img src="~assets/module1/b2p.png" alt="" class="width-50 cus-ani-slideBottomIn ani-duration-1s">
      <p class="full-width text-center text-warning font-18 info-p cus-ani-slideBottomIn ani-duration-02s text-bold"
      v-for="(k, idx) in showList" :key="idx"
         :style="{animationDelay: `${2 + idx * 0.1}s`}"
      >{{k}}</p>
      <p class="full-width text-right text-warning font-18 text-bold cus-ani-slideBottomIn ani-duration-1s q-pa-lg"
      :style="{animationDelay: '3.4s'}"
      >
        {{manName}}&{{womanName}}敬上
      </p>
    </div>
  </div>
</template>

<script>
import { date } from 'quasar'
export default {
  name: 'section2',
  props: ['imgList', 'info'],
  data () {
    return {
      dayList: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    }
  },
  computed: {
    manName () {
      return this.info.find(item => item.key === 'groom_varchar') && this.info.find(item => item.key === 'groom_varchar').value
    },
    womanName () {
      return this.info.find(item => item.key === 'bridal_varchar') && this.info.find(item => item.key === 'bridal_varchar').value
    },
    time () {
      return this.info.find(item => item.key === 'start_date') && this.info.find(item => item.key === 'start_date').value
    },
    day () {
      return this.time ? this.dayList[date.getDayOfWeek(this.time)] : ''
    },
    area () {
      return this.info.find(item => item.key === 'area_area') && this.info.find(item => item.key === 'area_area').value
    },
    address () {
      return this.info.find(item => item.key === 'address_address') && this.info.find(item => item.key === 'address_address').value
    },
    showList () {
      return [
        '谨定于',
        `公历${date.formatDate(this.time, 'YYYY年MM月DD日')}`,
        this.day,
        `在${this.area}`,
        this.address,
        '举行婚礼',
        '届时恭请光临'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-fl{
  position: absolute;
  z-index: 3;
  width: 40%;
  &.fl1{
    top: 0;
    left: -5%;
  }
  &.fl2{
    width: 50%;
    top: -4%;
    right: -29%;
  }
  &.fl3{
    width: 30%;
    top: 45%;
    left: -10%;
  }
  &.fl4{
    top: 45%;
    right: -12%;
    transform: rotate(-90deg);
    img{
      width: 100%;
    }
  }
  &.fl5{
    bottom: -7%;
    left: -19%;
  }
  &.fl6{
    width: 30%;
    bottom: 7%;
    right: -15%;
  }
}
.page-container{
  padding-top: 1rem;
  .info-p{
    margin: .1rem auto;
    &:first-of-type{
      margin: .4rem auto .2rem auto;
    }
    &:nth-of-type(3){
      margin: .1rem auto .4rem auto;
    }
  }
}
</style>
