<template>
  <div class="message-box">
    <transition
      appear
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutUp"
      mode="out-in"
    >
      <div class="full-width message-item flex-row flex-jst-start flex-ali-center" v-if="show" :key="1">
        <q-avatar>
          <img :src="curMessage.headimgurl">
        </q-avatar>
        <p class="font-14 text-white">{{curMessage.content}}</p>
      </div>
      <div class="full-width message-item flex-row flex-jst-start flex-ali-center" v-else :key="2">
        <q-avatar>
          <img :src="nextMessage.headimgurl">
        </q-avatar>
        <p class="font-14 text-white">{{nextMessage.content}}</p>
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
      return this.messageList[this.cur] && this.messageList[this.cur].slice(0, 15)
    },
    nextMessage () {
      return this.messageList[this.next] && this.messageList[this.next].slice(0, 15)
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
          if (vm.cur < (vm.total - 1)) {
            vm.cur += 2
          } else {
            vm.cur = 0
          }
        } else {
          vm.show = true
          if (vm.next < (vm.total - 2)) {
            vm.next += 2
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
  height: .3rem;
  border-radius: .25rem;
  padding: .1rem;
  background: rgba(0,0,0,.6);
  font-size: .14rem;
}
</style>
