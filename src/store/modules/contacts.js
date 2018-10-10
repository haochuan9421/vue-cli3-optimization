import { getContactsList } from '@/api'
export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    updateList (state, data) {
      state.list = data
    }
  },
  actions: {
    getList ({ commit }) {
      return getContactsList().then((res) => {
        commit('updateList', res.data)
      })
    }
  },
  getters: {

  }
}
