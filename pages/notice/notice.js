// pages/notice/notice.js
import MountGuard from '../../resources/utils/mountGuard'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stu:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    MountGuard.queryStu(options.stuId,res=>{
      console.log(res)
      this.setData({
        stu:res.data.objects
      })
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

  }
})