<template>
  <q-page v-touch-swipe.mouse="handlePan">
    <my-loading :img-list="imgList" @loaded="loaded" v-if="!loadend"></my-loading>
    <transition
      appear
      enter-active-class="cus-ani-flipInX ani-duration-15s"
      leave-active-class="cus-ani-flipOutX ani-duration-1s"
      mode="out-in"
      v-if="loadend"
    >
      <section1 v-if="step === 0" :img-list="imgList" :info="info"></section1>
      <section2 v-else-if="step === 1" :img-list="imgList" :info="info"></section2>
      <section3 v-else-if="step === 2" :img-list="imgList"></section3>
      <section4 v-else-if="step === 3" :img-list="imgList"></section4>
      <section5 v-else-if="step === 4" :img-list="imgList"></section5>
      <section6 v-else-if="step === 5" :img-list="imgList"></section6>
      <section8 v-else-if="step === 6" :img-list="imgList"></section8>
      <section9 v-else-if="step === 7"></section9>
    </transition>
  </q-page>
</template>

<script>
import myLoading from '../../components/progress.vue'
import { mapState } from 'vuex'
import section1 from 'pages/module7/section1'
import section2 from 'pages/module7/section2'
import section3 from 'pages/module7/section3'
import section4 from 'pages/module7/section4'
import section5 from 'pages/module7/section5'
import section6 from 'pages/module7/section6'
import section8 from 'pages/module7/section8'
import section9 from 'pages/module7/section9'
export default {
  components: {
    myLoading,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section8,
    section9
  },
  data () {
    return {
      step: 0,
      loadend: false,
      tout: null,
      showleaf: true
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
      vm.showleaf = false
      if (info.direction === 'up' && info.distance.y > 2) {
        vm.step < 7 && vm.step++
      }
      if (info.direction === 'down' && info.distance.y > 2) {
        vm.step > 0 && vm.step--
      }
      vm.tout = setTimeout(() => {
        vm.showleaf = true
      }, 500)
    }
  }
}
</script>
<style lang="scss">
.page-container{
  background: url("~assets/module7/m7bg.jpg");
  background-size: 100% 100%;
  .m7-text-primary{
    color: #d69241;
  }
}
</style>
<style lang="scss" scoped>
.cus-ani-flipInX{
  animation-name: cusFlipInX;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
.cus-ani-flipOutX{
  animation-name: cusFlipOutX;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
@keyframes cusFlipOutX {
  from {
    opacity: 1;
    transform: rotateX(0deg);
  }
  to {
    opacity: 0;
    transform: rotateX(-90deg);
  }
}
@keyframes cusFlipInX {
  from {
    opacity: 0;
    transform: rotateX(90deg);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg);
  }
}
</style>
