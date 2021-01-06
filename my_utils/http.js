let http = {
	//'config':config,
	'request':request,
	'get':get,
	'post':post,
	// 'uploadFile': uploadFile,
	// 'downloadFile': downloadFile
}

// 基础默认信息
const config = {
    baseURL: '',
	url:'',
    header: {
      //'content-type': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text'
  }

// Promise封装
function request (options) {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: "加载数据中..."
		}),
		uni.request({
			// url:http.config.baseURL + options.url,
			// method: options.method || 'GET',
			// contentType: options.contentType ||'application/json;charset=utf-8',
			// header: options.header || {},
			// data: options.data || {},
			...options,
			
			success: (res) => {
				// 如果返回没有数据
				if (!res.data == null) {
					return uni.showToast({
						title: '获取数据失败' + res
					})
					 //console.log(res);
				}
				// 如果返回错误信息
				if (!res.errMsg) {
					return uni.showModal({
						title: '错误',
						content: res.data.ErrorMessage,
					});
					  console.log(res);
					
				}
				console.log(res);
				resolve(res)
			},
			// 如果接口调用失败
			fail: (err) => {
				return uni.showToast({
					title: '请求接口失败' + err
				})
				reject(err)
			},
			complete: () => {
				uni.hideLoading();
			}
		})
	})
  }
 
 // get请求
 function get (url, data, options = {}) {
    options.url = config.baseURL + url
	options.header = config.header || {}
    options.data = data
    options.method = 'GET'
    return this.request(options)
  }
 // post请求
 function post (url, data, options = {}) {
    options.url = url
    options.data = data
    options.method = 'POST'
    return this.request(options)
  }
  
  export default http

/*
// let http = {
//     'setBaseUrl': (url) => {
//         if (url.charAt(url.length - 1) === "/") {
//             url = url.substr(0, url.length - 1)
//         }
//         http.baseUrl = url;
//     },
//     'header': {},
//     'beforeRequestFilter': (config) => { return config },
//     'beforeResponseFilter': (res) => { return res },
//     'afterResponseFilter': (successResult) => { },
//     'get': get,
//     'post': post,
//     'request': request,
//     'uploadFile': uploadFile,
//     'downloadFile': downloadFile
// }
 
// function init(con) {
//     //url
//     let url = http.baseUrl;
//     if (url && con.url && !con.url.match(/^(http|https):\/\/([\w.]+\/?)\S*$/)) {
//         if (con.url.charAt(0) !== "/") {
//             con.url = "/" + con.url;
//         }
//         con.url = url.concat(con.url);
//     }
//     //header
//     if (http.header != undefined && http.header != null) {
//         if (!con.header) {
//             con.header = http.header;
//         } else {
//             Object.keys(http.header).forEach(function (key) {
//                 con.header[key] = http.header[key]
//             });
//         }
//     }
// }
 
// function request(con) {
//     init(con);
//     let config = {
//         url: con.url ? con.url : http.baseUrl,
//         data: con.data,
//         header: con.header,
//         method: con.method ? con.method : 'GET',
//         dataType: con.dataType ? con.dataType : 'json',
//         responseType: con.responseType ? con.responseType : 'text',
//         success: con.success ? (res) => {
// 			console.log('1')
//             http.afterResponseFilter(con.success(http.beforeResponseFilter(res)));
			
//         } : console.log('2'),
//         fail: con.fail ? (res) => {
//             con.fail(res);
//         } : null,
//         complete: con.complete ? (res) => {
//             con.complete(res);
//         } : null
//     }
// 	debugger
//     return uni.request(http.beforeRequestFilter(config));
// }
 
// function get(url, con, success) {
	
//     let conf = {};
//     if (con && typeof con == 'function') {
//         if (success && typeof success == 'object') {
//             conf = success;
//         }
//         conf.success = con
//     }else{
//         if (con && typeof con == 'object') {
//             conf = con;
//         }
//         conf.success = success;
//     }
 
//     if (url) {
//         conf.url = url
		
//     }
//     conf.method = "GET";
// 		//debugger
//     return request(conf);

// }
 
// function post(url, data, con, success) {
//     let conf = {};
//     if (con && typeof con == 'function') {
//         if (success && typeof success == 'object') {
//             conf = success
//         }
//         conf.success = con;
//     } else {
//         if (con && typeof con == 'object') {
//             conf = con;
//         }
//         conf.success = success;
//     }
//     if (url) {
//         conf.url = url
//     }
//     if (data) {
//         conf.data = data
//     }
//     conf.method = "POST";
//     return request(conf);
// }
 
// function uploadFile(con) {
//     init(con);
 
//     let config = {
//         url: con.url ? con.url : http.baseUrl,
//         files: con.files,
//         filesType: con.filesType,
//         filePath: con.filePath,
//         name: con.name,
//         header: con.header,
//         formData: con.formData,
//         success: con.success ? (res) => {
//             http.afterResponseFilter(con.success(http.beforeResponseFilter(res)));
//         } : null,
//         fail: con.fail ? (res) => {
//             con.fail(res);
//         } : null,
//         complete: con.complete ? (res) => {
//             con.complete(res);
//         } : null
//     }
//     return uni.uploadFile(http.beforeRequestFilter(config));
// }
 
// function downloadFile(con) {
//     init(con);
 
//     let config = {
//         url: con.url ? con.url : http.baseUrl,
//         header: con.header,
//         success: con.success ? (res) => {
//             http.afterResponseFilter(con.success(http.beforeResponseFilter(res)));
//         } : null,
//         fail: con.fail ? (res) => {
//             con.fail(res);
//         } : null,
//         complete: con.complete ? (res) => {
//             con.complete(res);
//         } : null
//     }
//     return uni.downloadFile(http.beforeRequestFilter(config));
// }
 
// export default http
*/

/****************************************
 * 在main.js里面添加import {myRequest} from './util/api.js' 接收封装的方法
 * 添加 Vue.prototype.$myRequest = myRequest 挂载到全局
 * 
 * 调用示例
 * async getXXX(){
 * 	const res = await this.$myRequest({
 * 		url: 'xxx',
 * 		method: 'GET',
 * 		data:{
 *	 		xxx:xxx
 *		},
 * 	})
 * 	// 接口获取来的数据进行赋值
 * 	this.xxx = res.xxx
 * }
 * 
 * 
 * ****************************************/
 /*
// const BASE_URL = ''
// export const myRequest = (options) => {
// 	return new Promise((resolve, reject) => {
// 		uni.showLoading({
// 			title: "正在加载数据..."
// 		}),
// 		uni.request({
// 			url: BASE_URL + options.url,
// 			method: options.method || 'GET',
// 			contentType: options.contentType ||'application/json;charset=utf-8',
// 			header: options.header || {},
// 			data: options.data || {},
// 			success: (res) => {
// 				// 如果返回失败
// 				if (!res.data == null) {
// 					return uni.showToast({
// 						title: '获取数据失败' + res
// 					})
// 					 console.log(res);
// 				}
// 				// 如果返回错误信息
// 				if (!res.errMsg) {
// 					return uni.showModal({
// 						title: '错误',
// 						content: res.data.ErrorMessage,
// 					});
// 					  console.log(res);
					
// 				}
// 				console.log(res);
// 				resolve(res)
// 			},
// 			// 如果接口调用失败
// 			fail: (err) => {
// 				return uni.showToast({
// 					title: '请求接口失败' + err
// 				})
// 				reject(err)
// 			},
// 			complete: () => {
// 				uni.hideLoading();
// 			}
// 		})
// 	})
// }

// export default myRequest
*/