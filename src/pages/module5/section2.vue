<template>
  <div class="full-page page-container q-pa-lg flex-col flex-jst-center flex-jst-center">
    <img :src="imgSrc" alt="" class="full-width">
    <div class="flex-1 flex-row flex-jst-end flex-ali-end full-width">
      <img src="~assets/module5/sec2flw.png" alt="" class="width-30">
    </div>
  </div>
</template>

<script>
export default {
  name: 'section2',
  props: ['imgList', 'info'],
  computed: {
    imgSrc () {
      return this.imgList[0]
    }
  }
}
</script>
