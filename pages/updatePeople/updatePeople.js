import student from '../../resources/utils/people'
import upload from '../../resources/utils/uploadImg'
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
    console.log(options.stuId)
    student.queryPeople(options.stuId, (res) => {
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
  //更新信息
  update_stu:function(){
    let stu = this.data.stu;
    upload.uploadFile(stu.img, (res) => {
      stu.img = res.data.path
    })
    stu.password = this.data.stu.stuId
    console.log(stu)
    student.updateById(stu.id,stu,(res)=>{
      wx.navigateBack({
        delta: 2,
      })
      wx.showToast({
        title: '更新成功',
      })
    })
  },

  //姓名
  getName: function (e) {
    this.setData({
      "stu.name": e.detail.value
    })
  },
  //性别
  getSex: function (e) {
    this.setData({
      "stu.sex": e.detail.value
    })
  },
  //班级
  getClassName: function (e) {
    this.setData({
      "stu.className": e.detail.value
    })
  },
  //学号
  getStuId: function (e) {
    this.setData({
      "stu.stuId": e.detail.value
    })
  },
  //宿舍号
  getDormitoryId: function (e) {
    this.setData({
      "stu.dormitoryId": e.detail.value
    })
  },
  //联系电话
  getTel: function (e) {
    this.setData({
      "stu.tel": e.detail.value
    })
  },
  //贫困等级
  getGrade: function (e) {
    this.setData({
      "stu.grade": e.detail.value
    })
  },
  //工行卡号
  getGardNumber: function (e) {
    this.setData({
      "stu.gardNumber": e.detail.value
    })
  },
  //班级负责人
  getMonitor: function (e) {
    this.setData({
      "stu.monitor": e.detail.value
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
          "stu.img": res.tempFilePaths[0]
        })
      }
    })
  },
})