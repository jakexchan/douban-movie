<template>
  <div>
    <v-header>
      <v-side-panel></v-side-panel>
    </v-header>
    <v-movie-list>
      <template v-for="item in lists">
        <v-movie-list-item
          :info="item"
          v-bind:key="item.id"
        ></v-movie-list-item>
      </template>
    </v-movie-list>
  </div>
</template>

<script>
import vHeader from '../layout/Header.vue'
import vSidePanel from '../layout/SidePanel.vue'
import vMovieList from '../components/MovieList.vue'
import vMovieListItem from '../components/MovieListItem.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'vHome',
  computed: mapGetters({
    lists: 'allMovies'
  }),
  components: {
    vHeader,
    vSidePanel,
    vMovieList,
    vMovieListItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
