import Data from '../index'

module.exports = async(targetID) => {
  
  return await Data.deleteOne({id: targetID})
}