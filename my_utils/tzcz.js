/*
	* Author: BobCP
	* 名称：tzcz
	* 描述：基于uniapp的页面跳转API封装页面传值功能
	* 参数：navtype：跳转类型；
					值(String)：back --> 向前返回页面，pop --> 当前页面关闭（出栈）、向后跳转，next --> 向后跳转
		   url：跳转目标；
				值(String)：eg.'/pages/MWorkstation/CheckDetails/CheckDetails'
				注：当navtype值为back时，url值应填写正整数表示向前退回的页面数 eg.基于当前页面输入为1则返回上一页面
		   data：传的数据；
				值：String类型，其它类型传值请进行转换
				用encodeURIComponent()把字符串作为 URI 组件进行编码,接收方需用decodeURIComponent()解码一个编码的 URI 组件。
*/

// let tzcz = {
	
// }

export default function tzcz(navtype, navurl, navdata){
	//判断data类型：数组和对象都用JSON.stringify&&JSON.parse转一下
	switch(navtype)
	{
	    case "back":
	        pageBack(navurl, navdata);
	        break;
	    case "pop":
	        pagePop(navurl, navdata);
	        break;
	    case "next":
	        pageNext(navurl, navdata);
	        break;
	    default:
			console.log("跳转类型不对")
	        break;
	}
	
}

function pageBack(m_url,data){
	console.log("tuihuiqu")
	uni.$emit("navData",data);
	/*
		对应返回的那一页需要开启监听并在用完后关闭
		例子：
		onShow(){
			//开启监听
			uni.$on('navData',(res)=>{
				this.path = res;
			})
			//用完就关，写在监听后面
			uni.$off('navData',()=>{
				console.log('关闭监听选择收货地址');
			})
		}
	*/
	uni.navigateBack({
		delta:m_url,
	})
}

function pagePop(m_url,data){
	console.log("xiayiye")
	m_url += (m_url.indexOf('?') < 0 ? '?' : '&') + param(data);
	uni.redirectTo({  
		url:m_url
	}) 
}

function pageNext(m_url,data){
	console.log("guanbenyequxiayiye")
	m_url += (m_url.indexOf('?') < 0 ? '?' : '&') + param(data);
	uni.navigateTo({  
		url:m_url
	}) 
}

// 数据过滤
function param(data) {
	let value = (data !== undefined && data !== null) ? data : '';
	let navData = 'navData='+encodeURIComponent(value);
	//判断value是不是不存在或者为空，空则不会在跳转页面后添加值
	return value ? navData : '';
}

/*
  可以使用typeof来检测数据类型：
  “undefined”-->这个变量是未定义的(未初始化的变量和未声明的变量的typeof操作都返回undefined)
  ”boolean“-->这个值是布尔值
  ”string“ -->这个值是字符串
  ”number“-->这个值是数字
  ”object“-->这个值为null或者obejct
  ”function“-->这个值是函数
*/