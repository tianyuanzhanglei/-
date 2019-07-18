import Apply from '../../resources/utils/apply'
import plan from '../../resources/utils/plan'
import people from '../../resources/utils/people'
import MountGuard from '../../resources/utils/mountGuard'
import nowDate from '../../resources/utils/nowDate'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:{},            //岗位情况
    one:"",
    two:"",
    three:"",
    four:"",

    stu:[],
    stu_arrange:[],
    stu_category:[
      { post: "校园卫生队",  show:true  },
      { post: "教学楼服务队", show: true },
      { post: "校园保洁队", show: true },
      { post: "龙山美化队", show: true },
    ],
    all_stu:[],
    disobedience_stu:[],
    disobedience: {show: true },
    all: { show: false},
    array: ['校园卫生队', '教学楼服务队', '校园保洁队', '龙山美化队'],

    //总人数
    all_stu_num:""
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

    this.nowData()
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
  //上岗情况
  nav:function(e){
    let post = e.currentTarget.dataset.post
    let date = this.data.post.date
    wx.navigateTo({
      url: '../details/details?post='+post+"&date="+date,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },




  //选人
  bind_check:function(e){
    let box = e.currentTarget.dataset.box
    let stuindex = e.currentTarget.dataset.stuindex
    this.setData({
      ["stu_arrange[" + box + "][" + stuindex + "].check"]: !this.data.stu_arrange[box][stuindex].check
    })
  },
  //展示
  bind_show:function(e){
    let box = e.currentTarget.dataset.box
    console.log(box)
      this.setData({
        ["stu_category[" + box + "].show"]: !this.data.stu_category[box].show
      })
  },
  //不服从调剂
  bind_show_disobedience:function(){
    this.setData({
      "disobedience.show": !this.data.disobedience.show
    })
  },
  //全部成员
  bind_show_all:function(){
    this.setData({
      "all.show": !this.data.all.show
    })
  },
  //确认提交
  btn_arrange:function(){
    let stu_arrange = this.data.stu_arrange
    for (let i = 0; i < stu_arrange.length;i++){
      for (let k = 0; k < stu_arrange[i].length; k++){
        // console.log(stu_arrange[i][k])
        if (stu_arrange[i][k].check){
          let mountGuard = {}
            mountGuard.date = stu_arrange[i][k].date,
            mountGuard.post = stu_arrange[i][k].post,
            mountGuard.stuId = stu_arrange[i][k].stuId,
            mountGuard.name = stu_arrange[i][k].name
          // console.log(mountGuard)
          MountGuard.arrange(mountGuard, res => {
            // console.log(res)
          })
          stu_arrange[i][k].select = true
          Apply.updateApplyById(stu_arrange[i][k].id, stu_arrange[i][k], res => {
            this.nowData()
          })

          people.queryPeople(stu_arrange[i][k].stuId,res=>{
            console.log(res.data.objects[0])
            let stu=res.data.objects[0];
            stu.frequency++;
            people.updateById(stu.id,stu,res=>{

            })
          })
        }
      }
    }
  },



  //最新数据
  nowData:function(){
    people.queryAllShow(res => {
      let stu_list = res.data.objects
      // console.log(res.data.objects)
      this.setData({
        all_stu: res.data.objects
      })
    })
    //全部
    // people.queryAll(res=>{
    //   let stu_list = res.data.objects
    //   console.log(res.data.objects)
    //   this.setData({
    //     stu_all_num: res.data.objects.length
    //   })
    //   var date = nowDate.formatDate(new Date())
    //   let start="";
    //   let end="";
    //   if(date.month>=9){
    //     start = date.year + "-09";
    //     end=date.now;
    //   }else{
    //     start = date.year-1+"-09";
    //     end = date.now;
    //   }
    //   //查询每个人本学年上岗次数
    //   for (let i = 0; i < stu_list.length;i++){
    //     MountGuard.queryAllByStuId(stu_list[i].stuId,start,end,res=>{
    //       stu_list[i].frequency = res.data.objects.length
    //       people.updateById(stu_list[i].id, stu_list[i], res => {
    //         people.queryAllShow(res => {
    //           this.setData({
    //             all_stu: res.data.objects
    //           })
    //           console.log(res.data.objects)
    //         })
    //       })
    //     })
    //   }     
    // })


    //上岗情况
    plan.queryPlan(res => {
      this.setData({
        post: res.data.objects[0]
      })
      MountGuard.queryByDataAndPost(res.data.objects[0].date, "校园卫生队", res => {
        // console.log(res.data.objects)
        this.setData({
          one: res.data.objects.length
        })
      })
      MountGuard.queryByDataAndPost(res.data.objects[0].date, "教学楼服务队", res => {
        // console.log(res.data.objects)
        this.setData({
          two: res.data.objects.length
        })
      })
      MountGuard.queryByDataAndPost(res.data.objects[0].date, "校园保洁队", res => {
        this.setData({
          three: res.data.objects.length
        })
      })
      MountGuard.queryByDataAndPost(res.data.objects[0].date, "龙山美化队", res => {
        this.setData({
          four: res.data.objects.length
        })
      })
      //岗位人员
      // console.log(res.data.objects[0].date)
      Apply.queryAll(res.data.objects[0].date, res => {
        let stu = res.data.objects
        let stu_arrange = []
        stu_arrange[0] = new Array();
        stu_arrange[1] = new Array();
        stu_arrange[2] = new Array();
        stu_arrange[3] = new Array();
        let disobedience_stu = [];

        for (var i = 0; i < stu.length; i++) {
          if (stu[i].select) {

          } else {
            if (stu[i].dispensing) {
              if (stu[i].post == "校园卫生队") {
                stu_arrange[0].push(stu[i])
              } else if (stu[i].post == "教学楼服务队") {
                stu_arrange[1].push(stu[i])
              } else if (stu[i].post == "校园保洁队") {
                stu_arrange[2].push(stu[i])
              } else if (stu[i].post == "龙山美化队") {
                stu_arrange[3].push(stu[i])
              }
            } else {
              disobedience_stu.push(stu[i])
            }
          }
          this.setData({
            stu,
            "stu_arrange[0]": stu_arrange[0],
            "stu_arrange[1]": stu_arrange[1],
            "stu_arrange[2]": stu_arrange[2],
            "stu_arrange[3]": stu_arrange[3],
            disobedience_stu: disobedience_stu,

            
          })
        }

      })
    })
  },
  //服从调剂的调剂
  btn_dispensing_obey:function(e){
    
    let box = e.currentTarget.dataset.box
    let stuindex = e.currentTarget.dataset.stuindex
    let stu = this.data.stu_arrange[box][stuindex]
    // console.log(this.data.array[e.detail.value])
    // console.log(stu)
    stu.post = this.data.array[e.detail.value]
    Apply.updateApplyById(stu.id, stu, res => {
      this.nowData()
    })
  },

//不服从调剂的调剂
  btn_dispensing_disobedience:function(e){
    let stuindex = e.currentTarget.dataset.stuindex
    let stu = this.data.disobedience_stu[stuindex]
    // console.log(this.data.array[e.detail.value])
    stu.post = this.data.array[e.detail.value]
    stu.dispensing=true
    Apply.updateApplyById(stu.id,stu,res=>{
      this.nowData()
    })
  },
//所有名单调剂
  btn_dispensing_all:function(e){
    let that=this
    let stuindex = e.currentTarget.dataset.stuindex
    let stu = that.data.all_stu

    //查看是否已申请
    // console.log(this.data.post)
    Apply.queryStu(that.data.post.date, stu[stuindex].stuId,res=>{
      // console.log(stu[stuindex])
      if (res.data.objects.length==0){
        // console.log("kong")
        let apply = {}
        apply.name = stu[stuindex].name
        apply.post = this.data.array[e.detail.value]
        apply.stuId = stu[stuindex].stuId
        apply.dispensing = true
        apply.date = that.data.post.date
        Apply.addApply(apply,res=>{
        })
        that.nowData()
      }else{
        wx.showToast({
          title: '本月已申请',
          duration: 2000,
        })
      }
    })
  }
})