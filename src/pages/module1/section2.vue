<template>
  <div class="full-page flex-col flex-jst-btw flex-ali-center relative-position page-container">
    <img src="~assets/module1/f1bp.png" alt="" class="bg-fl fl1 cus-ani-slideLeftIn ani-duration-1s ani-delay-1s">
    <img src="~assets/module1/f1ap.png" alt="" class="bg-fl fl2 cus-ani-slideRightIn ani-duration-1s ani-delay-1s">
    <img src="~assets/module1/f1ap.png" alt="" class="bg-fl fl3 cus-ani-slideLeftIn ani-duration-1s ani-delay-1s">
    <div class="fl4 bg-fl">
      <img src="~assets/module1/f1bp.png" alt="" class="cus-ani-slideRightIn ani-duration-1s ani-delay-1s">
    </div>
    <img src="~assets/module1/f1ap.png" alt="" class="bg-fl fl5 cus-ani-slideLeftIn ani-duration-1s ani-delay-1s">
    <img src="~assets/module1/f1ap.png" alt="" class="bg-fl fl6 cus-ani-slideLeftIn ani-duration-1s ani-delay-1s">
  </div>
</template>

<script>
export default {
  name: 'section2',
  props: ['imgList', 'info'],
  data () {
    return {}
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
</style>
