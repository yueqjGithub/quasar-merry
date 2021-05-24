<template>
  <div class="full-page bg-white flex-row flex-jst-center flex-ali-center q-pa-md">
    <q-linear-progress size="15px" stripe rounded :value="progress" color="red">
    </q-linear-progress>
  </div>
</template>

<script>
import urls from '../api/urls.js'
export default {
  name: 'myProgress',
  props: {
    imgList: {
      default: function () {
        return []
      },
      type: Array
    }
  },
  data () {
    return {
      progress: 0
    }
  },
  computed: {
  },
  mounted () {
    if (this.imgList) {
      this.loadImg(this.imgList)
    }
  },
  watch: {
    imgList: {
      handler: function (val) {
        this.loadImg(val)
      }
    },
    progress: {
      handler: function (val) {
        console.log(val)
        if (val >= 1) {
          this.$emit('loaded')
        }
      }
    }
  },
  methods: {
    loadImg (list) {
      const vm = this
      const len = list.length
      const step = 1 / len
      list.forEach(item => {
        const img = new Image()
        img.onload = function () {
          vm.progress += step
          img.remove()
        }
        img.src = `${urls.imgHost}${item[0]}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.full-page{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
