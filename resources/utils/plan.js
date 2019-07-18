import config from 'config'
//查询
let queryPlan = function (cb) {
  let query = new wx.BaaS.Query()
  let tableID = config.TABLE_ID.PLAN
  let Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query).find().then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}

//更新
let updatePlan = function (id, obj, cb) {
  let tableID = config.TABLE_ID.PLAN
  let Contact = new wx.BaaS.TableObject(tableID)

  let product = Contact.getWithoutData(id)
  product.set(obj)
  product.update().then(res => {
    wx.showToast({
      title: '提交成功',
    })
    cb(res)
  }, err => {
    // err
  })
}

module.exports = {
  queryPlan,
  updatePlan
}