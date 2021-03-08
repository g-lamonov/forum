import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './components/routes/Index'
Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: Index }
	],
	mode: 'history'
})

new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
	router
})