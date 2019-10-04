import readData from '../db/getRepository.js'

module.exports = async (req, res) => {
  console.log('get hit')
  try {
    const result = await readData(req.query.id)
    res(result).code(200)
  } catch (err) {
    console.error(err)
    res(err).code(500)
  }
}