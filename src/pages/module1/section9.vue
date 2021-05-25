import { mapState } from 'vuex';
<template>
  <div class="full-page relative-position page-container q-pa-md flex-col flex-jst-btw flex-ali-center">
    <div></div>
    <div class="content-box full-width">
      <q-input
      standout
      borderless
      v-model="content"
      filled
      type="textarea"
      placeholder='给新人几句祝福吧~'
      />
      <q-btn size='lg' unelevated style="background:#f99d7d;color:white;" label="提交" class="full-width ma-row-md" @click="commitInfo"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import urls from '../../api/urls'
export default {
  name: 'section9',
  data () {
    return {
      content: ''
    }
  },
  computed: {
    ...mapState(['urlKey']),
    headimg () {
      return this.urlKey && decodeURIComponent(this.urlKey.headimgurl)
    },
    nickname () {
      return this.urlKey && decodeURIComponent(this.urlKey.nickname)
    }
  },
  methods: {
    async commitInfo () {
      const vm = this
      const obj = {
        nickname: vm.nickname,
        headimgurl: vm.headimg,
        content: vm.content
      }
      if (vm.content === '') {
        alert('请写下您的祝福语')
        return false
      }
      vm.$q.loading.show()
      const res = await vm.$httpPost(urls.commitMessage, obj)
      vm.$q.loading.hide()
      alert(res.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  background: #fefaee;
  padding-bottom: .5rem;
}
</style>
