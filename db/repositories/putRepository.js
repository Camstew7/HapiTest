import Data from '../index'

module.exports = async(targetID, payload) => {
  return await Data.updateOne({id: targetID}, payload)
}