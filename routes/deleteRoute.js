import deleteHandler from  '../handlers/deleteHandler.js'

module.exports = {
  method: 'DELETE',
  path:'/api/data',
  handler: deleteHandler
}