// pages/addPeople/addPeople.js
import student from '../../resources/utils/people'
import upload from '../../resources/utils/uploadImg'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      img: "https://cloud-minapp-18564.cloud.ifanrusercontent.com/1hRZ4ZvfJ4JaLceS.png",
      name: "",
      sex: "",
      className: "",
      stuId: "",
      dormitoryId: "",
      tel: "",
      grade: "",
      gardNumber: "",
      monitor: ""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.number)
    this.setData({
      "info.className":options.number
    })
    wx.BaaS.login(false)
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
  //点击录入信息
  add_stu: function () {
    let stu = this.data.info;
    console.log(stu)
    upload.uploadFile(stu.img, (res) => {
      stu.img = res.data.path
      stu.password = this.data.info.stuId
      student.addPeople(stu, (res) => {
        console.log(res)
        wx.navigateBack({
          delta: 1,
        })
      })
    })
  },



  //姓名
  getName: function (e) {
    this.setData({
      "info.name": e.detail.value
    })
  },
  //性别
  getSex: function (e) {
    this.setData({
      "info.sex": e.detail.value
    })
  },
  //班级
  getClassName: function (e) {
    this.setData({
      "info.className": e.detail.value
    })
  },
  //学号
  getStuId: function (e) {
    this.setData({
      "info.stuId": e.detail.value
    })
  },
  //宿舍号
  getDormitoryId: function (e) {
    this.setData({
      "info.dormitoryId": e.detail.value
    })
  },
  //联系电话
  getTel: function (e) {
    this.setData({
      "info.tel": e.detail.value
    })
  },
  //贫困等级
  getGrade: function (e) {
    this.setData({
      "info.grade": e.detail.value
    })
  },
  //工行卡号
  getGardNumber: function (e) {
    this.setData({
      "info.gardNumber": e.detail.value
    })
  },
  //班级负责人
  getMonitor: function (e) {
    this.setData({
      "info.monitor": e.detail.value
    })
  },
  //照片
  getImg: function () {
    let that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success(res) {
        that.setData({
          "info.img": res.tempFilePaths[0]
        })
      }
    })
  },
})