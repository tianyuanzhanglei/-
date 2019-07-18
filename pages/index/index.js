// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.login({
      
    })
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
  login_stu:function(){
    wx.navigateTo({
      url: '../login/login?identity=' + 1,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  login_admin: function () {
    wx.navigateTo({
      url: '../login/login?identity=' + 0,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  project:function(){
    wx.navigateTo({
      url: '../project/project',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  post:function(){
    wx.navigateTo({
      url: '../post/post',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  help:function(){
    wx.navigateTo({
      url: '../help/help',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})