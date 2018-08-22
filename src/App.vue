<template>
  <div id="app">
      <transition>
      	<!--<keep-alive>-->
        <router-view></router-view>
        <!--</keep-alive>-->
      </transition>

      
  </div>
</template>

<script>
import Rem from '@/assets/js/rem';
import VueDB from './util/vue-db/vue-db-long';
new Rem();
var DB = new VueDB();

export default {
  name: 'App',
  data(){
  	return {
  		nowUrl:"/",
  	}
  },
	mounted:function(){
//		window.location.href = "wxindex.html";
		
	},

	methods:{

	}
}
</script>

<style lang="scss" type="text/scss">
	@import "./assets/scss/public";
 /*@import '~@/assets/font/iconfont.css'*/


</style>
