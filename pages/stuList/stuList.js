import student from '../../resources/utils/people'
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

    student.queryPeopleByclass(options.number,res=>{
      // console.log(res.data.objects)
      this.setData({
        stu: res.data.objects
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
  people:function(e){
    // console.log(e.currentTarget.dataset.stuindex)
    let index = e.currentTarget.dataset.stuindex;
    wx.navigateTo({
      url: '../updatePeople_monitor/updatePeople_monitor?stuId='+this.data.stu[index].stuId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})