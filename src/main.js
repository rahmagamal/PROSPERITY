import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



/**
 * import main scss
 */
import '@/assets/sass/main.scss'

/***** map */
import x5GMaps from 'x5-gmaps'
// Option 1: Just your key
Vue.use(x5GMaps, 'AIzaSyCpPI7t7nK9O1F3DJc2M9Dq7H-4Ko-neBg')
// Option 2: With libraries
Vue.use(x5GMaps, { key: 'AIzaSyCpPI7t7nK9O1F3DJc2M9Dq7H-4Ko-neBg', libraries: ['places'] })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
