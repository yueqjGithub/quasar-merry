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
    </transition>
  </q-page>
</template>

<script>
import myLoading from '../../components/progress.vue'
import { mapState } from 'vuex'
import section1 from './section1'
import section2 from './section2'
export default {
  components: {
    myLoading,
    section1,
    section2
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
        vm.step < 9 && vm.step++
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
