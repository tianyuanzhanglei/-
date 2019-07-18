
function formatDate(date) {

  var year = date.getFullYear()

  var month = date.getMonth() + 1

  var date={}

  date.year = year

  date.month=month

  date.now = [year, month].map(formatNumber).join('-') 

  return date

}


function formatNumber(n) {

  n = n.toString()

  return n[1] ? n : '0' + n

}

module.exports = {
  formatDate
}