import config from 'config'


//查询
let queryAll = function (cb) {
  let query = new wx.BaaS.Query()
  let tableID = config.TABLE_ID.AD
  let Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query).limit(1000).find().then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}

module.exports = {
  queryAll
}