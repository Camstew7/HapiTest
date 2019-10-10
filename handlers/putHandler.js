import updateData from '../db/repositories/putRepository'

module.exports = async (req, res) => {
  try {
    await updateData(req.query.id)
    res().code(200)
  } catch (err) {
    console.error(err)
    res().code(500)
  }
}