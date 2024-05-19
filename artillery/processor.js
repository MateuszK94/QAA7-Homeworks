const formData = require('form-data');
const fs = require('fs');

function setupMultipartFormData(requestParams, context, ee, next) {
  const form = new formData();
  form.append('file', fs.createReadStream(__dirname + '/photo.jpg'));
  requestParams.body = form;
  return next();
}

module.exports = {
  setupMultipartFormData,
}