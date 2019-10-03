import dynoClient from './dynoClient.js'

module.exports = async(target) => {
  const query = {
    TableName: 'theFuckingTable',
    Key: target
  }
  return await dynoClient.GetItem(query)
}