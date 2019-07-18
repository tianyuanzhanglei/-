// pages/monitor/monitor.js
import Admin from '../../resources/utils/admin'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    monitor: [],
    classId:"",
    show:true
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
    this.query()
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
  //查询
  query: function () {
    let that=this
    Admin.queryAll(res => {
      console.log(res.data.objects)
      that.setData({
        monitor: res.data.objects
      })
    })
  },



  //新建
  build:function(){
    this.setData({
      show:false
    })
  },
  //取消
  cancel:function(){
    this.setData({
      show: true
    })
  },
  //删除
  delete_monitor: function (e) {
    console.log("删除")
    let index = e.currentTarget.dataset.index
    Admin.deleteById(this.data.monitor[index].id, res => {
      this.query()
    })
  },
  //密码复制
  copy:function(e){
    let index = e.currentTarget.dataset.index
    // console.log(this.data.monitor[index].password)
    wx.setClipboardData({
      data: this.data.monitor[index].password,
    })
  },

  //获取班级负责人班号
  input_num:function(e){
    this.setData({
      classId: e.detail.value
    })
  },
  //创建班级负责人
  establish:function(){
    let password=Math.floor((Math.random())*100000000)
    let monitor={}
    monitor.number = this.data.classId
    monitor.password =String(password)
    Admin.addMonitor(monitor,res=>{
      this.query()
      this.setData({
        show: true
      })
    })
  }
})