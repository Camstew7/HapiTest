const mongoose = require('mongoose')

if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost:27017/fetcher')
}

const dataSchema = mongoose.Schema({
  id: Number,
  title: String,
  content: String,
  type: String
})

const Data = mongoose.model('Data', dataSchema)

module.exports = Data