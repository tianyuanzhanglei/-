import Admin from '../../resources/utils/admin'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    admin:{},
    input_one: "",
    input_two: "",
    input_three: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Admin.queryAdmin(options.number,res=>{
      this.setData({
        admin:res.data.objects[0]
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
  input_one: function (e) {
    // console.log(e.detail.value)
    this.setData({
      input_one: e.detail.value
    })
  },
  input_two: function (e) {
    // console.log(e.detail.value)
    this.setData({
      input_two: e.detail.value
    })
  },
  input_three: function (e) {
    // console.log(e.detail.value)
    this.setData({
      input_three: e.detail.value
    })
  },

  btn: function () {
    if (this.data.input_one.length == 0 || this.data.input_two.length == 0 || this.data.input_three.length == 0) {
      wx.showToast({
        title: '请完善信息',
        icon: 'none',
        duration: 3000
      });
      // console.log("请完善信息")
    } else {
      if (this.data.admin.password != this.data.input_one) {
        wx.showToast({
          title: '旧密码输入错误',
          icon: 'none',
          duration: 3000
        });
      } else {
        if (this.data.input_two != this.data.input_three) {
          wx.showToast({
            title: '请重新确认新密码',
            icon: 'none',
            duration: 3000
          });
        } else {
          let admin = this.data.admin
          admin.password = this.data.input_three
          Admin.updateById(admin.id, admin, res => {
            wx.showToast({
              title: '修改成功',
              success() {
                wx.navigateBack({
                  delta: 1,
                })
              }
            })
          })
        }
      }
    }
  }
})