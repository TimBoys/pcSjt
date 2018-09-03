<template>
	<div class="initCont">

		<Carousel v-model="value1" loop class="carouselCont">
			<CarouselItem v-for="(imgItem,index) in banner" :key="index">
				<div class="demo-carousel">
					<x-img class="carouselImg" v-lazy="imgItem.figureAddress" /></x-img>
				</div>
			</CarouselItem>
		</Carousel>

		<!--热门三种按钮-->
		<div class="topFire_cont">
			<!--切换地址-->
			<div class="localAddr">
				<div class="addrCont" @click="selectAddr">
					<x-img v-lazy="localAddr.localPos" class="localPos"></x-img>
					<div>{{localAddr.localName}}</div>
					<div class="triangle_border_down">
						<span></span>
					</div>
				</div>
			</div>
			<!--店铺选择-->
			<div class="storeDetail" v-if="isShowAs2">
				<div class="sd-item" v-for="(sdItem,index) in menusStore" @click="selectMenu2(sdItem)"><span :class="{'colorYellow':localAddr.localName == sdItem.storeName}">{{sdItem.storeName}}</span></div>
			</div>
		</div>


<!--内容模块-->
		<div class="homeContainer">
			<div class="ct-title">
				<div class="ctt-oneTitle">素匠泰茶</div>
				<div class="ctt-twoTitle"><div class="line"></div></div>
				<div class="ctt-threeTitle">用心带来全新饮品体验</div>
				<div class="ctt-fourTitle">素匠泰茶Prime's Thai tea</div>
			</div>
<!--关于我们-->
			<div class="ct-aboutAs">
				<div class="ctt-one">
					<div class="ctto-about">关于我们</div>
					<div class="ctto-aboutCont">
						<div class="p">素匠泰茶有别于市面上的传统奶茶，从名字上大家可以知道，我们是主营泰式奶茶的，在市面上港式、台式奶茶层出不穷的时代，我们想让大家喝到不一样的饮品，感受到生活中与众不同的小确幸。</div>
						<div class="p">“Prime”我们取它的最初的、最好的意思，旨在为大家传递我们想把最初的、最好的产品带给大家的理念，让大家能喝到我们用匠心打造的饮品。</div>	
						<div class="p">为了塑造与众不同的品牌形象，我们以突破传统台式奶茶口味为宗旨，融入泰式制作工艺，创新奶茶发展理念，现在在行业中已经成为了一个标杆式的品牌，我们会不忘初心，让素匠泰茶成为一个被更多人喜欢的品牌。</div>							
					</div>
					
				</div>
				<div class="ctt-two">
					<div v-for="(abSrcItem,index) in aboutImg" :key="index" class="abSrcCont">
						<x-img v-lazy="abSrcItem" class="abSrcContImg"></x-img>
					</div>
				</div>
			</div>
<!--当季精选-->
			<div class="ct-detail">
				<div class="detailFire_cont">
					<div v-for="(detailFS,index) in detailFireSrc" class="df_cell" v-if="index == 0">
						<div class="df_header">
							<!--<x-img  v-lazy="detailFS.classLogo"  class="dfh_img"></x-img>
							<p class="dfh_title">{{detailFS.className}} ——</p>-->
							<p class="dfh_title2">{{detailFS.className}}</p>
						</div>
						<div class="df_body">
							<div v-for="(dfb_body) in detailFS.goods" class="dfb_item" >
								<x-img v-lazy="dfb_body.goodsPictureRound" class="dfb_img"></x-img>
								<p class="dfb_name">{{dfb_body.goodsName}}</p>
								<!--<p class="dfb_price">${{dfb_body.goodsPrice}}</p>-->
							</div>
						</div>
					</div>
				</div>
			</div>
<!--轮播2-->
		<div class="carouselCont2">
				<div class="ctt-oneTitle">素匠泰茶</div>
				<div class="ctt-twoTitle"><div class="line"></div></div>
				<div class="ctt-threeTitle">每一杯好差，从用料开始</div>	
				<!--模态框2-->
				<div class="carouseScroll">
					<div class="csModel">
						<div class="cs-pre" @click="csNext"><</div>
						<div class="allCont" ref="allCsCont">
						<div class="csCont" >
							<div class="cscItem" v-for="(cscOneItem,index) in cscItem" :key="index">
								<x-img v-lazy="cscOneItem" class="cscItemImg"></x-img>
							</div>		
						</div>
						</div>
						<div class="cs-next" @click="csPre">></div>
					</div>
					
					
				</div>
				<!--模态框2-->
				
		</div>

