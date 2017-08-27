import Vue from 'vue'
import Vuex from 'vuex'
import viewList from './modules/view-list'
import movieList from './modules/movie-list'
import movie from './modules/movie'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    viewList,
    movieList,
    movie
  },
  strict: process.env.NODE_ENV !== 'production'
})
