import Data from '../index'
import DataFormat from '../models/dataModel.js'

module.exports = async(payload) => {
  const data = new DataFormat(payload)
  return await Data.create(data)
}