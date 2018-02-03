import Vue from 'vue'
import App from './App.vue'
import router from './components/router.vue'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
