const assert = require('assert')
const uuid = require('uuid')

class DataFormat {
  constructor(props){
    assert(props.content, 'data is required')
    this.id = uuid()
    this.title = props.title
    this.content = props.data
    this.type = props.type
  }
}
module.exports = DataFormat