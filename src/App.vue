<template>
  <div id="app">
  	<div @click.capture="initNav" >
  		<nav class="navbar navbarSjt navbar-default navbar-fixed-top" role="navigation">
	<div class="container-fluid"> 
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target="#example-navbar-collapse">
			<!--<span class="sr-only">切换导航</span>-->
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>

		<a class="navbar-brand nsjt-brand" href="#"><x-img v-lazy="sjtLogo"  class="sjtLogo_img"></x-img>·素匠泰茶</a>
	</div>
	<div class="collapse navbar-collapse divCollapse" id="example-navbar-collapse" ref="divCollapse">
		<ul class="nav navbar-nav navbar-right nsjt-right wbStyle" v-if="iswbStyle">
			<li><a href="#/pcHome" :class="{'actived' : isActive('pcHome')}">首页</a></li>
			<li><a href="./wxindex.html#/home" :class="{'actived' : isActive('home')}">当季精选</a></li>
			<li><a href="./wxindex.html#/classification" :class="{'actived' : isActive('classification')}">所有商品</a></li>
			<li><a href="./wxindex.html#/mine" :class="{'actived' : isActive('mine')}">个人中心</a></li>
			<li><a href="#/applyJoin" :class="{'actived' : isActive('applyJoin')}">申请加盟</a></li>
		</ul>
		
		<ul class="nav navbar-nav navbar-right nsjt-right" v-else>
			<li><a href="#/pcHome" :class="{'actived' : isActive('pcHome')}">首页</a></li>
			<li><a href="./wxindex.html#/home" :class="{'actived' : isActive('home')}">当季精选</a></li>
			<li><a href="./wxindex.html#/classification" :class="{'actived' : isActive('classification')}">所有商品</a></li>
			<li><a href="./wxindex.html#/mine" :class="{'actived' : isActive('mine')}">个人中心</a></li>
			<li><a href="#/applyJoin" :class="{'actived' : isActive('applyJoin')}">申请加盟</a></li>
		</ul>
		
	</div>
	
		<div class="navlocalLang">
			<span class="localLang navbar-right" @click="changeLang(localLang)">{{showLan}}</span>
		</div>	
	
	
	</div>
</nav>
  	
  	
      <transition>
      	<!--<keep-alive>-->
        <router-view></router-view>
        <!--</keep-alive>-->
      </transition>

      </div>
  </div>
</template>

<script>
import Rem from '@/assets/js/rem';
import VueDB from './util/vue-db/vue-db-long';
import { XImg } from 'vux';
new Rem();
var DB = new VueDB();

export default {
  name: 'App',
  data(){
  	return {
  		nowUrl:"/",
  		sjtLogo:"../../pcStatic/images/mine/sjtLogo.jpg",
  		iswbStyle:false,
  		localLang: "zh",
  	}
  },
  watch:{
  	"$route"(to,from){
  			this.nowUrl = to.fullPath;
//			console.dir(this.$refs.divCollapse.classList)
  			if (this.$refs.divCollapse.classList[this.$refs.divCollapse.classList.length -1] == "in") {
					$(".divCollapse").removeClass("in").attr("aria-expanded",false);
					$('#collapse').addClass("collapsed").attr("aria-expanded",false);
					
  			}
  	}
  },
	mounted:function(){
			//初始化获取本地语言
			this.initLocalLang();
			
			this.initResize();		
	},
	computed:{
			showLan:function(){
				return this.localLang.toUpperCase();
			}
		},
	methods:{
					//初始化获取本地语言
			initLocalLang() {
				if(!DB.getItem("localLang").toString()) {
					this.localLang = "zh";
					DB.setItem("localLang","en");
				} else {
					this.localLang = DB.getItem("localLang").toString() == "en" ? "zh" : "en";
				}
			},
			//初始化导航
			initNav(e){
//				console.log(e.srcElement.className)
				if (e.srcElement.className != "icon-bar") {
						$(".divCollapse").removeClass("in").attr("aria-expanded",false);
						$('#collapse').addClass("collapsed").attr("aria-expanded",false);							
				}
			},		
			//切换语言
			changeLang(item) {
				console.log(item);
				if(item == "zh") {
					this.localLang = "en";
					DB.setItem("localLang", "zh");
				} else {
					this.localLang = "zh";
					DB.setItem("localLang", "en");
				}
				window.location.reload();
			},	
		
			//重置浏览器大小
			initResize(){
				var _this = this;
			 _this.changeNavColor();
				$(window).resize(function () {          //当浏览器大小变化时
//				    console.log($(window).width());          //浏览器时下窗口可视区域高度
				    _this.changeNavColor();

				});
				
			},
			changeNavColor(){
					if($(window).width() < 740){
	    				this.iswbStyle = true;
	   		 }else{
				    	this.iswbStyle = false;
				  }			
			},
			isActive(route){
				 return this.nowUrl.indexOf(route) != -1;
			}
	},
	
	components: {
    XImg
  }
}
</script>

<style lang="scss" type="text/scss">
	@import "./assets/scss/public";
	@import "./assets/scss/util";
 /*@import '~@/assets/font/iconfont.css'*/
	.navbarSjt{
			font-size:0.38rem;
			height: 1rem;
			min-height:0;
			background-color: #fff;
			padding-right:0.5rem;
		.container-fluid,.navbar-header,.example-navbar-collapse,.navbar-toggle,.nsjt-brand,.nsjt-right,.localLang{
			height: 100%;
		}
		/*左侧图标logo*/
		.nsjt-brand{
			font-size:0.3rem;
			font-weight:700;
			color:#333;
			display:flex;
			align-items:center;
		.sjtLogo_img{
			width:0.8rem;
			height:0.6rem;
      background-color: #fff;
      display: inline-block;
			}
		}
		/*右侧下拉菜单移动端按钮*/
		.navbar-header{
		.navbar-toggle{
			height: 0.5rem;
			margin-top:0.24rem;
			padding: 2px;
			padding-right:0.4rem;
			border: 0;
			&:hover{
				background-color: #fff;
			}
			.icon-bar{
				background-color: $originColor;
				
			}
		}
		.navlocalLang{
			position: relative;
			float: right;
		}
		}
		/*菜单栏*/
		.navbar-collapse{
			.wbStyle{
				background-color: rgba(0,0,0,0.6)!important;
				li a{
					color: #fff!important;
				}
			}
			.nsjt-right{
				float: right;
				min-height: 1rem;
				min-width: 2rem;
				overflow: visible;
				margin-top: 0;
				margin-right: 0rem;
				padding-right: 0.2rem;
				text-align: center;
				.actived{
					color:$originColor!important;
				}
				li a{
					&:hover{
						color:$originColor;
						opacity: 0.4;
					}
					font-size: 0.3rem;
					line-height: 0.65rem;
					height: 1rem;
				}
			}
		}
		
		.navlocalLang{
		.localLang{
			position: fixed;
			top: 0;
			right: 0;
			margin-right: 0.2rem;
			height: 1rem;
			padding:0.26rem 0 0.2rem 0;
			font-size: 0.34rem;
			width: 0.5rem;
			color:#333;
		}
		}
		
		
		}

</style>
