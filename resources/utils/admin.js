import config from 'config'


//添加班长
let addMonitor= function (obj, cb) {
  let tableID = config.TABLE_ID.ADMIN
  let Active = new wx.BaaS.TableObject(tableID)
  let Record = Active.create()
  Record.set(obj).save().then(res => {
    cb(res)
  }, err => {
    if (err.code === 400) {
      wx.showToast({
        title: '该班级负责人已存在',
        icon: 'none',
        duration: 3000
      })
    }
  })
}

//查询(等级)
let queryAll = function (cb) {
  let query = new wx.BaaS.Query()
  let tableID = config.TABLE_ID.ADMIN
  let Product = new wx.BaaS.TableObject(tableID)
  query.compare('grade', '=', 2)
  Product.setQuery(query).limit(1000).orderBy('-created_at').find().then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}
//删除
let deleteById = function (recordID, cb) {
  let tableID = config.TABLE_ID.ADMIN
  let Product = new wx.BaaS.TableObject(tableID)
  Product.delete(recordID).then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}


//通过账号获取管理员信息
let queryAdmin = function (number, cb) {
  let tableID = config.TABLE_ID.ADMIN
  let query = new wx.BaaS.Query()
  query.compare('number', '=', number)
  let Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query).find().then(res => {
    cb(res)
  }, err => {

  })
}


//微信绑定
let updateById = function (id, obj, cb) {
  let tableID = config.TABLE_ID.ADMIN
  let Contact = new wx.BaaS.TableObject(tableID)
  let product = Contact.getWithoutData(id)
  product.set(obj)
  product.update().then(res => {
    cb(res)
  }, err => {
    // err
  })
}

module.exports = {
  addMonitor,
  queryAll,
  deleteById,
  updateById,
  queryAdmin
}