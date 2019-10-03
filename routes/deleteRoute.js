import deleteHandler from  '../handlers/deleteHandler.js/index.js'

module.exports = {
  method: 'DELETE',
  path:'/api/data',
  handler: deleteHandler
}