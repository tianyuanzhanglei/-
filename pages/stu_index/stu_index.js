import MountGuard from '../../resources/utils/mountGuard'
import nowDate from '../../resources/utils/nowDate'
import plan from '../../resources/utils/plan'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    frequency:"",
    plan:{},
    stuId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.frequency(options.stuId)
    plan.queryPlan(res=>{
      console.log(res)
      this.setData({
        plan: res.data.objects[0]
      })
    })
    this.setData({
      stuId: options.stuId
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
    this.refresh()
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
  //通知
  notice:function(){
    let stuId = this.data.stuId
    wx.navigateTo({
      url: '../notice/notice?stuId=' + stuId,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //上岗经历
  btn_experience:function(){
    let stuId=this.data.stuId
    wx.navigateTo({
      url: '../experience/experience?stuId='+stuId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //本人信息
  btn_info:function(){
    let stuId=this.data.stuId
    wx.navigateTo({
      url: '../people_info/people_info?stuId='+stuId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //报名
  signUp:function(){
    let stuId = this.data.stuId
    wx.navigateTo({
      url: '../singUp/singUp?stuId=' + stuId,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })    
  },
  //退出
  exit:function(){
    wx.reLaunch({
      url: '../index/index',
    })
  },
  //微信绑定
  binding: function () {
    wx.navigateTo({
      url: '../binding_stu/binding_stu?stuId=' + this.data.stuId,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //修改密码
  change_password:function(){
    console.log(this.data.stuId)
    wx.navigateTo({
      url: '../change_password_stu/change_password_stu?stuId=' + this.data.stuId,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

//上岗次数
  frequency:function(stuId){

    var date = nowDate.formatDate(new Date())
    let start = "";
    let end = "";
    if (date.month >= 9) {
      start = date.year + "-09";
      end = date.now;
    } else {
      start = date.year - 1 + "-09";
      end = date.now;
    }
    MountGuard.queryAllByStuId(stuId, start, end, res => {
      console.log(res.data.objects)
      this.setData({
        frequency: res.data.objects.length
      })
    })
  },




  refresh:function(){
    let that=this
    setInterval(function () {
      console.log("每一分执行一次")
      plan.queryPlan(res => {
        console.log(res)
        that.setData({
          plan: res.data.objects[0]
        })
      })
    }, 60000) 
  }

})