import createData from '../db/postRepository.js'

module.exports = async (req, res) => {
  try {
    await createData(req.body.data)
    res().code(200)
  } catch (err) {
    console.error(err)
    res(err).code(500)
  }
}