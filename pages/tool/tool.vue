<template>
    <view>
		<view style="padding: 100rpx;"></view>
		<button type="default" @click="PushMsg">生成通知</button>

		<!-- 这是测uniapp自带推送的 -->
		<!-- 
		<button type="default" @click="showPushMsg">推送</button>
		<uni-list v-for="(obj,i) in pushMsg" :key="i">
			<view v-for="(val,key) in obj" :key="key">
				<uni-list-item :title="key" :rightText="val" />
			</view>		
		</uni-list> -->
    </view>
</template>
<script>
    export default {
        data() {
            return {
				// pushMsg:{},
				// num:1,
            }
        },
		onLoad() {
		},
        methods: {
			// showPushMsg(){
			// 	this.pushMsg = plus.push.getAllMessage();
			// },
			PushMsg(){
							
				this.$myNJS.aOSNotify('通知来了', '这是一条自定义的提醒通知这是一条自定义的提醒通知这是一条自定义的提醒通知这是一条自定义的提醒通知这是一条自定义的提醒通知这是一条自定义的提醒通知这是一条自定义的提醒通知这是一条自定义的提醒通知这是一条自定义的提醒通知这是一条自定义的提醒通知这是一条自定义的提醒通知', {  
								params1: 'params1',  
								params2: 'params2',  
								params3: 'params3',  
								params4: 'params4'  
							});
				
				/*
					1、设计通知呈现页面，这里没用
					2、创建一个Notification Builder
					3、定义Notification的Action动作
					4、设置Notification的点击行为
					5、发布一个Notification				
				*/
				// let that = this;
				// // 获取应用主Activity实例对象
				// var mainActivity = plus.android.runtimeMainActivity();
				
				// var Context = plus.android.importClass('android.content.Context');  
				// var NotificationManager = plus.android.importClass('android.app.NotificationManager')
				// var Notification = plus.android.importClass('android.app.Notification');  
				// var Intent = plus.android.importClass('android.content.Intent');  
				// var PendingIntent = plus.android.importClass('android.app.PendingIntent');  
				
				// // 获取通知管理器（channel管理是需要的）
				// var MyNTFMG = mainActivity.getSystemService(Context.NOTIFICATION_SERVICE);
				
				// // 获取通知构造者
				// var MyNTF = new Notification.Builder(mainActivity);  
				// // 显式Intent使用,Intent在Android中的核心作用就是“跳转”（Android中的跳转机制）
				// // var intent = new Intent(mainActivity, mainActivity.getClass()); 
				// // console.log(JSON.stringify(mainActivity.getClass()))
				// // console.log(JSON.stringify(mainActivity))
				
				// // 隐式调用Intent,对NJS没啥太大影响
				// var intent = new Intent();
				// // 应用主Activity实例对象自己传自己，触发应用生命周期onHide和onShow
				// intent.setClass(mainActivity, mainActivity.getClass());
				// intent.putExtra("name", "张三");
				// //mainActivity.startActivity(intent);
				
				// // 在同一个activity中that.num不同才会有不重复的通知
				// var pendingIntent = PendingIntent.getActivity(mainActivity, that.num, intent, PendingIntent.FLAG_CANCEL_CURRENT);  
				
				// //MyNTF.setOngoing(true); //是否允許滑動關閉?  
				// MyNTF.setContentTitle('Hbuilder')  
				// MyNTF.setContentText('不用个推实现本地消息推送！')  
				// MyNTF.setSmallIcon(17301620)  
				// MyNTF.setTicker('PadInfo')  
				// //当用户触摸此通知时，该通知将自动关闭。
				// MyNTF.setAutoCancel(true);
				// // https://developer.android.google.cn/reference/android/app/Notification.Builder#setFullScreenIntent(android.app.PendingIntent,%20boolean)
				// MyNTF.setFullScreenIntent(pendingIntent, false);
				// MyNTF.setContentIntent(pendingIntent);  
				// MyNTF.setNumber(10)  
				// //mainActivity.getSystemService(Context.NOTIFICATION_SERVICE).notify(that.num,MyNTF.build());
				// MyNTFMG.notify(that.num,MyNTF.build());
				
				// that.num+=1;
				// console.log(that.num)
			},
        }
    }
</script>

<style>
</style>
