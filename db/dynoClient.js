import AWS from  'aws-sdk'
const region = process.env.REGION

AWS.config.update({
  region
})

module.exports = new AWS.DynamoDB.DocumentClient()