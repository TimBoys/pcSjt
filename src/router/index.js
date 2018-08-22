import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import test from '@/components/test'

Router.prototype.openPage = function(link,query){
//	console.log(link)
//	console.log(query)
	this.push({
		path:link,
		query:_.assignIn({
			time:new Date().getTime()
		},query || {})
		
	})
}

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/test',
			name: 'test',
			component: test
		},
		{
			path: '/index',
			name: 'index',
		    component(resolve){
		       require(['@/views/index/index.vue'], resolve)
		    }
		}
		
	]
})