<!--加盟-->
		<div class="joinUsCont">
				<div class="ctt-threeTitle">加盟支持</div>	
				<div class="ctt-two">
					<div v-for="(abSrcItem,index) in joinUsCont" :key="index" class="abSrcCont">
						<div>
							<x-img v-lazy="abSrcItem.src" class="abSrcContImg"></x-img>
							<div class="dectOne">{{abSrcItem.dectOne}}</div>
							<div class="dectTwo">{{abSrcItem.dectTwo}}</div>
						</div>
					</div>
				</div>				
		</div>
<!--联系我们-->
		<div class="findUs">
				<div class="findUsCont">
					<x-img v-lazy="aboutImg[2]" class="abSrcContImg"></x-img>
					<div class="fuTrueCont">
						<div class="ftc-left">
							<div class="ftcl-title">联系我们</div>
							<div class="ftcl-cont">
								<div class="ftclc-item" v-for="(ftclcItem,index) in ftclcCont">
									<x-img v-lazy="ftclcItem.src" class="ftcrc-Img"></x-img>
									<div>{{ftclcItem.textCont}}</div>
								</div>
							</div>
						</div>
						<div class="ftc-right">
							<x-img v-lazy="ecode" class="ftcrImg"></x-img>
						</div>
						
					</div>
				</div>		
		</div>



		</div>

	</div>
</template>

