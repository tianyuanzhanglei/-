// pages/admin_people/admin_people.js
import student from '../../resources/utils/people'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchContent:"",                   //搜索内容
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
  //搜索输入框
  inputStu:function(e){
    // console.log(e.detail.value)
    this.setData({
      searchContent: e.detail.value
    })
  },
  //点击搜索按钮
  btn_search:function(){
    let that=this
    let stuId = this.data.searchContent
    student.queryPeople(stuId,(res)=>{
      if (that.data.searchContent==""){
        wx.showToast({
          title: '请输入学号查询',
          icon: 'none',
          duration: 3000
        });
      }else{
        if (res.data.objects[0] == null) {
          that.setData({
            searchContent: ""
          })
          wx.showToast({
            title: '查无此人',
            icon: 'none',
            duration: 3000
          });
        }else{
          that.setData({
            searchContent: ""
          })
          wx.navigateTo({
            url: '../queryPeople/queryPeople?stuId='+stuId,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      }

    })
  },

  //贫困生认定页面跳转
  add_people:function(){
    wx.navigateTo({
      url: '../addPeople/addPeople',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //岗位设置
  post_plan:function(){
    wx.navigateTo({
      url: '../setPost/setPost',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //二级管理员
  monitor:function(){
    wx.navigateTo({
      url: '../monitor/monitor',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //微信绑定
  binding:function(){
    wx.getStorage({
      key: 'number',
      success: function(res) {
        // console.log(res.data)
        wx.navigateTo({
          url: '../binding_admin/binding_admin?number=' + res.data,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      },
    })
  },
  //导出表格
  export_data:function(){
    wx.navigateTo({
      url: '../export_data/export_data',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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
    wx.getStorage({
      key: 'number',
      success: function (res) {
        // console.log(res.data)
        wx.navigateTo({
          url: '../change_password_admin/change_password_admin?number=' + res.data,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
    })
  },
})