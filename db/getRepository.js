import dynoClient from './dynoClient.js'

module.exports = async(target) => {
  const query = {
    TableName: 'theFuckingTable',
    Key: target
  }
  console.log('getting from dynamo')
  return await dynoClient.GetItem(query)
}