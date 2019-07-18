// pages/singUp/singUp.js
import Apply from '../../resources/utils/apply'
import student from '../../resources/utils/people'
import plan from '../../resources/utils/plan'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuId:"",
    first:"校园卫生队",
    second:"one",
    dispensing:true,
    post:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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
    //岗位详情
    plan.queryPlan(res => {
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
  //申请上岗
  btn_apply:function(){
    if (this.data.post.start){
      Apply.queryStu(this.data.post.date, this.data.stuId, res=>{
        if(res.data.objects.length>0){
          wx.showToast({
            title: '不可重复报名',
            icon: 'none',
            duration: 3000
          });
        }else{
          student.queryPeople(this.data.stuId, res => {
            let name = res.data.objects[0].name
            let apply = {}
            apply.name = name
            apply.post = this.data.first
            apply.stuId = this.data.stuId
            apply.dispensing = this.data.dispensing
            apply.date = this.data.post.date
            Apply.addApply(apply, res => {
              wx.navigateBack({
                delta: 1,
              })
            })
          })
        }
      })
    }else{
      wx.showToast({
        title: '未开始报名',
        icon: 'none',
        duration: 3000
      });
    }

  },
  //第一志愿
  select_first_post:function(e){
    console.log(e.currentTarget.dataset.post)
    this.setData({
      first : e.currentTarget.dataset.post
    })
  },
  //第二志愿
  select_second_post: function (e) {
    console.log(e.currentTarget.dataset.post)
    this.setData({
      second: e.currentTarget.dataset.post
    })
  },
  //是否调剂
  isDispensing:function(){
    let dispensing = this.data.dispensing
    this.setData({
      dispensing: !dispensing
    })
  }
})