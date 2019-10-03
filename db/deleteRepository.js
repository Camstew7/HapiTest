import dynoClient from './dynoClient.js'

module.exports = async(target) => {
  const query = {
    TableName: 'theFuckingTable',
    //something to refer to the target, probably a key
    Key: target

  }
  return await dynoClient.DeleteItem(query)
}