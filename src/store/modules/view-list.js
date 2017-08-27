import viewList from '../../api/view-list'
import * as types from '../mutation-type'

const state = {
  viewList: []
}

const getters = {
  viewList: state => state.viewList
}

const actions = {
  getAllViewList ({ commit }) {
    viewList.getViewList((viewList) => {
      commit(types.GET_VIEW_LIST, { viewList })
    })
  }
}

const mutations = {
  [types.GET_VIEW_LIST] (state, { viewList }) {
    state.viewList = viewList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
