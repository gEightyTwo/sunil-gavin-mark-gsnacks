const db = require('../../db/knex')

//create Oop here?

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAll = (snackId, limit) => {
  return (
    db('reviews')
    .where({ snack_id: snackId })
  )
}

const getOne = (snackId, reviewId) => {
  console.log(snackId,reviewId)
  return (
    db('reviews')
    .where({ snack_id: snackId, id: reviewId })
  )
}

const create = (id, body) => {

}

const modify = (id, reviewId, body) => {

}

const remove = (id, reviewId) => {

}

module.exports = { getAll, getOne, create, modify, remove }
