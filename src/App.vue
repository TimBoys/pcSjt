<template>
  <div id="app">
  		<nav class="navbar navbarSjt navbar-default navbar-fixed-top" role="navigation">
	<div class="container-fluid"> 
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target="#example-navbar-collapse">
			<span class="sr-only">切换导航</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="#">素匠泰茶</a>
	</div>
	<div class="collapse navbar-collapse" id="example-navbar-collapse">
		<ul class="nav navbar-nav navbar-right">
			<li class="active"><a href="#">1</a></li>
			<li><a href="#">2</a></li>
		</ul>
	</div>
	</div>
</nav>
  	
  	
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
	.navbarSjt{
		height: 1rem;
	}

</style>
