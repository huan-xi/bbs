import Vue from 'vue'
import iView from 'iview';
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'font-awesome/css/font-awesome.css'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
import 'mavon-editor/dist/css/index.css'
import mavonEditor from 'mavon-editor'
Vue.use(iView)
Vue.use(mavonEditor)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
