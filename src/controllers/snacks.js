const dataModel = require('../models/snacks')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAll = (req, res, next) => {
  //const limit = req.query.limit  //will never need a limit on getting all snacks
  dataModel.getAll()               //dataModel.getAll(limit)
  .then((data) => {
    res.status(200).json({ data })
  })
  .catch(next)
}

module.exports = { getAll }
