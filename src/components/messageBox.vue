<template>
  <div class="message-box">
    <transition
      appear
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutUp"
      mode="out-in"
    >
      <div class="full-width message-item flex-row flex-jst-start flex-ali-center" v-if="show" :key="1">
        <q-avatar size="40px">
          <img :src="curMessage.headimgurl">
        </q-avatar>
        <p class="text-white font-16">{{curMessage.content}}</p>
      </div>
      <div class="full-width message-item flex-row flex-jst-start flex-ali-center" v-else :key="2">
        <q-avatar size="40px">
          <img :src="nextMessage.headimgurl">
        </q-avatar>
        <p class="text-white font-14">{{nextMessage.content}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'messageBox',
  data () {
    return {
      cur: 0,
      curList: [],
      interval: null,
      show: 1,
      next: 1
    }
  },
  watch: {
  },
  computed: {
    ...mapState(['messageList']),
    total () {
      return this.messageList.length
    },
    curMessage () {
      return this.messageList[this.cur] || null
    },
    nextMessage () {
      return this.messageList[this.next] || null
    }
  },
  mounted () {
    console.log(this.messageList)
    this.playLoop()
  },
  methods: {
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
      }, 4000)
    }
  }
}
</script>

<style lang="scss" scoped>
.message-box{
  position: fixed;
  left: .1rem;
  bottom: .8rem;
}
.message-item{
  color: white;
  border-radius: .3rem;
  padding: .05rem;
  background: rgba(0,0,0,.6);
  p{
    margin-left: .1rem;
    margin-right: .2rem;
    margin-bottom: 0;
  }
}
</style>
