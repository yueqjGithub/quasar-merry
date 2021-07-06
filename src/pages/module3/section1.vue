<template>
  <div class="full-page flex-col flex-jst-start flex-ali-center page-container">
    <div class="cus-ani-zoomIn ani-duration-1s ani-delay-05s ma-row-md relative-position" style="z-index: 4">
      <img
        src="~assets/module3/avatarBg.png"
        style="width: 100vw; position: absolute;top: -5%;left: -9%;display: block;"
      />
      <q-img
        :src="avatar"
        spinner-color="white"
        style="width: 85vw; border-radius: 50%;border:5px solid #ffcecc;background:#ffcecc;"
        position="0 0"
        :ratio="1/1"
      />
      <img src="~assets/module3/avatarSup.png" alt="" class="cus-ani-slideTopIn ani-duration-1s ani-delay-15s"
      style="position:absolute;bottom:-8%;left:0;width:100%"
      >
    </div>
    <!-- 名字 -->
    <div class="full-width flex-row flex-jst-center flex-ali-center name-container relative-position">
      <span class="name-view cus-ani-slideTopIn ani-duration-05s ani-delay-1s">{{manName}}</span>
      <img src="~assets/module3/ax.png" alt="" class="name-icon cus-ani-zoomIn ani-duration-05s ani-delay-1s">
      <span class="name-view cus-ani-slideTopIn ani-duration-05s ani-delay-1s">{{womanName}}</span>
    </div>
    <div class="full-width flex-col flex-jst-start flex-ali-center add-container relative-position">
      <span class="time-view cus-ani-fadeIn ani-duration-05s ani-delay-15s">{{timeTarget}}</span>
      <img src="~assets/module3/hua.png" alt="" class="add-icon cus-ani-slideTopIn ani-duration-05s ani-delay-15s">
      <span class="time-view cus-ani-fadeIn ani-duration-05s ani-delay-15s">{{area}}</span>
    </div>
    <div class="flex-1 flex-col flex-jst-end flex-ali-center q-pa-md">
      <img src="~assets/module3/btm.png" alt="" class="full-width cus-ani-slideBottomIn ani-duration-1s ani-delay-2s">
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
.page-container{
  padding: .3rem 0 0 0;
  .name-container{
    margin-top: .5rem;
    .name-view{
      color: #dc4639;
      font-size: .25rem;
      font-weight: bold;
    }
    .name-icon{
      width: 7vw;
      margin: 0 .3rem;
    }
  }
  .add-container{
    .add-icon{
      width: 30vw;
      margin: .15rem auto;
    }
    .time-view{
      color: #dc4639;
      font-size: .2rem;
      font-weight: 100;
    }
  }
}
</style>
