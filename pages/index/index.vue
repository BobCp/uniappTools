<template>
	<view class="container">
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<view style="padding: 100rpx;"></view>
		<button type="default" @click="navigation(nav[0])">组件测试</button>
		<button type="default" @click="navigation(nav[1])">工具测试</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				nav:['/pages/component/component','/pages/tool/tool']
			}
		},
		// 监听顶部状态按按钮
		onNavigationBarButtonTap(e) {
		    uni.navigateTo({
		        url: '/pages/about/about'
		    });
		},
		methods: {
			navigation(aim){
				uni.navigateTo({
				    url: aim
				});
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
