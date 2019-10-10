const Data = require('../db/index')
const DataFormat = require('../db/models/dataModel')
const faker = require('faker')

let dataToInsert = []

for(let i = 0; i < 10; i++) {
  let randomData = {
    title: faker.lorem.word(),
    content: `{
        "${faker.lorem.word()}": "${faker.lorem.word()}",
        "${faker.lorem.word()}": "${faker.lorem.word()}",
        "${faker.lorem.word()}": "${faker.lorem.word()}"
      }`,
    type: 'JSON'
  }
  
  dataToInsert.push(new DataFormat(randomData))
}

Data.deleteMany((err) => {
  if(err) {
    console.error(err)
  } else {
    Data.insertMany(dataToInsert, () => {
      if(err) {
        console.error(err)
      } else {
        console.log('database seeded')
      }
    })
  }
})