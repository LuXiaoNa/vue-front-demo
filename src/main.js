import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import moment from 'moment';

Vue.config.productionTip = false;
import Element from 'element-ui';
Vue.use(Element);
import * as echarts from 'echarts';
import 'echarts-liquidfill';
Vue.prototype.$echarts = echarts;
import '@/components/ef/index.css'
import 'animate.css';
import '@/directives/dialogDrag.js'
//引入样式
import '@/styles/common.css';

//开发环境下使用mock.js
if (process.env.NODE_ENV == "development") {
    const { mockXHR } = require('../mock')
    mockXHR()
}
new Vue({
    el: '#app',
    router,
    store,
    moment,
    render: h => h(App),
}).$mount('#app')