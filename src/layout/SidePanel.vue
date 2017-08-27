<template>
  <div class="list">
    <div @click="toggleSidePanel">
      <i class="iconfont icon-category"></i>
    </div>
    <div class="view-list" v-if="show">
      <div
        class="view-list-header"
      >
        <div class="view-list-header-title">榜单</div>
        <div
          class="view-list-header-close"
          @click="toggleSidePanel"
        >
          <i class="iconfont icon-close"></i>
        </div>
      </div>
      <ul class="menu">
        <li
          class="menu-item"
          v-for="item in lists" 
          v-bind:key="item.id"
          @click="getMovieList(item.api)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <v-mask :show="show" @closeMask="toggleSidePanel"></v-mask>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vMask from '../components/Mask.vue'

export default {
  name: 'vSidePanel',
  data () {
    return {
      show: false
    }
  },
  components: {
    vMask
  },
  computed: mapGetters({
    lists: 'viewList'
  }),
  created () {
    this.$store.dispatch('getAllViewList')
    this.$store.dispatch('getAllMovies')
  },
  methods: {
    toggleSidePanel () {
      this.show = !this.show
    },
    getMovieList (api) {
      this.$store.dispatch('getAllMovies', api)
      this.toggleSidePanel()
      document.body.scrollTop = 0
    }
  }
}
</script>

<style scoped>
.list {
  position: absolute;
}

.list > i {
  font-size: .625rem;
}

.view-list {
  position: fixed;
  width: 6.25rem;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1024;
}

.view-list > .view-list-header {
  height: 1.25rem;
  padding: 0 .31rem;
  background-color: #337ab7;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
}

.view-list > .view-list-header > .view-list-header-title {
  flex: 1;
}

.view-list > .menu > .menu-item {
  height: 1.25rem;
  border-bottom: 1px #eee dotted;
  color: #999;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0 0 0 .625rem;
}
</style>
