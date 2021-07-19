<template>
  <div class="full-page page-container flex-col flex-jst-start flex-ali-center">
    <div class="full-page click-content"></div>
    <div class="full-width cont-1 q-pa-md flex-row flex-jst-btw flex-ali-start relative-position">
      <p class="font-30 m9-text-primary text-bold m9-text-fs cus-ani-slideTopIn ani-duration-05s ani-delay-05s">INVITATION</p>
      <div class="flex-col flex-col flex-jst-start flex-ali-start">
        <p class="font-22 m9-text-primary text-bold no-ma-p m9-text-fs">VOL.</p>
        <p class="font-22 m9-text-primary text-bold m9-text-fs cus-ani-rotateIn ani-duration-05s ani-delay-1s">520</p>
      </div>
      <div class="name-container flex-col flex-jst-center flex-ali-start m9-text-primary q-pa-md">
        <p class="font-16 no-ma-p cus-ani-slideLeftIn ani-duration-05s ani-delay-1s">{{manName}}</p>
        <p class="no-ma-p ma-row-md cus-ani-slideLeftIn ani-duration-05s ani-delay-15s">/</p>
        <p class="font-16 no-ma-p cus-ani-slideLeftIn ani-duration-05s ani-delay-2s">{{womanName}}</p>
      </div>
    </div>
    <div class="flex-1 img-out full-width flex-row flex-jst-center flex-ali-center overflow-hidden cus-ani-zoomIn ani-duration-1s">
      <img :src="imgSrc" alt="" class="full-width">
    </div>
    <div class="btm-cont full-width flex-row flex-jst-btw flex-ali-center q-pa-md">
      <div class="flex-col flex-jst-center flex-ali-start m9-text-primary cus-ani-slideLeftIn ani-duration-1s ani-delay-1s">
        <p class="font-30 no-ma-p m9-text-fs">WEDDING TIME</p>
        <span class="font-16">{{timeTarget}}</span>
        <span class="font-16">{{address}}</span>
      </div>
      <img src="~assets/module9/m9s1p1.png" alt="" class="width-20 cus-ani-slideRightIn ani-duration-1s ani-delay-1s">
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
  padding-bottom: .3rem;
  .cont-1{
    .name-container{
      position: absolute;
      left: 0;
      top: .7rem;
      background: #ffffff;
      z-index: 6;
    }
  }
}
</style>
