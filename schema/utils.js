const getToken = require("jsonwebtoken")
exports.verToken = function (token) {
  return new Promise((resolve, reject) => {
    const info = getToken.verify(token.split(' ')[1], "123123");
    resolve(info);
  })
}