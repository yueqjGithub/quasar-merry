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
  </q-layout>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'MainLayout',
  data () {
    return {
    }
  },
  mounted () {
    this.getUrlKey()
  },
  methods: {
    ...mapMutations(['setImgList', 'setInfo']),
    async queryInfo (number) {
      const vm = this
      // https://qtapi.apiself.com/v1/api/public
      const url = '/api/formwork'
      try {
        const res = await vm.$axios.get(url, {
          params: { number: number }
        })
        vm.setImgList(res.data.data.checkImgs)
        vm.setInfo(res.data.data.configjson)
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
      const query = window.location.hash
      if (query.includes('?')) {
        const arr = query.split('?')[1].split('&')
        const param = {}
        arr.forEach(item => {
          const prr = item.split('=')
          param[prr[0]] = prr[1]
        })
        // id, number
        this.setModule(param)
      } else {
        const param = { id: '1', number: '1' }
        this.setModule(param)
      }
    }
  }
}
</script>
