<template name="FeedBackCom">
	<view>
		<!-- 问题描述 -->
		<view v-if="showDesc==true">
			<view class="feedback-title">
				<text>问题描述</text>
				<text v-if="showSC==true" class="feedback-quick" @tap="chooseMsg">快速键入</text>
			</view>
			<view class="feedback-body">
				<textarea placeholder="请将您的问题进行描述..." @input="changeMsg($event)" v-model="inputMsg" class="feedback-textare" :disabled="readOnly"></textarea>
			</view>
		</view>
	
		<!-- 添加图片 -->
		<view v-if="showPhoto==true">
			<view class="feedback-title"><text>图片{{showEdit?'添加/预览':'预览'}}</text></view>
			<view class="feedback-body feedback-uploader">
				<view class="uni-uploader">
					<view class="uni-uploader-head">
						<view class="uni-uploader-title">点击{{showEdit?'添加/预览':'预览'}}</view>
						<view class="uni-uploader-info">{{ imageList.length }}/{{maxImageList}}</view>
					</view>
					<view class="uni-uploader-body">
						<view class="uni-uploader__files">
							<block v-for="(image, index) in imageList" :key="index">
								<view class="uni-uploader__file" style="position: relative;">
									<image class="uni-uploader__img" :src="image" @tap="previewImage(index)"></image>
									<view v-if="showEdit==true" class="close-view" @click="close(index)">x</view>
								</view>
							</block>
							<view v-if="showEdit==true" class="uni-uploader__input-box" v-show="imageList.length < maxImageList">
								<view class="uni-uploader__input" @tap="chooseImg"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	/*
	* FeedBackCom 分享组件
	* @description 描述
	* @value 	{Number}	maxImageList = 9					最大照片数，默认值为9	
	* @value	{Array}		imageListOrigin = ["图片路径数组"]	初始由外部传入的照片文件的路径
	* @value	{String}	inputMsgOrigin = 'String'	初始由外部传入的问题描述值	
	* @property	{Boolean}	showDesc = [true|false]		是否显示问题描述相关内容，默认值为true
	* @property	{Boolean}	showSC = [true|false]		是否使用快速键入，默认值为true
	* @value	{String} 	inputSCOrigin = ['快速输入的内容']	快速输入的内容，可由外部传入
	* @property	{Boolean}	readOnly = [true|false]		是否显示问题描述是否只读，默认值为false
	* @property {Boolean}	showPhoto = [true|false]	是否显示图片操作相关内容，默认值为true
	* @property {Boolean}	showEdit = [true|false]		是否显示图片编辑相关操作，包含删除和添加相关内容，默认值为true
	* @event 	{Function} 	inputMsg 					inputMsg 改变时触发事件
	* @event 	{Function} 	imageList 					imageList 改变时时触发
	*/
	
export default {
	props:{
		maxImageList:{
			type: [Number],
			default: 9
		},
		imageListOrigin:{
			type: [Array],
			default: ()=>[]
		},
		inputMsgOrigin:{
			type: String,
			default: ''
		},
		showDesc:{
			type: [Boolean, String],
			default: true
		},
		showSC:{
			type: [Boolean, String],
			default: true
		},
		inputSCOrigin:{
			type: [Array],
			default: ()=>['常见问题1', '常见问题2', '常见问题3']
		},
		readOnly:{
			type: [Boolean, String],
			default: false
		},
		showPhoto:{
			type: [Boolean, String],
			default: true
		},
		showEdit:{
			type: [Boolean, String],
			default: true
		}
	},
	data() {
		return {
			msgContents: [],
			imageList: [],
			inputMsg: ''
		};
	},
	created() {
		//数据初始化的时候将父组件传来的值复制给子组件用，这样可以不修改原始传入值
		this.imageList = this.imageListOrigin;
		this.inputMsg = this.inputMsgOrigin;
		this.msgContents = this.inputSCOrigin;
	},
	methods: {
		//监控每次textarea输入 如果有地点需要textarea中的值可以通过调用本组件并在其中@inputMsg获取
		changeMsg(e){
			//console.log(this.inputMsg)
			this.inputMsg = e.target.value;
			this.$emit('inputMsg',this.inputMsg);
		},
		
		/**
		 * 关闭图片
		 * @param {Object} e
		 */
		close(e) {
			this.imageList.splice(e, 1);
		},

		/**
		 * 快速输入
		 */
		chooseMsg() {
			uni.showActionSheet({
				itemList: this.msgContents,
				success: res => {
					if(this.readOnly == false){
						this.inputMsg = this.msgContents[res.tapIndex];
						this.$emit('inputMsg',this.inputMsg);
					}
				}
			});
		},

		/**
		 * 选择图片
		 */
		chooseImg() {
			//选择图片
			uni.chooseImage({
				sourceType: ['camera', 'album'],
				sizeType: ['original'],
				count: this.maxImageList - this.imageList.length,
				success: res => {
					this.imageList = this.imageList.concat(res.tempFilePaths);
				}
			});
		},
		
		/**
		 * 预览图片
		 * @param {Object} index
		 */
		previewImage(index) {
			uni.previewImage({
				urls: this.imageList,
				current: this.imageList[index]
			});
		},

	},
	// computed:{
	// 	imageList(){
	// 		return this.imageListOrigin;
	// 	}
	// },
	watch:{
		imageList:{
			handler(newVal, oldVal) {
				if (newVal.length > this.maxImageList) {
					uni.showToast({
						title: "照片总数超过"+this.maxImageList+"张了\n请重新选择",
						icon: "none"
					});
					this.imageList = oldVal;
				}
				/** 监控每次imageList变化 如果有地点需要imageList中的值可以通过调用本组件并：
				 *	1、在组件中其中 @imageList="方法名" 2，在methods:{}中定义方法"方法名(value){}",这个value便是本组件传的imageList
				 */
				this.$emit('imageList',this.imageList)
			},
			deep: true
		},
	}
};
</script>

<style>
page {
	background-color: #efeff4;
}

.input-view {
	font-size: 28rpx;
}

.close-view {
	text-align: center;
	line-height: 14px;
	height: 16px;
	width: 16px;
	border-radius: 50%;
	background: #ff5053;
	color: #ffffff;
	position: absolute;
	top: -6px;
	right: -4px;
	font-size: 12px;
}
</style>
