import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'


//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faHome, faSearch, faList, faUser, faPause, faStop, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPlay,faHome,faSearch,faList,faUser,faPause, faStop,faPlus,faCheck)
Vue.component('fa', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

