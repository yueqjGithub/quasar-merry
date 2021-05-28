<template>
  <div class="full-page scroll-allow flex-col flex-jst-start flex-ali-center relative-position page-container">
<!--    <div class="full-page click-content"></div>-->
    <img src="~assets/module2/tl.png" alt="" class="width-50 cus-ani-slideTopIn ani-duration-05s ma-row-md">
    <div class="cus-ani-zoomIn ani-duration-1s ani-delay-05s ma-row-md relative-position" style="z-index: 4">
      <q-img
        :src="avatar"
        spinner-color="white"
        style="width: 40vw; border-radius: 50%;"
        position="0 0"
        :ratio="1/1"
      />
      <img
        src="~assets/module2/fr.png"
        style="width: 50vw; position: absolute;top: -6%;left: -14%;display: block;"
      />
    </div>
<!--    名字-->
    <div class="name-container flex-row flex-jst-center flex-ali-center width-80">
      <p class="font-18 text-sj cus-ani-slideLeftIn ani-duration-05s ani-delay-15s">{{manName}}</p>
      <div class="q-ma-md cus-ani-zoomIn ani-duration-1s ani-delay-15s width-10">
        <img src="~assets/module2/heart2p.png" alt="" class="full-width cus-ani-breath breath-loop ani-duration-2s">
      </div>
      <p class="font-18 text-sj cus-ani-slideRightIn ani-duration-05s ani-delay-15s">{{womanName}}</p>
    </div>
    <img src="~assets/module2/heart1p.png" alt="" class="width-50 cus-ani-slideBottomIn ani-duration-1s ani-delay-25s">
<!--    恭请光临-->
    <div class="width-60 ma-row-md relative-position">
      <div class="wel-tips">
        <p class="text-warning font-22 text-bold cus-ani-slideBottomIn ani-duration-1s ani-delay-25s">恭请光临</p>
      </div>
      <img src="~assets/module2/b2p.png" alt="" class="full-width cus-ani-scaleX cus-ani-scaleX ani-duration-1s ani-delay-25s">
    </div>
<!--    时间，地点-->
    <p class="font-18 text-sj cus-ani-slideLeftIn ani-duration-05s ani-delay-35s">{{timeShow}}{{day}}</p>
    <p class="font-18 text-sj cus-ani-slideTopIn ani-duration-05s ani-delay-4s">{{area}}</p>
    <p class="font-18 text-sj cus-ani-slideRightIn ani-duration-05s ani-delay-45s">{{address}}</p>
<!--    摇摆花束-->
    <div class="shake-f-l shake-f cus-ani-shakeLoop ani-duration-4s">
      <img src="~assets/module2/lb2p.png" alt="" class="full-width cus-ani-fadeIn ani-delay-5s ani-duration-05s">
    </div>
    <div class="shake-f-r shake-f cus-ani-shakeLoop ani-duration-4s">
      <img src="~assets/module2/rb2p.png" alt="" class="full-width cus-ani-fadeIn ani-delay-5s ani-duration-05s">
    </div>
  </div>
</template>

<script>
import { date } from 'quasar'
import urls from 'src/api/urls'
export default {
  name: 'section2',
  props: ['imgList', 'info'],
  data () {
    return {
      dayList: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    }
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
    timeShow () {
      return date.formatDate(this.time, 'YYYY年MM月DD日')
    },
    day () {
      return this.time ? this.dayList[date.getDayOfWeek(this.time)] : ''
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
  .name-container{
    margin-top: .3rem;
  }
}
.wel-tips{
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translate(-50%, 0);
}
.shake-f{
  position: absolute;
  top: 0;
  width: 15%;
  img{
    width: 100%;
  }
  &.shake-f-l{
    left: .15rem;
  }
  &.shake-f-r{
    right: .15rem;
  }
}
</style>
