<template>
  <div class="full-page page-container flex-col flex-jst-center flex-ali-center">
    <div class="cont-1 full-width relative-position flex-row flex-jst-center flex-ali-center">
      <img src="~assets/module5/sec1pic1.png" alt="" class="width-80">
      <div class="fly-out flex-row flex-jst-btw flex-ali-center width-80">
        <div class="fly-sub cus-ani-slideRightIn ani-duration-05s">
          <img src="~assets/module5/sec1titsub.png" alt="">
        </div>
        <div class="fly-sub cus-ani-slideLeftIn ani-duration-05s">
          <img src="~assets/module5/sec1titsub.png" alt="">
        </div>
      </div>
    </div>
    <div class="cont-2 q-pa-md width-80 flex-col flex-jst-center flex-ali-center relative-position">
      <img src="~assets/module5/sec1pic2.png" alt="" class="width-40 cont2-flw cus-ani-slideTopIn ani-duration-05s ani-delay-1s">
      <img src="~assets/module5/sec1pic3.png" alt="" class="width-80 cus-ani-scaleX ani-duration-05s ani-delay-05s">
    </div>
<!--    name-->
    <div class="flex-row flex-jst-center flex-ali-center">
      <div class="m5-text-primary font-28 cus-ani-slideBottomIn ani-duration-05s ani-delay-15s">{{manName}}</div>
      <img src="~assets/module5/ax.png" alt="" class="q-ma-lg width-10 cus-ani-zoomIn ani-delay-15s ani-duration-05s">
      <div class="m5-text-primary font-28 cus-ani-slideBottomIn ani-duration-05s ani-delay-15s">{{womanName}}</div>
    </div>
    <img src="~assets/module5/arrow.png" alt="" class="width-30 q-ma-md cus-ani-fadeIn ani-duration-05s ani-delay-15s">
    <p class="m5-text-primary font-18 cus-ani-slideBottomIn ani-duration-05s ani-delay-2s">{{timeTarget}}</p>
    <img src="~assets/module5/arrow.png" alt="" class="width-30 q-ma-md cus-ani-fadeIn ani-duration-05s ani-delay-25s">
    <p class="m5-text-primary font-18 cus-ani-slideBottomIn ani-duration-05s ani-delay-25s">{{address}}</p>
    <div class="flex-1 full-width flex-col flex-jst-center flex-ali-center">
      <img src="~assets/module5/btm.png" alt="" class="width-80 cus-ani-slideBottomIn ani-duration-05s ani-delay-2s">
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
  padding-top: .8rem;
  .cont-1{
    .fly-out{
      position: absolute;
      left: 50%;
      top: 10%;
      transform: translate(-50%, 0);
      .fly-sub{
        width: 20%;
        img{
          width: 100%;
        }
        &:nth-of-type(1){
          img{
            transform: rotateY(180deg);
          }
        }
      }
    }
  }
  .cont-2{
    .cont2-flw{
      margin-bottom: -17%;
    }
  }
}
</style>
