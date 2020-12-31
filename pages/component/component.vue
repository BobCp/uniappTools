<template>
	<view>
		<view class="container">
			<button size="mini" @click="showFBC(0)">{{allArea}}</button>
			<button size="mini" @click="showFBC(1)">{{descArea}}</button>
			<button size="mini" @click="showFBC(2)">{{photoArea}}</button>
			<button size="mini" @click="showFBC(3)">{{clearArea}}</button>
		</view>
		<view class="feedback-title" style="background-color: #ffffff;">
			<text> >>效果展示</text>
		</view>
		<view >
			<FeedBackCom :showDesc="showDesc" :showSC="showSC" :readOnly="readOnly" 
			:inputMsgOrigin="inputMsg" @inputMsg="changeMsg" :inputSCOrigin="msgContents" 
			:showPhoto="showPhoto" :showEdit="showEdit" :maxImageList="maxImageList" :imageListOrigin="imageList" @imageList="changeImg" ></FeedBackCom>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				showDesc: false,
				showSC: true,
				readOnly: false,
				inputMsg:'',
				msgContents: ['常见问题0', '常见问题1', '常见问题2'],
				showPhoto: false,
				showEdit: true,
				maxImageList: 9,
				imageList: ['/static/img/c1.jpg','/static/img/c2.png','/static/img/c3.png'],
				
				allArea: '展示完整可编辑',
				descArea: '展示问题描述可编辑',
				photoArea: '展示图片可编辑',
				clearArea: '藏起来'
				
			}
		},
		computed:{
		},
		onLoad() {

		},
		methods:{
			// 图片编辑
			changeImg(value){
				this.imageList = value;
				console.log(this.imageList)
			},
			// 再检内容输入
			changeMsg(value){			
				this.inputMsg = value;
				console.log(this.inputMsg)
			},
			
			// 改变组件内容
			showFBC(changeVal){
				switch (changeVal){
					case 0:
						this.All();
						break;
					case 1:
						this.Desc();
						break;
					case 2:
						this.Photo();
						break;
					case 3:
						this.Clear();
						break;
					default:
						break;
				}
			},
			
			//
			All(){
				if(this.allArea == "展示完整可编辑"){
					this.showDesc = true;
					this.showSC = true;
					this.readOnly = false;
					this.showPhoto = true;
					this.showEdit = true;
					this.allArea = "展示完整只读";
				}else{
					this.showDesc = true;
					this.showSC = true;
					this.readOnly = true;
					this.showPhoto = true;
					this.showEdit = false;
					this.allArea = "展示完整可编辑";
				}
			},
			
			//
			Desc(){
				if(this.descArea == "展示问题描述可编辑"){
					this.showDesc = true;
					this.showSC = true;
					this.readOnly = false;
					this.showPhoto = false;
					this.descArea = "展示问题描述只读";
				}else{
					this.showDesc = true;
					this.showSC = true;
					this.readOnly = true;
					this.showPhoto = false;
					this.descArea = "展示问题描述可编辑";
				}
			},
			
			//
			Photo(){
				if(this.photoArea == "展示图片可编辑"){
					this.showDesc = false;
					this.showPhoto = true;
					this.showEdit = true;
					this.photoArea = "展示图片只读";
				}else{
					this.showDesc = false;
					this.showPhoto = true;
					this.showEdit = false;
					this.photoArea = "展示图片可编辑";
				}
			},
			
			//
			Clear(){
				this.showDesc = false;
				this.showPhoto = false;
			}
		},
		// watch: {
		// 	storageSpace: {
		// 		handler(newVal) {
		// 			this.storageSpace = newVal;
		// 		},
		// 		deep: true
		// 	},
		// }
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