<script>
	import VueDB from '../../util/vue-db/vue-db-long'
	import { XImg, Flexbox, FlexboxItem, Actionsheet } from 'vux';
	import _ from 'lodash';	
	var DB = new VueDB();
	var sivTime = null;
	var crouselScrWidth = null;
	var canScrollWidth = null;
	var timeoutflag = null;
	export default {
		name: "home",
		data() {
			return {
				banner: [],
				value1: 0,
				isShowAs2: false,
				menusAddr: {},
				menusStore: [], //店铺数据
				localAddr: {
					localPos: "../../../pcStatic/images/home/local_position2.png",
					localName: ""
				},
				aboutCont:"素匠泰茶有别于市面上的传统奶茶，从名字上大家可以知道，我们是主营泰式奶茶的，在市面上港式、台式奶茶层出不穷的时代，我们想让大家喝到不一样的饮品，感受到生活中与众不同的小确幸。",
				//关于我们
				aboutImg:[
					"../../../pcStatic/images/home/testImg5.jpg",
					"../../../pcStatic/images/home/testImg6.jpg",
					"../../../pcStatic/images/home/testImg7.jpg",
					"../../../pcStatic/images/home/testImg8.jpg",
				],
				//加入我们
				joinUsCont:[{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:"经营模式支持",
					dectTwo:"完备的管理体系督导现场指导"
				},{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:"品牌形象支持",
					dectTwo:"总部一体化免费提供店面的形象设计图，并提供统一的店员服装"
					},
					{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:"店铺选址支持",
					dectTwo:"总部辅助加盟商现场选址，专业建议，合理选择"
					},
					{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:"店铺装修支持",
					dectTwo:"加盟总部将根据加盟商的实际要求提供不同的装修风格，全面辅助加盟商合理装修做到省钱省力"
					},
					{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:"总部培训支持",
					dectTwo:"加盟总部在店面开业前，会对所有的店员进行专业的技术和管理培训"
					},
					{
					src:"../../../pcStatic/images/home/joinUs.png",
					dectOne:"开业营销支持",
					dectTwo:"加盟总部根据当地商圈和加盟商的实际情况进行合理的经营策划，全面辅助加盟商创业"
					}
					
				],				

				//轮播2
				cscItem:["../../../pcStatic/images/home/testImg1.jpg","../../../pcStatic/images/home/testImg2.jpg","../../../pcStatic/images/home/testImg3.jpg","../../../pcStatic/images/home/testImg4.jpg","../../../pcStatic/images/home/testImg5.jpg","../../../pcStatic/images/home/testImg6.jpg","../../../pcStatic/images/home/testImg7.jpg","../../../pcStatic/images/home/testImg8.jpg","../../../pcStatic/images/home/testImg2.jpg","../../../pcStatic/images/home/testImg1.jpg",],
				crouselScrWidth:null, //每次滚动距离
				//底部联系我们三个
				ftclcCont:[{
					src:"../../pcStatic/images/mine/addr.png",
					textCont:"175-13988 Maycrest Way RichMond"
				},{
					src:"../../pcStatic/images/mine/tele.png",
					textCont:"604-604-6044"
				},{
					src:"../../pcStatic/images/mine/eMail.png",
					textCont:"customerservice@123.com"
				}],
				//二维码
				ecode:"../../pcStatic/images/mine/ecode.png",
				//首页最热的三类的图标
				detailFireSrc: [],
			}
		},
		mounted: function() {

			//初始化轮播图2
			canScrollWidth = this.$refs.allCsCont.scrollWidth - this.$refs.allCsCont.clientWidth; //可以滚动的宽度
			crouselScrWidth = this.$refs.allCsCont.scrollWidth / 10;
			this.allCsCont2();
			//初始化店铺
			this.initGetStoreId();
			//初始化店铺数据
			this.initStoreData();			
		},

		methods: {
			//初始化店铺获取店铺编号
			initGetStoreId() {
				var _this = this;
				this.$http.get("/userLogin/storelist", {
					params: {
						lang: DB.getItem("localLang").toString()
					}
				}).then((res) => {
					if(res.status == 200 && res.data.rspCode == "00000") {
						//初始化上拉店铺
						if(DB.getItem("storeNo").toString()) {
							//有缓存过店铺编号，根据店铺编号去取
							res.data.data.data.forEach(function(item, index) {
								if(item.storeNo == DB.getItem("storeNo").toString()) {
									_this.localAddr.localName = item.storeName;
								}
							})
						} else {
							//第一次进来没有缓存数据，1缓存storeNo ,2初始化选择框
							res.data.data.data.forEach(function(item, index) {
								if(item.isDefault) {
									DB.setItem("storeNo", item.storeNo);
									_this.localAddr.localName = item.storeName;
								}
							})
						}
						//初始化上拉店铺 ，缓存三个店铺数据
						this.menusStore = res.data.data.data;
						res.data.data.data.forEach(function(item, index) {
							_this.menusAddr["storeName_" + item.storeNo] = item.storeName;
						})
						DB.setItem("storeList", JSON.stringify(res.data.data.data));
						//初始化店铺数据
						this.initStoreData();
						this.initGetCarousel();
					}
				}).catch((err) => {
					console.log(err)
				})

			},
			initGetCarousel() {
				this.$http.get("/userLogin/getCarouselFigure", {
					params: {
						//						storeNo:DB.getItem("storeNo").toString(),
						storeNo: "D00005",
						lang: "zh"
					}
				}).then((res) => {
					console.log(res)
					console.log(res.data.data.data)
					if(res.status == 200 && res.data.rspCode == "00000") {
						this.banner = res.data.data.data;
					}
				}).catch((err) => {
					console.log(err)
				})
			},
			selectAddr() {
				//				this.isShowAs = true;
				this.isShowAs2 = !this.isShowAs2;
			},
			//切换店铺 存储店铺编号 更新选择框自定义
			selectMenu2(key, val) {
				console.log(key)
				var selectVal = key.storeNo;
				//				console.log(selectVal[1]);
				if(selectVal != DB.getItem("storeNo").toString()) {
					DB.setItem("storeNo", selectVal);
					this.localAddr.localName = val;
					//青春店铺缓存
					window.location.reload();
				}
			},
			//初试化店铺数据
			initStoreData(){
				var _this = this;
				this.$http.get("/userLogin/getClassGoods",{
					params:{
						storeNo:DB.getItem("storeNo").toString(),
						classType:1,
						lang:DB.getItem("localLang").toString()
					}
				}).then((res) => {
						console.log("/userLogin/getClassGoods")
						console.log(res)
						console.log(res.data.data.data)
						if(res.status == 200 && res.data.rspCode == "00000"){
							this.detailFireSrc = res.data.data.data;
						}
				}).catch((err) => {
					console.log(err)
				})				
			},
			
			//轮播2
			allCsCont2(){
//				console.dir(this.$refs.allCsCont.scrollWidth)
				sivTime =  setInterval(()=>{
					this.$refs.allCsCont.scrollLeft += 1;
//					console.log(this.$refs.allCsCont.scrollLeft)
					if(this.$refs.allCsCont.scrollLeft >= canScrollWidth){
						this.$refs.allCsCont.scrollLeft = 0;
					}
				},30)
				
			},
			//右
			csPre(){
				clearInterval(sivTime);
//				console.log("csPre")
				this.$refs.allCsCont.scrollLeft += crouselScrWidth;
				if(this.$refs.allCsCont.scrollLeft >= canScrollWidth){
					this.$refs.allCsCont.scrollLeft = 0;
				}

			},
			//左
			csNext(){
				clearInterval(sivTime);
//				console.log("csNext")
				this.$refs.allCsCont.scrollLeft -= crouselScrWidth;
				if(this.$refs.allCsCont.scrollLeft <= 0){
					this.$refs.allCsCont.scrollLeft = this.$refs.allCsCont.clientWidth;
				}				
			}
		},
		components: {
			XImg,
			Flexbox,
			FlexboxItem,
			Actionsheet
		}

	}
