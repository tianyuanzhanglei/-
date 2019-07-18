// pages/queryPeople/queryPeople.js
import student from '../../resources/utils/people'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stu:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    student.queryPeople(options.stuId, (res) =>{
      this.setData({
        stu: res.data.objects[0]
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

  },
  btn_modify:function(){
    let stuId=this.data.stu.stuId
    wx.navigateTo({
      url: '../updatePeople/updatePeople?stuId='+stuId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  btn_delete:function(){
    // console.log(this.data.stu)
    student.deleteById(this.data.stu.id,res=>{
      wx.showToast({
        title: '删除成功',
      })
      wx.navigateBack({
        delta: 1,
      })
    })
  }
})