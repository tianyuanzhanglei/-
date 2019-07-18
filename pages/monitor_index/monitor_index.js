// pages/monitor_index/monitor_index.js
import student from '../../resources/utils/people'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stu:"",
    number:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    student.queryPeopleByclass(options.number, res => {
      console.log(res.data.objects)
      this.setData({
        stu: res.data.objects
      })
    })
    this.setData({
      number:options.number
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
  //所有贫困生
  details:function(){
    wx.navigateTo({
      url: '../stuList/stuList?number=' + this.data.number,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //贫困生认定页面跳转
  add_people: function () {
    wx.navigateTo({
      url: '../addPeople_monitor/addPeople_monitor?number=' + this.data.number,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //微信绑定
  binding: function () {
    wx.navigateTo({
      url: '../binding_admin/binding_admin?number=' + this.data.number,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  //退出
  exit: function () {
    wx.reLaunch({
      url: '../index/index',
    })
  },
  //修改密码
  change_password: function () {
   
    wx.navigateTo({
      url: '../change_password_admin/change_password_admin?number=' + this.data.number,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
})