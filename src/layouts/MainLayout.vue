<template>
  <q-layout view="lHh Lpr lFf">
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
    <img :src="musicIcon" alt="" class="music-status" @click="changeMusicStatus">
    <audio src="https://qt.gwyqh.com/music/1468248597.mp3" class="music-co" autoplay loop ref="music"></audio>
  </q-layout>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import urls from '../api/urls'
export default {
  name: 'MainLayout',
  data () {
    return {
      musicStatus: 1
    }
  },
  computed: {
    ...mapState(['music']),
    musicIcon () {
      return this.musicStatus ? require('assets/module1/music_on.png') : require('assets/module1/music_off.png')
    }
  },
  mounted () {
    this.getUrlKey()
    if (this.$refs.music.paused) {
      this.$refs.music.play()
    }
  },
  methods: {
    ...mapMutations(['setImgList', 'setInfo', 'setUrlKey', 'setMusic']),
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
        vm.setMusic(res.data.data.misicactive.music_cover_mapimage)
      } catch (err) {
        console.log(err)
      }
    },
    async setModule (params) {
      const vm = this
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
        this.setModule(param)
      } else {
        const param = window.localStorage.getItem('urlKey') ? JSON.parse(window.localStorage.getItem('urlKey')) : null
        if (param) {
          vm.setUrlKey(param)
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
}
.music-status{
  position: fixed;
  right: .2rem;
  top: .2rem;
  widows: .35rem;
  z-index: 10;
  animation: wheel-rotate 2s linear infinite;
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
