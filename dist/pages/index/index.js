!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){var n="14592619.qcloud.la",r={baseUrl:"https://broker.fangbee.cn",host:n,loginUrl:"https://"+n+"/login",requestUrl:"https://"+n+"/testRequest",openIdUrl:"https://"+n+"/openid",tunnelUrl:"https://"+n+"/tunnel",paymentUrl:"https://"+n+"/payment",templateMessageUrl:"https://"+n+"/templateMessage",uploadFileUrl:"https://"+n+"/upload",downloadExampleUrl:"https://"+n+"/static/weapp.jpg",wifiStatusCode:{0:"正常",12000:{info:"未先调用 startWifi 接口",text:"wifi模块还未初始化~"},12001:{info:"当前系统不支持相关能力",text:"啊哦~你的系统不支持"},12002:{info:"密码错误",text:"啊哦~密码错误"},12003:{info:"连接超时",text:"啊哦~连接超时啦"},12004:{info:"重复连接 Wi-Fi",text:"正在连接，请稍后~"},12005:{info:"Android 特有，未打开 Wi-Fi 开关",text:"请先开启Wifi开关哦~"},12006:{info:"Android 特有，未打开 GPS 定位开关",text:"啊哦~你未打开GPS定位"},12007:{info:"用户拒绝授权连接 Wi-Fi",text:"你拒绝了连接授权哦~"},12008:{info:"无效 SSID",text:"未找到相关wifi~"},12009:{info:"系统运营商配置拒绝连接 Wi-Fi",text:"系统运营商配置拒绝连接 Wi-Fi"},12010:{info:"系统其他错误，需要在 errmsg 打印具体的错误原因",text:"未知错误~请重试"},12011:{info:"应用在后台无法配置 Wi-Fi",text:"请退出后重试~"}}};t.exports=r},,,,function(t,e,n){"use strict";n.r(e);n(0);function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(i,o){try{var s=e[i](o),u=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}("next")})}}var i=getApp().global,o=(i.fly,i.regeneratorRuntime);Page({onLoad:function(){var t=r(o.mark(function t(){return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.obverNetworkChange(),t.next=3,this.startWifi();case 3:if(0!==t.sent){t.next=14;break}return this.setData({isSupport:!0}),t.next=8,this.getCurrentNetworkType();case 8:if("wifi"!==t.sent){t.next=14;break}return this.setData({isWifi:!0}),t.next=13,this.getWifiList();case 13:t.sent;case 14:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:{isSupport:!1,isWifi:!1,wifiList:[]},getCurrentNetworkType:function(){var t=r(o.mark(function t(){var e;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,wx.getNetworkTypeAsync();case 2:if(!(e=t.sent).networkType){t.next=7;break}return t.abrupt("return",e.networkType);case 7:wx.showToast({icon:"none",title:"获取网络状态失败，请稍后重试~"});case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),startWifi:function(){var t=r(o.mark(function t(){var e;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,wx.startWifiAsync({fail:function(t){wx.showToast({icon:"none",title:"初始化wifi失败，请稍后重试~"})}});case 2:if(!(e=t.sent)){t.next=5;break}return t.abrupt("return",e.errCode);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getWifiList:function(){var t=r(o.mark(function t(){var e,n=this;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,wx.getWifiListAsync({success:function(){wx.onGetWifiList(function(t){console.log(t),n.setData({wifiList:t.wifiList})})},fail:function(t){wx.showToast({icon:"none",title:"获取附近wifi失败，请稍后重试~"})}});case 2:if(e=t.sent,console.log(e),!e){t.next=6;break}return t.abrupt("return",e);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),obverNetworkChange:function(){var t=this;wx.onNetworkStatusChange(function(e){console.log(e),console.log("当前网络变化..."+e.networkType),"wifi"==e.networkType&&t.getWifiList()})}})}]);