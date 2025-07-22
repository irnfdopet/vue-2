import Vue from 'vue'
import Vuex from 'vuex'
import routes from './routes'
import { VetstoriaComponents } from '@vetstoria/ui-components';

Vue.use(Vuex)
Vue.use(VetstoriaComponents);

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

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  store,
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue').default
        : require('./pages/404.vue').default
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
