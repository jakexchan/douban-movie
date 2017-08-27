import movie from '../../api/movie'
import * as types from '../mutation-type'

const state = {
  movie: {}
}

const getters = {
  movie: state => state.movie
}

const actions = {
  getMovieInfo ({ commit }, id) {
    movie.getMovie(
      id,
      (movie) => commit(types.GET_MOVIE, { movie })
    )
  }
}

const mutations = {
  [types.GET_MOVIE] (state, { movie }) {
    state.movie = movie
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
