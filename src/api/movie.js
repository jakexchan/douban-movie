import axios from 'axios'

const api = '/api/v2/movie/subject'

export default {
  getMovie (id, cbSuccess) {
    axios.get(`${api}/${id}`)
         .then(function (response) {
           cbSuccess(response.data)
         })
  }
}
