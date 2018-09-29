/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

var host = "14592619.qcloud.la"

var config = {
    // 主域名
    baseUrl: 'https://broker.fangbee.cn',
    
    // 下面的地址配合云端 Server 工作
    host,

    // 登录地址，用于建立会话
    loginUrl: `https://${host}/login`,

    // 测试的请求地址，用于测试会话
    requestUrl: `https://${host}/testRequest`,

    // 用code换取openId
    openIdUrl: `https://${host}/openid`,

    // 测试的信道服务接口
    tunnelUrl: `https://${host}/tunnel`,

    // 生成支付订单的接口
    paymentUrl: `https://${host}/payment`,

    // 发送模板消息接口
    templateMessageUrl: `https://${host}/templateMessage`,

    // 上传文件接口
    uploadFileUrl: `https://${host}/upload`,

    // 下载示例图片接口
    downloadExampleUrl: `https://${host}/static/weapp.jpg`,

    // 初始化wifi时的错误码
    wifiStatusCode: {
        0: '正常',
        12000: {
            info: '未先调用 startWifi 接口',
            text: 'wifi模块还未初始化~'
        },
        12001: {
            info: '当前系统不支持相关能力',
            text: '啊哦~你的系统不支持'
        },
        12002: {
            info: '密码错误',
            text: '啊哦~密码错误'
        },
        12003: {
            info: '连接超时',
            text: '啊哦~连接超时啦'
        },
        12004: {
            info: '重复连接 Wi-Fi',
            text: '正在连接，请稍后~'
        },
        12005: {
            info: 'Android 特有，未打开 Wi-Fi 开关',
            text: '请先开启Wifi开关哦~'
        },
        12006: {
            info: 'Android 特有，未打开 GPS 定位开关',
            text: '啊哦~你未打开GPS定位'
        },
        12007: {
            info: '用户拒绝授权连接 Wi-Fi',
            text: '你拒绝了连接授权哦~'
        },
        12008: {
            info: '无效 SSID',
            text: '未找到相关wifi~'
        },
        12009: {
            info: '系统运营商配置拒绝连接 Wi-Fi',
            text: '系统运营商配置拒绝连接 Wi-Fi'
        },
        12010: {
            info: '系统其他错误，需要在 errmsg 打印具体的错误原因',
            text: '未知错误~请重试'
        },
        12011: {
            info: '应用在后台无法配置 Wi-Fi',
            text: '请退出后重试~'
        }
    }
};

module.exports = config

