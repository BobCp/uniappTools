# uniappTools
基于uni-app添加一些“懒人”工具

## 目录结构

┌─common                  公共js和css目录
│─components            符合vue组件规范的uni-app组件目录 
│  └─comp-a.vue         可复用的a组件 
├─my_components     存放自定义组件的目录，[详见](https://uniapp.dcloud.io/component/web-view) 
├─my_tools             存放自定义工具的目录，[详见](https://uniapp.dcloud.io/platform?id=整体目录条件编译) 
├─pages                  业务页面文件存放的目录 
│  ├─index 
│  │  └─index.vue       index页面 
│  └─... 
│     └─...        			   其他页面 
├─static                存放应用引用静态资源（如图片、视频等）的目录，**注意：**静态资源只能存放于此 
├─main.js             Vue初始化入口文件 
├─App.vue               应用配置，用来配置App全局样式以及监听 [应用生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=应用生命周期) 
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，[详见](https://uniapp.dcloud.io/collocation/manifest) 
└─pages.json            配置页面路由、导航条、选项卡等页面类信息，[详见](https://uniapp.dcloud.io/collocation/pages)

## 组件/my_components/...

> FeedBackCom/FeedBackCom.vue

### 配置项列表

| 属性            | 类型    | 默认值                                  | 描述                                             |
| :-------------- | ------- | :-------------------------------------- | ------------------------------------------------ |
| maxImageList    | Number  | 9                                       | 最大照片数，默认值为9                            |
| imageListOrigin | Array   | []                                      | 初始由外部传入的照片文件的路径                   |
| inputMsgOrigin  | String  | ''                                      | 初始由外部传入的问题描述值                       |
| showDesc        | Boolean | true                                    | 是否显示问题描述相关内容                         |
| showSC          | Boolean | true                                    | 是否使用快速键入                                 |
| inputSCOrigin   | Array   | ['常见问题1', '常见问题2', '常见问题3'] | 快速输入的内容，可由外部传入                     |
| readOnly        | Boolean | false                                   | 是否显示问题描述是否只读                         |
| showPhoto       | Boolean | true                                    | 是否显示图片操作相关内容                         |
| showEdit        | Boolean | true                                    | 是否显示图片编辑相关操作，包含删除和添加相关内容 |
| inputMsg        | event   | /                                       | 输入框内容改变时触发事件                         |
| imageList       | event   | /                                       | 图片列表改变时时触发                             |

已在全局注册，无需页面引用

```vue
<template>
	<view>
        <FeedBackCom></FeedBackCom>
	</view>
</template>

<script>
	...
</script>

<style>
	...
</style>
```

如有需要也可以只在使用页面导入

```vue
<template>
	<view>
        <FeedBackCom></FeedBackCom>
	</view>
</template>

<script>
    import FeedBackCom from '@/my_components/FeedBackCom/FeedBackCom.vue'//这里就是在页面中引入组件路径的写法
	export default {
		components:{
			FeedBackCom //这里是组件中name名称，在import引入的时候名称要一致
		},
        ...
    }
</script>

<style>
	...
</style>
```

