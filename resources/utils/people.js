import config from 'config'
//添加贫困生
let addPeople = function (obj, cb) {
  let tableID = config.TABLE_ID.STU
  let Active = new wx.BaaS.TableObject(tableID)
  let Record = Active.create()
  Record.set(obj).save().then(res => {
    cb(res)
  }, err => {
    if (err.code === 400) {

      wx.showToast({
        title: '该同学已存在',
        icon: 'none',
        duration: 3000
      })
    }
  })
}
//通过贫困生学号获取贫困生
let queryPeople=function(stuId,cb){
  let tableID = config.TABLE_ID.STU
  let query = new wx.BaaS.Query()
  query.compare('stuId', '=', stuId)
  let Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query).find().then(res => {
    cb(res)
  }, err => {

  })
}


//更新贫困生信息
let updateById = function (id, obj, cb) {
  let tableID = config.TABLE_ID.STU
  let Contact = new wx.BaaS.TableObject(tableID)

  let product = Contact.getWithoutData(id)
  product.set(obj)
  product.update().then(res => {
    cb(res)
  }, err => {
    // err
  })
}

//查询
let queryAll = function (cb) {
  let query = new wx.BaaS.Query()
  let tableID = config.TABLE_ID.STU
  let Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query).limit(1000).orderBy('created_at').find().then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}

//查询
let queryAllShow = function (cb) {
  let query = new wx.BaaS.Query()
  let tableID = config.TABLE_ID.STU
  let Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query).limit(1000).orderBy('frequency').find().then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })
}


//通过班级获取贫困生
let queryPeopleByclass = function (className, cb) {
  let tableID = config.TABLE_ID.STU
  let query = new wx.BaaS.Query()
  query.compare('className', '=', className)
  let Product = new wx.BaaS.TableObject(tableID)
  Product.setQuery(query).limit(1000).find().then(res => {
    cb(res)
  }, err => {

  })
}

let deleteById = function (recordID, cb) {
  let tableID = config.TABLE_ID.STU
  let Product = new wx.BaaS.TableObject(tableID)
  Product.delete(recordID).then(res => {
    // success
    cb(res)
  }, err => {
    // err
  })

}

module.exports = {
  addPeople,
  queryPeople,
  updateById,
  queryAll,
  queryAllShow,
  deleteById,
  queryPeopleByclass
}