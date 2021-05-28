<template>
  <div class="full-page relative-position page-container page-hidden">
    <div class="full-page click-content"></div>
    <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="out-in"
    >
      <div class="full-height bg-container" v-if="show" :key="1">
        <img :src="curImg" alt="" class="section-bg cus-ani-slideLoop">
      </div>
      <div class="full-height bg-container" v-else :key="2">
        <img :src="nextImg" alt="" class="section-bg cus-ani-slideLoop">
      </div>
    </transition>
  </div>
</template>

<script>
import urls from '../../api/urls'
export default {
  name: 'section6',
  props: ['imgList'],
  data () {
    return {
      cur: 0,
      next: 1,
      interval: null,
      show: 1
    }
  },
  computed: {
    curImg () {
      const host = urls.imgHost
      return `${host}${this.imgList[this.cur]}`
    },
    nextImg () {
      const host = urls.imgHost
      return `${host}${this.imgList[this.next]}`
    },
    total () {
      return this.imgList.length
    }
  },
  mounted () {
    this.playLoop()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    stopPre (e) {
      e.stopPropagation()
    },
    playLoop () {
      const vm = this
      vm.interval = setInterval(() => {
        if (vm.show) {
          vm.show = false
          if (vm.cur < (vm.total - 2)) {
            vm.cur += 2
          } else if (vm.cur === vm.total - 2) {
            vm.cur = 0
          } else {
            vm.cur = 1
          }
        } else {
          vm.show = true
          if (vm.cur < (vm.total - 1)) {
            vm.next = vm.cur + 1
          } else if (vm.cur === (vm.total - 1)) {
            vm.next = 0
          } else {
            vm.next = 1
          }
        }
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
.section-bg{
  height: 100%;
}
.bg-container{
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
.click-content{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background: transparent;
}
</style>
