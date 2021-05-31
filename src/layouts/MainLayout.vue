<template>
  <q-layout view="lHh Lpr lff">
    <q-page-container>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <!-- Wrapping only one DOM element, defined by QBtn -->
        <router-view />
      </transition>
    </q-page-container>
    <img :src="musicIcon" alt="" class="music-status" @click="changeMusicStatus" ref='turnAudio'>
    <audio :src="music" class="music-co" autoplay="autoplay" ref="music" controls="controls"></audio>
    <message-box v-if="messageList.length > 0"></message-box>
    <div class="fast-msg-out flex-row flex-jst-center flex-ali-center msg-ani" @click="openSheet">
      <img src="~assets/msg.png" alt="">
    </div>
  </q-layout>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import urls from '../api/urls'
import messageBox from 'components/messageBox'
import dayjs from 'dayjs'
export default {
  name: 'MainLayout',
  components: {
    messageBox
  },
  data () {
    return {
      musicStatus: 1,
      number: null
    }
  },
  computed: {
    ...mapState(['music', 'messageList', 'fastList', 'urlKey']),
    musicIcon () {
      return this.musicStatus ? require('assets/module1/music_on.png') : require('assets/module1/music_off.png')
    },
    dealFast () {
      return this.fastList.map((item, idx) => {
        return { id: idx, label: item }
      })
    },
    headimg () {
      return this.urlKey && decodeURIComponent(this.urlKey.headimgurl)
    },
    nickname () {
      return this.urlKey && decodeURIComponent(this.urlKey.nickname)
    }
  },
  mounted () {
    // const vm = this
    const target = dayjs('2021/06/15')
    const now = dayjs()
    if (now.isAfter(target)) {
      return false
    }
    this.getUrlKey()
    this.test()
  },
  methods: {
    ...mapMutations(['setImgList', 'setInfo', 'setUrlKey', 'setMusic', 'setMessage', 'setFastList']),
    test () {
      const vm = this
      if (this.$refs.music.paused) {
        console.log(1)
        vm.$refs.music.play()
        vm.audioInit = true
      }
    },
    openSheet () { // 打开快捷祝福
      const vm = this
      this.$q.bottomSheet({
        message: '快捷祝福',
        actions: [...vm.dealFast]
      }).onOk(action => {
        vm.commitInfo(action.label)
      })
    },
    async commitInfo (content) { // 提交祝福
      const vm = this
      const obj = {
        nickname: vm.nickname,
        headimgurl: vm.headimg,
        content: content,
        order_number: vm.number,
        formwork_id: vm.urlKey.id
      }
      vm.$q.loading.show()
      const res = await vm.$httpPost(urls.commitMessage, obj)
      await vm.queryMessage(vm.urlKey.id)
      vm.$q.loading.hide()
      alert(res.data.message)
    },
    changeMusicStatus () {
      if (this.musicStatus) {
        this.$refs.music.pause()
      } else {
        this.$refs.music.play()
      }
      this.musicStatus = !this.musicStatus
    },
    async queryInfo (number) {
      const vm = this
      // https://qtapi.apiself.com/v1/api/public
      try {
        const res = await vm.$httpGet(urls.queryIndex, { number: number })
        vm.setImgList(res.data.data.checkImgs)
        vm.setInfo(res.data.data.configjson)
        vm.setMusic(res.data.data.misicactive.music_path_file)
      } catch (err) {
        console.log(err)
      }
    },
    async queryMessage (id) {
      const vm = this
      try {
        const res = await vm.$httpGet(urls.queryMessageList, { formwork_id: id, order_number: vm.urlKey.number })
        vm.setMessage(res.data.data)
      } catch (err) {
        console.log(err)
      }
    },
    async queryFastMessage (id) {
      const vm = this
      try {
        const res = await vm.$httpGet(urls.queryFastMessage, { id: id })
        vm.setFastList(res.data.data)
      } catch (err) {
        console.log(err)
      }
    },
    async setModule (params) {
      const vm = this
      await vm.queryMessage(params.id)
      await vm.queryFastMessage(params.id)
      await vm.queryInfo(params.number)
      if (this.$route.path === '/') {
        switch (params.id) {
          case '1':
            vm.$router.push({ name: 'module1', params: { ...params } })
            break
          case '2':
            vm.$router.push({ name: 'module2', params: { ...params } })
            break
        }
      }
    },
    getUrlKey () {
      const vm = this
      // 头像与nickname取出时需要decodeURIComponent二次转码
      const query = decodeURIComponent(window.location.search)
      if (query) {
        const arr = query.split('?')[1].split('&')
        const param = {}
        arr.forEach(item => {
          const prr = item.split('=')
          param[prr[0]] = prr[1]
        })
        // id, number
        window.localStorage.setItem('urlKey', JSON.stringify(param))
        vm.setUrlKey(param)
        vm.number = param.number || undefined
        this.setModule(param)
      } else {
        const param = window.localStorage.getItem('urlKey') ? JSON.parse(window.localStorage.getItem('urlKey')) : null
        if (param) {
          vm.setUrlKey(param)
          vm.number = param.number || undefined
          this.setModule(param)
        } else {
          alert('参数不合法')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.music-co{
  position: absolute;
  left: -100%;
  visibility: hidden;
  display: none;
}
.music-status{
  position: fixed;
  right: .2rem;
  top: .2rem;
  width: .35rem;
  z-index: 10;
  animation: wheel-rotate 2s linear infinite;
}
.fast-msg-out{
  background: linear-gradient(90deg, #de5766, #DE5766);
  width: .4rem;
  height: .4rem;
  border-radius: 50%;
  position: fixed;
  right: .1rem;
  bottom: .8rem;
  z-index: 9;
  img{
    width: 50%;
  }
}
@keyframes wheel-rotate {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
</style>
