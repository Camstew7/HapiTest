import AWS from  'aws-sdk'

AWS.config.update({
  region
})

module.exports = new AWS.DynamoDB.DocumentClient()