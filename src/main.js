import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import AppResultScreen from './components/ResultScreen.vue'
import AppStartScreen from './components/StartScreen.vue'
import AppQuestion from './components/Question.vue'
import AppMessage from './components/Message.vue'

Vue.use(BootstrapVue);
Vue.component('AppMessage', AppMessage)
Vue.component('AppQuestion', AppQuestion)
Vue.component('AppStartScreen', AppStartScreen)
Vue.component('AppResultScreen', AppResultScreen)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
new Vue({
  el: '#app',
  render: h => h(App)
})
