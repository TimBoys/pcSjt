<template>
	<div>
		      
    
    <a href="./wxindex.html">to_单季精选2</a>
    <a href="./wxindex.html#/classification">to_所有商品2</a>
      
      <button @click="button2">button</button>
	</div>
</template>

<script>


	export default {
		name: "home",
		data() {
			return {
				
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
</style>