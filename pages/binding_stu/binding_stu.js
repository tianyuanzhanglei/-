// pages/binding_stu/binding_stu.js
import student from '../../resources/utils/people'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.stuId)
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
  btn: function () {
    student.queryPeople(this.data.stuId, res => {
      // console.log(res.data.objects[0])
      let stu = res.data.objects[0]
      // console.log(wx.BaaS.storage.get('uid'))
      stu.uid = wx.BaaS.storage.get('uid')
      student.updateById(res.data.objects[0].id, stu, res => {
        wx.showToast({
          title: '绑定成功',
        })
      })
    })
  }
})