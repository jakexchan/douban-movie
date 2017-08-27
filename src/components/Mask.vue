<template>
  <div class="mask" v-if="show" @click="close"></div>
</template>

<script>
export default {
  name: 'vMask',
  props: {
    show: {
      type: Boolean
    }
  },
  methods: {
    close () {
      this.$emit('closeMask')
    }
  }
}
</script>

<style scoped>
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, .5);
}
</style>
