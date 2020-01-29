import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
