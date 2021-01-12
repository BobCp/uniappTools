<template>
	<view class="container">
		<view class="intro">本项目已包含uni-app组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<view style="padding: 100rpx;"></view>
		<button type="default" @click="navigation(nav[0])">组件测试</button>
		<button type="default" @click="navigation(nav[1])">工具测试</button>
		<button type="default" @click="test">网络测试</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				nav:['data=component','data=tool']
			}
		},
		// 监听顶部状态按按钮
		onNavigationBarButtonTap(e) {
		    uni.navigateTo({
		        url: '/pages/about/about'
		    });
		},
		// 监听下拉刷新动画，on和stop需要配合使用
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
			setTimeout(() => {
				// 重新请求数据
				uni.stopPullDownRefresh();
			},500)
		},
		methods: {
			navigation(aim){
				uni.navigateTo({
				    url: '/pages/list/list?'+aim
				});
			},
			async getServerData() {
				const res = await this.$http.get('/appfile/check',{version: "1.0.1",name: "哈哈"}).then(res=>{
					console.log(res.data)})				
			},
			test(){
				//plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
					uni.showLoading({
						title: "加载数据中..."
					}),
					uni.request({
						//  https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json
						url: 'http://127.0.0.1:3000/appfile/check', 
						method:"GET",
						data: {  
							version: "1.0.1",  
							name: "uni哈哈"  
						},
						success: (result) => {
							var data = result.data;
							console.log(data);
						},
						// 如果接口调用失败
						fail: (err) => {
							return uni.showToast({
								title: 'X: ' + err
							})
							console.log(err);
						},
						complete: () => {
							uni.hideLoading();
						}
					});
				//});
				this.getServerData();
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
