// pages/experience/experience.js
import MountGuard from '../../resources/utils/mountGuard'
import nowDate from '../../resources/utils/nowDate'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    experience:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.query(options.stuId)
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

  //查询上岗经历
  query:function(stuId){
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
    MountGuard.queryAllByStuId(stuId, start, end,res=>{
      console.log(res.data.objects)
      this.setData({
        experience: res.data.objects
      })
    })
  }

})