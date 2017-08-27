import axios from 'axios'

export default {
  getMovieList (url, cbSuccess) {
    axios.get(url || '/api/v2/movie/in_theaters')
         .then(function (response) {
           cbSuccess(response.data)
         })
  }
}
