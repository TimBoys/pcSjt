<template>
	<div class="initCont">
    	<div class="juheadCont">
    		<x-img class="joinUsHeadImg" v-lazy="joinUsHeadImg" /></x-img>
    	</div>

<!--提交信息-->
    	<div class="formCont">
				<div class="ctt-oneTitle">联系我们，获取免费资料，进一步了解项目</div>    	
    			<div class="ctt-cont">
    				 <div class="cttc-Item">
    				 		<span>*</span>
    				 		<Input v-model="submitData.name" placeholder="你的名字" :maxlength="50" class="cttcInput"  />
    				 </div>
    				 <div class="cttc-Item">
    				 		<span>*</span>
    				 		<Input v-model="submitData.telephone" :maxlength="30" placeholder="联系电话" class="cttcInput"  />
    				 </div> 
    				 <div class="cttc-Item">
    				 		<span style="visibility: hidden;">#</span>
    				 		<Input v-model="submitData.email" placeholder="联系邮箱" :maxlength="50" class="cttcInput"  />
    				 </div>      				 
    				 <div class="cttc-Item">
	    				  <span>*</span>
	    				  <Input v-model="submitData.context" type="textarea" :maxlength="450" :rows="5" class="cttcInput" placeholder="填写相关信息，如回访时间，资讯问题描述等。"  />
    				  </div>
    				 <div class="cttc-Item cttc-btn">
	    				  <span>*<span>为必填项目</span></span>
	    				  <Button type="warning" class="formSubmit" @click.native="formSubmit">提交</Button>
    				  </div>    				  
    				  
    				  
    				  
    			</div>
    	</div>
 
 
<!--联系我们-->
		<div class="findUs">
				<div class="findUsCont">
					<x-img v-lazy="aboutImg" class="abSrcContImg"></x-img>
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
</template>

<script>
	import { XImg, Flexbox, FlexboxItem, Actionsheet } from 'vux';
	export default {
		name: "home",
		data() {
			return {
				 joinUsHeadImg:"../../../pcStatic/images/home/joinUsHeadImg.jpg",
				 aboutImg:"../../../pcStatic/images/home/testImg7.jpg",
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
				submitData:{
					name:"",
					telephone:"",
					email:"",
					context:""
				}
			}
		},
		methods: {
			formSubmit(){
				if (this.submitData.name && this.submitData.telephone && this.submitData.context) {
					if (!/^[0-9-]+$/.test(this.submitData.telephone)) {
						this.$vux.toast.show({
							text: "请填写正确的手机号码！",
							type: "text",
						})	
						return false;
					}else if(this.submitData.email && !/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.submitData.email)){
						this.$vux.toast.show({
							text: "请填写正确的邮箱！",
							type: "text",
						})	
						return false;						
					}
					this.$http.post("/userLogin/saveContact", this.submitData
					).then((res) => {
						console.log(res);
						if(res.status == 200 && res.data.rspCode == "00000") {
							this.$vux.toast.show({
								text: "信息提交成功,稍后将有工作人员与您联系,请保持电话畅通！",
								type: "text",
							})	
							this.submitData = {
									name:"",
									telephone:"",
									email:"",
									context:""
								}
						}
					}).catch((err) => {
						console.log(err);
					})					
				}else{
					this.$vux.toast.show({
						text: "请填写正确的联系信息！",
						type: "text",
					})					
				}
			},
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

	.initCont{
		font-size:0.38rem;
		padding-top:1rem ;
		.joinUsHeadImg{
			height: 4.4rem;
			
		}
		
		/*提交用户信息*/
		.formCont{
				.ctt-oneTitle{
					color: #000;
					padding:0.4rem 0 0 0 ;
					text-align: center;
				}
				.ctt-cont{
					
					.cttc-Item{
						padding:0.2rem 0  ;
						display: flex;
						justify-content: center;
						span{
							margin-right: 0.2rem;
							color: red;
							span{
								color: #333;
							}
						}
						.cttcInput{
							width: 80%;
						}
					}
					.cttc-btn{
						flex-direction: column;
						align-items: center;
						font-size: 0.22rem;
						.formSubmit{
							margin-top: 0.1rem;
							font-size: 0.26rem;
							width: 1.8rem;
							height: 0.5rem;
							padding: 0.02rem;
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
</style>