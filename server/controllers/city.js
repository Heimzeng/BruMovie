const DB = require('./dbindex')

//根据provinceId获取该province的cities
module.exports = {
  get: async (ctx, next) => {
    var result = await DB.raw('SELECT * FROM city WHERE province_id = ' + ctx.request.query.provinceId).then((res) => {
      return res;
    })
    ctx.state.data = {
      resultCode: 0,
      values: result[0]
    }
  }
}