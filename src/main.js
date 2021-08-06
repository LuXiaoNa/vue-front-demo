import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import moment from 'moment';

Vue.config.productionTip = false;
import Element from 'element-ui';
Vue.use(Element);
import echarts from 'echarts';
import 'echarts-liquidfill';
Vue.prototype.$echarts = echarts;
//引入样式
// 组件全局注册
import '@/styles/common.css';
// import "@/styles/theme/theme-dark.css"
// import "@/styles/theme/change.css"

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