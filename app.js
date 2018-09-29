import './style/app.less'
import './vendor'

const baseUrl = require('./config').baseUrl
const {  fly, regeneratorRuntime } = global


App({
  onLaunch(){
    console.log('App Launch')
  },
  onShow(){
    console.log('App Show')
  },
  onHide(){
    console.log('App Hide')
  },
  globalData: {
    
  },
  // 直接把global混进来
  global: global
})
