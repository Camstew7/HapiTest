import deleteData from '../db/deleteRepository.js'

module.exports = async (req, res) => {

  try {
    await deleteData(req.query.id)
    res().code(200)
  } catch (err) {
    console.error(err)
    res().code(500)
  }
}