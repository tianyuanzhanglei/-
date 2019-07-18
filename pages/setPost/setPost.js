// pages/setPost/setPost.js
import plan from '../../resources/utils/plan'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:{
      one:"",
      two:"",
      three:"",
      four:"",
      date:"",
      start:false
    },
    
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
    plan.queryPlan(res=>{
      // console.log(res.data.objects[0])
      this.setData({
        post: res.data.objects[0]
      })
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
  //设置人数
  input_one:function(e){
    console.log(e.detail.value)
    this.setData({
      "post.one": e.detail.value
    })
  },
  input_two: function (e) {
      this.setData({
        "post.two": e.detail.value
      })
  },
  input_three: function (e) {
    this.setData({
      "post.three": e.detail.value
    })
  },
  input_four: function (e) {
      this.setData({
        "post.four": e.detail.value
      })
  },
  //选择月份
  bindDateChange: function (e) {
    this.setData({
      "post.date": e.detail.value
    })
  },
  //通道开关
  bindStart:function(){
    this.setData({
      "post.start": !this.data.post.start
    })
  },
  btn:function(){
    let id = this.data.post.id
    let post={
      one:this.data.post.one,
      two: this.data.post.two,
      three: this.data.post.three,
      four: this.data.post.four,
      date: this.data.post.date,
      start: this.data.post.start
    }
    plan.updatePlan(id,post,res=>{
      console.log(res)
    })
  }
})