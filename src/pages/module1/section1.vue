<template>
  <div class="full-page flex-col flex-jst-btw flex-ali-center">
    <div class="full-width top-img-container q-pa-lg ma-row-md flex-col flex-jst-center flex-ali-center relative-position">
      <div class="cus-ani-zoomIn ani-duration-1s" style="z-index: 4">
        <q-img
          :src="avatar"
          spinner-color="white"
          style="width: 60vw; border-radius: 50%;border: 4px solid rgb(239, 163, 82);"
          position="0 0"
          :ratio="1/1"
        />
      </div>
      <img src="~assets/module1/f1ap.png" alt="" class="fl-lt top-fl cus-ani-slideLeftIn ani-delay-1s ani-duration-1s">
      <img src="~assets/module1/f1ap.png" alt="" class="fl-rt top-fl cus-ani-slideRightIn ani-delay-1s ani-duration-1s">
      <img src="~assets/module1/f1bp.png" alt="" class="fl-bt top-fl cus-ani-slideRightIn ani-delay-1s ani-duration-1s">
    </div>
<!--    名字展示-->
    <div class="q-pa-md flex-col flex-jst-ard flex-ali-center full-width flex-1">
      <div class="name-show flex-row flex-jst-center flex-ali-center">
        <span class="font-18 cus-ani-slideLeftIn ani-delay-2s ani-duration-1s">{{manName}}</span>
        <span class="q-ma-md font-24 cus-ani-zoomIn ani-delay-2s ani-duration-1s">&</span>
        <span class="font-18 cus-ani-slideRightIn ani-delay-2s ani-duration-1s">{{womanName}}</span>
      </div>
      <img src="~assets/module1/b1ap.png" alt="" class="cus-ani-slideTopIn ani-duration-05s ani-delay-2s width-50 ma-row-md">
    </div>
<!--    底部-->
    <div class="full-width flex-1 flex-col flex-jst-btw flex-ali-center q-pa-md">
      <span class="font-22 cus-ani-rotateIn ani-duration-2s ani-delay-2s">诚邀您参加我们的婚礼</span>
      <img src="~assets/module1/b1bp.png" alt="" class="full-width cus-ani-bounceIn ani-duration-15s ani-delay-2s">
    </div>
  </div>
</template>

<script>
import urls from '../../api/urls.js'
export default {
  name: 'section1',
  props: ['imgList', 'info'],
  data () {
    return {}
  },
  computed: {
    avatar () {
      return this.imgList[0] && `${urls.imgHost}${this.imgList[0][0]}`
    },
    manName () {
      return this.info.find(item => item.key === 'groom_varchar') && this.info.find(item => item.key === 'groom_varchar').value
    },
    womanName () {
      return this.info.find(item => item.key === 'bridal_varchar') && this.info.find(item => item.key === 'bridal_varchar').value
    }
  }
}
</script>

<style lang="scss" scoped>
.top-img-container{
  .top-fl{
    position: absolute;
    width: 30vw;
    z-index: 3;
  }
  .fl-lt{
    left: 1%;
    bottom: 1%;
    width: 40vw;
  }
  .fl-rt{
    right: 1%;
    top: 1%;
  }
  .fl-bt{
    right: 12%;
    bottom: 1%;
    z-index: 5;
    width: 35vw;
  }
}
</style>
