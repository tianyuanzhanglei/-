// pages/login/login.js
import login from '../../resources/utils/login'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identity:null,
    number:null,
    password:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.identity)
    this.setData({
      identity:options.identity
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getNumber:function(e){
    // console.log(e.detail.value)
    this.setData({
      number: e.detail.value
    })
  },
  getPassword:function(e){
    // console.log(e.detail.value)
    this.setData({
      password: e.detail.value
    })
  },
  //登录验证
  login_verification:function(){
    if (this.data.number == "" || this.data.password == ""){
      wx.showToast({
        title: '账号或密码为空',
        icon: 'none',
        duration: 3000
      });
    }else{

      let number = this.data.number
      //管理员登录
      if (this.data.identity==0){
        login.admin(number,(res)=>{
          console.log(number,res.data.objects)
          if (res.data.objects[0]==null){
            wx.showToast({
              title: '账号或密码错误',
              icon: 'none',
              duration: 3000
            });
          }else{
            // console.log(res.data.objects[0])
            if (this.data.password == res.data.objects[0].password){
              if (res.data.objects[0].uid==null){
                console.log("没有绑定")
                //缓存账号
                wx.setStorage({
                  key: 'number',
                  data: number,
                  success: function (res) { },
                  fail: function (res) { },
                  complete: function (res) { },
                })
                if (res.data.objects[0].grade == 1) {
                  console.log("管理员")
                  wx.switchTab({
                    url: '../admin_index/admin_index',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
                  })
                } else if (res.data.objects[0].grade == 2) {
                  console.log("负责人")
                  wx.reLaunch({
                    url: '../monitor_index/monitor_index?number=' + number,
                  })
                }
              } else if (res.data.objects[0].uid == wx.BaaS.storage.get('uid')){
                //缓存账号
                wx.setStorage({
                  key: 'number',
                  data: number,
                  success: function (res) { },
                  fail: function (res) { },
                  complete: function (res) { },
                })
                if (res.data.objects[0].grade == 1) {
                  console.log("管理员")
                  wx.switchTab({
                    url: '../admin_index/admin_index',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
                  })
                } else if (res.data.objects[0].grade == 2) {
                  console.log("负责人")
                  wx.reLaunch({
                    url: '../monitor_index/monitor_index?number=' + number,
                  })
                }
                
              } else{
                console.log("不是本微信")
                wx.showToast({
                  title: '警告：绑定账号异常',
                  icon: 'none',
                  duration: 3000
                });
              }
              
            }else{
              wx.showToast({
                title: '账号或密码错误',
                icon: 'none',
                duration: 3000
              });
            }
          }
        })
      }
      //学生登录
      if (this.data.identity == 1) {
        login.stu(number, (res) => {
          // console.log(res)
          if (res.data.objects[0] == null) {
            wx.showToast({
              title: '账号或密码错误',
              icon: 'none',
              duration: 3000
            });
          } else {
            // console.log(res.data.objects[0])
            if (this.data.password == res.data.objects[0].password) {
              if (res.data.objects[0].uid == null) {
                wx.reLaunch({
                  url: '../stu_index/stu_index?stuId=' + number,
                })
              } else if (res.data.objects[0].uid == wx.BaaS.storage.get('uid')) {
                console.log("登陆成功")
                wx.reLaunch({
                  url: '../stu_index/stu_index?stuId=' + number,
                })
              }else{
                wx.showToast({
                  title: '警告：绑定账号异常',
                  icon: 'none',
                  duration: 3000
                });
              }
            } else {
              wx.showToast({
                title: '账号或密码错误',
                icon: 'none',
                duration: 3000
              });
            }
          }
        })
      }
    }
  }
})