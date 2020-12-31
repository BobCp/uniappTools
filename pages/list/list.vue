<template>
	<view>
		<uni-list>
			<view v-for="(Obj,i) in showList" :key="i">
				<uni-list-item :title="Obj.name" note="" showArrow rightText=""
				link="navigateTo" :to="Obj.url"/>
			</view>
		</uni-list>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				showTest:'',
				showList:[],
				componentList:[{
					name:'分享组件',
					url:'/pages/component/component'
				}],
				toolList:[{
					name:'工具',
					url:'/pages/tool/tool'
				}]
			}
		},
		onLoad(e) {
			try{
				this.showTest = e.data;
				console.log(this.showTest);
				switch (this.showTest){
					case 'component':
						this.showList = this.componentList;						
						break;
					case 'tool':
						this.showList = this.toolList;
						break;
					default:
						break;
				}
				
			}catch(e){
				console.log(e);
			}
		}
	}
</script>

<style>
	.uni-list-item:active {
		background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;
	}
</style>
