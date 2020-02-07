import Vue from 'vue'
import App from './App.vue'
// import '@/style/reset.scss';
Vue.config.productionTip = false
//获取屏幕宽度(viewport)
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//获取html的dom
let htmlDom = document.getElementsByTagName('html')[0];
//设置font-size
htmlDom.style.fontSize= htmlWidth / 10 + 'px';
new Vue({
  render: h => h(App),
}).$mount('#app')
