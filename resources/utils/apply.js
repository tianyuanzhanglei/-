import config from 'config'
//申请上岗
let addApply = function (obj, cb) {
  let tableID = config.TABLE_ID.APPLY
  let Active = new wx.BaaS.TableObject(tableID)
  let Record = Active.create()
  Record.set(obj).save().then(res => {
    cb(res)
  }, err => {
    
  })
}


//查询(日期)
let queryAll=function(date,cb){
  let query = new wx.BaaS.Query()
  let tableID = config.TABLE_ID.APPLY
  let Product = new wx.BaaS.TableObject(tableID)
  query.compare('date', '=', date)
  Product.setQuery(query).limit(1000).orderBy('created_at').find().then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}



//更新申请表
let updateApplyById = function (id, obj, cb) {
  let tableID = config.TABLE_ID.APPLY
  let Contact = new wx.BaaS.TableObject(tableID)

  let product = Contact.getWithoutData(id)
  product.set(obj)
  product.update().then(res => {
    cb(res)
  }, err => {
    // err
  })
}

//查询(日期,学号)
let queryStu = function (date,stuId, cb) {
  let query = new wx.BaaS.Query()
  let tableID = config.TABLE_ID.APPLY
  let Product = new wx.BaaS.TableObject(tableID)
  query.compare('date', '=', date)
  query.compare('stuId', '=', stuId)
  Product.setQuery(query).limit(1000).orderBy('created_at').find().then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}


module.exports = {
  addApply,
  queryAll,
  updateApplyById,
  queryStu
}