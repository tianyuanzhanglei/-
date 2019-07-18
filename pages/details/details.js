// pages/details/details.js
import MountGuard from '../../resources/utils/mountGuard'
import nowDate from '../../resources/utils/nowDate'
import people from '../../resources/utils/people'
import Apply from '../../resources/utils/apply'
import plan from '../../resources/utils/plan'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stu:[],
    date:"",
    post:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.nowDate(options.post, options.date)
    this.setData({
      date: options.date,
      post: options.post
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
  //移除
  btn:function(e){
    let that=this

    let index = e.currentTarget.dataset.stuindex
   
    MountGuard.deleteById(that.data.stu[index].id,res=>{

      people.queryPeople(that.data.stu[index].stuId, res => {
        console.log(res.data.objects[0])
        let stu = res.data.objects[0];
        stu.frequency--;
        people.updateById(stu.id, stu, res => {

        })
      })
      Apply.queryStu(that.data.date, that.data.stu[index].stuId,res=>{
        let apply = res.data.objects[0]
        apply.select=false;
        Apply.updateApplyById(apply.id,apply,res=>{
          that.nowDate(that.data.post, that.data.date)
        })
      })
    })
  },

  //最新数据
  nowDate:function(post,date){
    MountGuard.queryByDataAndPost(date, post, res => {
      // console.log(res.data.objects)
      let stu = []
      let stu_list = res.data.objects
      var date = nowDate.formatDate(new Date())
      let start = "";
      let end = "";
      if (date.month >= 9) {
        start = date.year + "-09";
        end = date.now;
      } else {
        start = date.year - 1 + "-09";
        end = date.now;
      }
      for (let i = 0; i < stu_list.length; i++) {
        MountGuard.queryAllByStuId(stu_list[i].stuId, start, end, res => {
          stu_list[i].frequency = res.data.objects.length
          stu.push(stu_list[i])
          this.setData({
            stu: stu
          })
        })
      }
    })
  }
})