<template>
  <div class="back" @click="goBack">
    <i class="iconfont icon-back"></i>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'vGoBack',
  methods: {
    goBack () {
      router.go(-1)
    }
  }
}
</script>

<style scoped>
.back {
  position: absolute;
}
</style>
