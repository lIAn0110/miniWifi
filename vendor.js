//对一些函数进行封装，暴露一些全局的变量
import regeneratorRuntime from 'regenerator-runtime'
import util from './util/util'

const R = require('ramda')
const baseUrl = require('./config').baseUrl

var Fly=require("./libs/fly/fly")
var fly = new Fly()
fly.config.baseURL = baseUrl


global.regeneratorRuntime = regeneratorRuntime
global.util = util
global.fly = fly
global.R = R


const asyncWrap = fn => (options = {}) => new Promise((resolve, reject) => {
  let conf = {
    success: res => {
      // console.log(res)
      resolve(res)
    },
    fail: err => {
    	reject(err)
    },
    complete: res => {
      resolve(res)
    }
  };
  wx[fn](R.merge(conf, options))
})

// 异步的函数
wx.getSettingAsync = asyncWrap('getSetting')
wx.getSystemInfoAsync = asyncWrap('getSystemInfo')
wx.loginAsync = asyncWrap('login')
wx.getUserInfoAsync = asyncWrap('getUserInfo')
wx.reqAsync = asyncWrap('request')
wx.getNetworkTypeAsync = asyncWrap('getNetworkType')
wx.startWifiAsync = asyncWrap('startWifi')
wx.getWifiListAsync = asyncWrap('getWifiList')


global.queryElement = function(id){
  return new Promise((resolve, reject) => {
    wx.createSelectorQuery().select('#'+id).boundingClientRect((rect)=>{
      resolve(rect)
    }).exec()
  })
}