const dataModel = require('../models/reviews')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAll = (req, res, next) => {
  dataModel.getAll(req.params.id, req.query.limit)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

const getOne = (req, res, next) => {
  dataModel.getOne(req.params.id, req.params.reviewId)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

const create = (req, res, next) => {
  // if (result.errors) return next({ status: 400, message: `Could not create new `, errors: result.errors })
  dataModel.create(req.params.id, 1, req.body)
  .then((data) => res.status(201).json({ data }))
  .catch(next)
}

const modify = (req, res, next) => {
  dataModel.modify(req.params.id, req.params.reviewId, 1, req.body)
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

const remove = (req, res, next) => {
  dataModel.remove(req.params.reviewId)  //need to remove id prior to returning to front end?
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

module.exports = { getAll, getOne, create, modify, remove }
