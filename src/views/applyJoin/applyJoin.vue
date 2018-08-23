<template>
	<div class="initCont">
		 <swiper :list="demo02_list" style="width:85%;margin:0 auto;" :aspect-ratio="300/800" dots-position="center"></swiper>      
    
    <a href="./wxindex.html">to_单季精选2</a>
	</div>
</template>

<script>
const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

	export default {
		name: "home",
		data() {
			return {
				 demo02_list: demoList,
			}
		},
		methods: {
			button2(){
				console.log("222")
				window.location.href = "./wxindex.html#/classification";
			}
		},
			

	}
</script>

<style scoped="scoped" lang="scss">
	.initCont{
		padding-top:1.4rem ;
	}
</style>