import AWS from  'aws-sdk'
//const region = process.env.REGION

console.log('spinning up dynamo')
// AWS.config.update({
//   region
// })
module.exports = new AWS.DynamoDB.DocumentClient()