import config from 'config'

//安排上岗
let arrange = function (obj, cb) {
  let tableID = config.TABLE_ID.ARRANGE
  let Active = new wx.BaaS.TableObject(tableID)
  let Record = Active.create()
  Record.set(obj).save().then(res => {
    cb(res)
  }, err => {
    
  })
}

//根据日期岗位查询

let queryByDataAndPost = function (date,post, cb) {
  let query = new wx.BaaS.Query()
  let tableID = config.TABLE_ID.ARRANGE
  let Product = new wx.BaaS.TableObject(tableID)
  query.compare('date', '=', date)
  query.compare('post', '=', post)
  Product.setQuery(query).limit(1000).orderBy('created_at').find().then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}

//根据日期查询

let queryByDate = function (date,  cb) {
  let query = new wx.BaaS.Query()
  let tableID = config.TABLE_ID.ARRANGE
  let Product = new wx.BaaS.TableObject(tableID)
  query.compare('date', '=', date)
  Product.setQuery(query).limit(1000).orderBy('created_at').find().then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}



//查询(学号&&时间)
let queryAllByStuId = function (stuId, start, end, cb) {
  let query = new wx.BaaS.Query()
  let tableID = config.TABLE_ID.ARRANGE
  let Product = new wx.BaaS.TableObject(tableID)
  query.compare('stuId', '=', stuId)
  query.compare('date', '>=', start)
  query.compare('date', '<=', end)
  Product.setQuery(query).limit(1000).find().then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}

//查询(学号)
let queryStu = function (stuId,cb) {
  let query = new wx.BaaS.Query()
  let tableID = config.TABLE_ID.ARRANGE
  let Product = new wx.BaaS.TableObject(tableID)
  query.compare('stuId', '=', stuId)
  Product.setQuery(query).orderBy('-created_at').find().then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}



let deleteById = function (recordID,cb){
  let tableID = config.TABLE_ID.ARRANGE
  let Product = new wx.BaaS.TableObject(tableID)
  Product.delete(recordID).then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })

}

module.exports = {
  arrange,
  queryByDataAndPost,
  queryAllByStuId,
  deleteById,
  queryByDate,
  queryStu
}