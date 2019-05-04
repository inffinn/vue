// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    columns: ['id', 'name', 'price', 'count'],
    sortData: {col: 'id', dir: 0},
    products: [
      {id: 1, name: 'tomato', price: 100, count: 1},
      {id: 2, name: 'apple', price: 200, count: 2},
      {id: 3, name: 'cherry', price: 300, count: 3}
    ],
    services: [
      {id: 1, name: 'cleaning', price: 100, count: 1},
      {id: 2, name: 'washing', price: 200, count: 2},
      {id: 3, name: 'testing', price: 300, count: 3}
    ]
  },
  mutations: {

    setSortData: function (state, col) {
      if (state.sortData.col == col) {
        if (state.sortData.dir == 0) {
          state.sortData.dir = 1;
        } else {
          state.sortData.dir = 0;
        }
      } else {
        state.sortData.col = col;
        state.sortData.dir = 0;
      }
    },
    sort: function (state, col) {
      state.items = state.products.sort((a, b) => {
        let result = 0
        if (a[col] > b[col]) {
          state.sortData.dir ? result = 1 : result = -1
        }
        if (a[col] < b[col]) {
          state.sortData.dir ? result = -1 : result = 1
        }
        // a должно быть равным b
        return result
      })
    },
    inc: function (state, r) {
      {
        r.count++
      }
    },
    dec: function (state, r) {
      {
        r.count--
      }
    }
  },
  actions: {
    inc: function ({commit}, r) {
      commit('inc', r)
    },
    dec: function ({commit}, r) {
      commit('dec', r)
    },
    sort: function ({commit}, col) {
      commit('setSortData', col)
      commit('sort', col)
    }
  },
  getters: {
    total: function (state) {
      return state.products.reduce((s, i) => s + i.price * i.count, 0)
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