</script>

<style scoped="scoped" lang="scss">
@import "../../assets/scss/util";
	.initCont {
		font-size:0.38rem;
		margin-top: 1rem;
		.carouselCont {
			.carouselImg {
				height: 5rem;
			}
		}
		.topFire_cont {
			position: relative;
			.localLang {
				width: 0.44rem;
				height: 0.44rem;
				text-align: center;
				line-height: 0.44rem;
				position: absolute;
				top: -3.8rem;
				right: 0.2rem;
				background-color: #FDA544;
				font-size: 0.34rem;
				padding: .1rem;
				color: #FFF;
				border-radius: 50%;
				z-index: 999;
			}
			.localAddr {
				line-height: 0.44rem;
				position: absolute;
				top: -4.6rem;
				left: 0.2rem;
				z-index: 999;
				word-break: keep-all;
				overflow: hidden;
				.addrCont {
					padding: 0.05rem 0.1rem;
					max-width: 4rem;
					background-color: #FFF;
					border: 1px solid #c5c5c5;
					line-height: 0.4rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.triangle_border_down {
						display: inline-block;
						width: 0;
						height: 0;
						border-width: 0.14rem 0.14rem 0;
						margin-left: 0.04rem;
						border-style: solid;
						border-color: #FDA544 transparent transparent;
						/*灰 透明 透明 */
						position: relative;
						top: 0;
					}
					.triangle_border_down span {
						display: block;
						width: 0;
						height: 0;
						border-width: 0.14px 0.14px 0;
						border-style: solid;
						border-color: #fc0 transparent transparent;
						/*黄 透明 透明 */
						position: absolute;
						top: 0px;
						left: 0px;
					}
					.localPos {
						width: 0.4rem;
						height: 0.4rem;
						display: inline-block;
					}
					div {
						display: inline-block;
						font-size: 0.3rem;
						color: #FDA544;
						overflow: hidden;
						text-overflow: ellipsis;
						max-width: 3rem;
					}
				}
			}
			.storeDetail {
				position: absolute;
				top: -4.1rem;
				left: 0.2rem;
				z-index: 999;
				font-size: 0.32rem;
				background-color: #fff;
				border: 1px solid #FDA544;
				.sd-item {
					.colorYellow {
						color: #FDA544;
					}
					padding:0.1rem 0.2rem;
					border-bottom: 1px solid #FDA544;
				}
			}
			.tf_cell {
				width: calc(100% / 3);
				height: 100%;
				display: inline-block;
				font-size: 0.34rem;
				section {
					width: 100%;
					height: 2rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: #000000;
					.tf_img {
						width: 1.2rem;
						height: 1rem;
						margin-bottom: .1rem;
					}
				}
			}
		}
		/*内容区域*/
		.homeContainer {
			/*头部四个标题*/
			.ct-title{
				width: 100%;;
				height: 2.5rem;
				text-align: center;
				div{
					
				}
				.ctt-oneTitle{
					color: $originColor;
					padding:0.2rem 0 0 0 ;
				}
				.ctt-twoTitle{
					display: flex;
					justify-content: center;
					align-items: center;
					height: 0.2rem;
					.line{
						background-color: #000000;
						height:0.04rem;
						width: 0.6rem;
					}
				}
				.ctt-threeTitle{
					color:#000000;
					font-weight: 700;
					padding-bottom: 0.3rem;
				}
			}
			/*关于我们*/
			.ct-aboutAs{
				display: flex;
				&>div,p{
					width: 50%;
					/*border: 1px solid;*/
					padding: 0.2rem;
				}
				.ctt-one{
					.ctto-about{
						color:#000000;
						font-size: 0.28rem;
					}
					.ctto-aboutCont{
						
						padding-right: 0;
						color:#333;
						font-size: 0.22rem;		
						&>.p{
							text-indent: 0.48rem;
						}				
					}
				}
				.ctt-two{
					display: flex;
					flex-wrap: wrap;
					.abSrcCont{
						padding:0.2rem;
						.abSrcContImg{
							width:1.8rem;
							height:1.8rem;
							border-radius: 4px;
						}
					}
				}
			}
			
			/*第二个轮播*/
			.carouselCont2{
				width: 100%;;
				text-align: center;
				div{
					
				}
				.ctt-oneTitle{
					color: $originColor;
					padding:0.2rem 0 0 0 ;
				}
				.ctt-twoTitle{
					display: flex;
					justify-content: center;
					align-items: center;
					height: 0.2rem;
					.line{
						background-color: #000000;
						height:0.04rem;
						width: 0.6rem;
					}
				}				
				.ctt-threeTitle{
					color: $originColor;
				}	
				
				.carouseScroll{
					height: 4rem;
					width: 100%;
					/*background-color: rgba(0,0,0,0.8);*/
					background-image: url("../../../pcStatic/images/home/testImg5.jpg");
					background-repeat:no-repeat ;
					background-size:100% 100% ;
					overflow:hidden;
					margin-top:0.2rem ;
					.csModel{
						margin:0.2rem 2%;
						display: flex;
						background-color: rgba(0,0,0,0.4);
						width:96%;
						height: 3.6rem;					
						div{
							display: inline-block;
							float: left;
						}
						.cs-pre,.cs-next{
							width: 8%;
							line-height: 3.6rem;
							font-size: 0.8rem;
							color: #fff;
						}
						.allCont{
							align-self: center;
							width: 84%;
							overflow-x: scroll;
							overflow-y: hidden;
							&::-webkit-scrollbar { width: 0 !important }
							-ms-overflow-style: none;
							overflow: -moz-scrollbars-none;
							display: flex;
							align-items: center;
						.csCont{
							min-width:25rem;
							margin-top: 0.3rem;
							.cscItem{
								width: 2.5rem;
								.cscItemImg{
									width:2rem;
									height: 2rem;
									border-radius:6px ;
								}
							}
						}
						}

						
					}
				}			
			}
			/*加盟*/
			.joinUsCont{
				width: 100%;;
				.ctt-threeTitle{
					text-align: center;
					width: 100%;
					color: $originColor;
					padding: 0.2rem 0 0.4rem 0;
				}				
				.ctt-two{
					.abSrcCont{
						width: calc(100%/3);
						display: inline-block;
						padding:0.3rem;
						div{
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							font-size: 0.22rem;
						.abSrcContImg{
							margin: 0 auto;
							width:0.6rem;
							height:0.6rem;
						}
						.dectOne{
							font-weight: 700;
							
						}
						.dectTwo{
							max-width: 4rem;
						}
						}
					}
				}				
			}		
/*联系我们*/
			.findUs{
				width: 100%;
				margin-top: 0.2rem;
				color: #fff;
				.findUsCont{
					position: relative;
					.abSrcContImg{
						height: 4rem;
					}
					.fuTrueCont{
						position: absolute;
						top: 0;
						display: flex;
						margin:0.2rem 2%;
						background-color: rgba(0,0,0,0.4);
						width:96%;
						height: 3.6rem;
						.ftc-left{
							flex: 3;
							padding: 0.4rem;
							.ftcl-title{
								padding-bottom:0.4rem ;
							}
							.ftcl-cont{
								font-size: 0.34rem;
								.ftclc-item{
									margin-bottom: 0.08rem;
									display: flex;
									.ftcrc-Img{
										width: .5rem;
										height: .5rem;
									}
								}
							}
						}
						.ftc-right{
							flex: 1;
							align-self: flex-end;
							display: flex;
							justify-content: flex-end;
							padding-right: 0.2rem;
							padding-bottom: 0.5rem;
							.ftcrImg{
								width: 2rem;
								height: 2rem;
							}
						}
					}
				}				
							
			}			
				
			
		}
		
		/*当季精选*/
		.ct-detail{
			.detailFire_cont {
				.df_cell {
					background-color: #fff;
					.df_header {
						height: 1rem;
						padding-left: 0.4rem;
						display: flex;
						align-items: center;
						justify-content: center;
						.dfh_img {
							width: 0.6rem;
							height: 0.6rem;
						}
						.dfh_title {
							display: inline-block;
							padding-left: .1rem;
							font-size: 0.4rem;
							color: rgb(254, 122, 16);
						}
						.dfh_title2 {
							display: inline-block;
							color: $originColor;
						}
					}
					.df_body {
						display: flex;
						flex-wrap: wrap;
						.dfb_item {
							width: calc(100% / 3);
							display: inline-block;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							color: #FDA544;
							padding: 0.2rem;
							@include box-sizing;
							.dfb_img {
								width: 2.4rem;
								height: 2.4rem;
								border-radius: 8px;
								padding-bottom: 0.1rem;
							}
							.dfb_name,
							.dfb_price {
								font-size: 0.3rem;
							}
						}
					}
				}
			}
		}
		

		
		
		
	}
</style>