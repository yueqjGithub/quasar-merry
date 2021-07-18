<template>
  <div class="full-page page-container flex-col flex-jst-btw flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="full-width flex-col flex-jst-start flex-ali-center">
      <img src="~assets/module8/m8s1p1.png" alt="" class="width-60">
      <div class="avt-container relative-position cus-ani-slideTopIn ani-duration-1s">
        <div class="avt-out">
          <img :src="imgSrc" alt="">
        </div>
        <img src="~assets/module8/m8s1p2.png" alt="" class="avt-uper">
      </div>
    </div>
    <div class="s1-btm flex-col flex-jst-center flex-ali-center">
      <div class="flex-row flex-jst-center flex-ali-center width-80 cus-ani-slideTopIn ani-duration-1s ani-delay-05s">
        <div class="font-24 m8-text-primary">{{manName}}</div>
        <img src="~assets/module8/m8s1p3.png" alt="" class="width-30 q-ma-sm">
        <div class="font-24 m8-text-primary">{{manName}}</div>
      </div>
      <p class="m8-text-sec font-18 cus-ani-slideTopIn ani-duration-1s ani-delay-05s">{{timeTarget}}</p>
      <p class="m8-text-sec font-18 cus-ani-slideTopIn ani-duration-1s ani-delay-05s">{{address}}</p>
      <img src="~assets/module8/m8s1p4.png" alt="" class="width-60 cus-ani-slideRightIn ani-duration-05s ani-delay-15s">
    </div>
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
  padding: .4rem .1rem;
  .avt-container{
    width: 80%;
    .avt-out{
      position: absolute;
      overflow: hidden;
      width: 81%;
      height: 69%;
      left: 50%;
      border-radius: 50%;
      /* transform: scale(0.95); */
      transform: translate(-49%, 2%);
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 100%;
      }
    }
    .avt-uper{
      width: 100%;
      position: relative;
    }
  }
}
</style>
