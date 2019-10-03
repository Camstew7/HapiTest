import dynoClient from './dynoClient.js'
import Data from './dataModel.js'

module.exports = async(payload) => {
  const data = new Data(payload)
  const query = {
    TableName: 'theFuckingTable',
    item: data
    //expression attribute names?
    //ConditionExpression?
  }
  return await dynoClient.UpdateItem(query)
}