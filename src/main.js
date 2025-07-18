import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 13
  },
  mutations: {
    incrementCount(state) {
      state.count++
    },
    decrementCount(state) {
      state.count--
    }
  },
  actions: {
    incrementCount() {
      console.log("incrementCount")
    },
    decrementCount() {
      console.log("decrementCount")
    }
  },
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
