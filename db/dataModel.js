import assert from 'assert'
import uuid from 'uuid'

class Data {
  constructor(props){
    assert(props.data, 'data is required')
    this.id = uuid()
    this.data = props.data
  }
}
module.exports = Data