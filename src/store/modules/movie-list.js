import movieList from '../../api/movie-list'
import * as types from '../mutation-type'

const state = {
  allMovies: [],
  title: ''
}

const getters = {
  allMovies: state => state.allMovies
}

const actions = {
  getAllMovies ({ commit }, url) {
    movieList.getMovieList(
      url,
      (movies) => commit(types.GET_MOVIE_LIST, { movies })
    )
  }
}

const mutations = {
  [types.GET_MOVIE_LIST] (state, { movies }) {
    state.allMovies = movies.subjects
    state.title = movies.title
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
