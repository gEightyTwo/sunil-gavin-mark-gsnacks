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
  return (
    db('reviews')
    .where({ snack_id: snackId, id: reviewId })
  )
}

const create = (snackId, userId, {title, text, rating}) => {
  return (
    db('reviews')
    .insert({title, text, rating, snack_id: snackId, user_id: userId})
    .returning('*')
  )
}

const modify = (snackId, reviewId, userId, {title, text, rating}) => {
  return (
    db('reviews')
    .where({ id: reviewId })
    .update({title, text, rating, snack_id: snackId, user_id: userId})
    .returning('*')
  )
}

const remove = (reviewId) => {
  return (
    db('reviews')
    .where({ id: reviewId })
    .first()
    .del()
    .returning('*')
  )
}

module.exports = { getAll, getOne, create, modify, remove }
