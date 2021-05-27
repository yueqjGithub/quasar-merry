<template>
  <q-page v-touch-swipe.mouse="handlePan">
    <my-loading :img-list="imgList" @loaded="loaded" v-if="!loadend"></my-loading>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
      v-if="loadend"
    >
      <section1 v-if="step === 0"></section1>
      <section2 v-if="step === 1" :img-list="imgList" :info="info"></section2>
      <section3 v-if="step === 2" :img-list="imgList"></section3>
      <section4 v-if="step === 3" :img-list="imgList"></section4>
      <section5 v-if="step === 4" :img-list="imgList"></section5>
      <section6 v-if="step === 5" :img-list="imgList"></section6>
      <section7 v-if="step === 6" :img-list="imgList"></section7>
      <section8 v-if="step === 7" :img-list="imgList"></section8>
      <section9 v-else-if="step === 8"></section9>
    </transition>
  </q-page>
</template>

<script>
import myLoading from '../../components/progress.vue'
import { mapState } from 'vuex'
import section1 from './section1'
import section2 from './section2'
import section3 from './section3'
import section4 from './section4'
import section5 from './section5'
import section6 from './section6'
import section7 from './section7'
import section8 from './section8'
import section9 from './section9'
export default {
  components: {
    myLoading,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9
  },
  data () {
    return {
      step: 0,
      loadend: false
    }
  },
  computed: {
    ...mapState(['imgList', 'info'])
  },
  methods: {
    loaded () { // 图片加载结束
      this.loadend = true
    },
    handlePan ({ evt, ...info }) { // 上下监听
      const vm = this
      if (info.direction === 'up' && info.distance.y > 2) {
        vm.step < 8 && vm.step++
      }
      if (info.direction === 'down' && info.distance.y > 2) {
        vm.step > 0 && vm.step--
      }
      console.log(vm.step)
    }
  }
}
</script>

<style lang="scss">
.page-container{
  background: url("~assets/module2/bg.jpg");
  background-size: 100% 100%;
}
</style>
<style lang="scss" scoped>
.my-square{
  width: 100px;
  height: 100px;
  background: yellow;
}
</style>
