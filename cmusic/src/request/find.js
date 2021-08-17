/*
 * @Author: your name
 * @Date: 2021-08-17 14:26:57
 * @LastEditTime: 2021-08-17 19:32:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cmusic\src\request\http.js
 */
import {api} from "./service";
const find ={
    // 手机登录接口 参数phone password
    loginApi(data){
        return api.post("api/login/cellphone",data)
    },
    // 邮箱登录 参数 email password
    emailApi(data){
        return api.post("api/login",data)
    },
    //手机发送验证码 参数phone
    codeApi(data){
        return api.post("api/captcha/sent",data)
    },    
    // 验证验证码 参数phone captcha
    sureApi(data){
        return api.post("api/captcha/verify",data)
    },
    // 注册(修改密码) 参数 验证码:captcha phone:手机号码 password:密码 nickname:昵称
    regisApi(data){
        return api.post("api/register/cellphone",data)
    },
    // 检查手机号是否已经注册 参数：手机号码phone
    isRegisApi(data){
        return api.post("api/cellphone/existence/check",data)
    },
    // 初始化昵称 参数 nickname
    initNickname(data){
        return api.post("api/activate/init/profile",data)
    },
    // 更换绑定手机 参数：原手机验证码:oldcaptcha 新手机验证码captcha 手机号码:phone 国家区号，默认86ctcode
    changePhone(data){
        return api.post("api/rebind",data)
    },
    // 退出登录
    exitLogin(){
        return api.post("api/logout")
    },
    // 获取登录状态
    getLoginState(){
        return api.post("api/login/status")
    },
    // 搜索说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
    // 参数 关键词keywords
    searchApi(data){
        return api.get("api/cloudsearch",data)
    },
    // 热搜列表
    hotNewsApi(){
      return api.get("api/search/hot/detail") 
    },
    //获取视频标签列表
    getVideoTitle(){
        return api.get("api/video/group/list") 
    },
    // 获取推荐视频列表
    getAdviceVideo(){
        return api.get("api/video/timeline/recommend")
    },
    // 音乐日历
    musicCalender(){
        return api.get("api/calendar")
    }
}
export default find;