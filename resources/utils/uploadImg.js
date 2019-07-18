
//上传图片
let uploadFile = function (link,cb){
  let ImgFile = new wx.BaaS.File()
  let fileParams = { filePath: link }
  let metaData = { categoryID: '5cc52ef3e80cf634bd6c7b1b' }
  ImgFile.upload(fileParams, metaData).then(res => {
    cb(res)
  }, err => {
  })
}
module.exports = {
  uploadFile
}