import postHandler from  '../handlers/postHandler.js/index.js'

module.exports = {
  method: 'POST',
  path:'/api/data',
  handler: postHandler
}