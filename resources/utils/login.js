import config from 'config'

//查询
let admin = function (number, cb) {
  let tableID = config.TABLE_ID.ADMIN
  let query = new wx.BaaS.Query()
  query.compare('number', '=', number)
  let Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query).find().then(res => {
    cb(res)
  }, err => {

  })
}


//查询
let stu = function (number, cb) {
  let tableID = config.TABLE_ID.STU
  let query = new wx.BaaS.Query()
  query.compare('stuId', '=', number)
  let Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query).find().then(res => {
    cb(res)
  }, err => {

  })
}
module.exports = {
  admin,
  stu
}