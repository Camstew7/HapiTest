import postHandler from  '../handlers/postHandler.js'

module.exports = {
  method: 'POST',
  path:'/api/data',
  handler: postHandler
}