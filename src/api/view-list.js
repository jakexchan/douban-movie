const domain = '/api'

const _viewList = [
  { id: '1', title: '正在上映', api: `${domain}/v2/movie/in_theaters` },
  { id: '2', title: '即将上映', api: `${domain}/v2/movie/coming_soon` },
  // { id: '3', title: '新片榜', api: `${domain}/v2/movie/new_movies` },
  // { id: '4', title: '口碑榜', api: `${domain}/v2/movie/weekly` },
  // { id: '5', title: '北美票房榜', api: `${domain}/v2/movie/us_box` },
  { id: '6', title: 'Top250', api: `${domain}/v2/movie/top250` }
]

export default {
  getViewList (cb) {
    setTimeout(() => cb(_viewList), 100)
  }
}
