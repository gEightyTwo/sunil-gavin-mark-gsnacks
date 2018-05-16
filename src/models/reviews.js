const db = require('../../db/knex')

//create Oop here?

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAllReviews = (id) => {

  return (
    db('reviews')
    .where({'reviews.snack_id': id})
    .returning('*')
  )
}

const getOneReview = (snacksId, reviewsId) => {
  return (
    db('reviews')
    .where({'snack_id': snacksId, "id": reviewsId})
    .returning('*')
  )
}
const createReview = (id, usersId, title, text) => {
  return (
    db('reviews')
    .join("users", 'users.id', "=", "user_id")

    .returning('*')
  )
  }

const modifyReview = (id, transactionId, body) => {

}

const removeReview = (id, transactionId) => {

}

module.exports = { getAllReviews, getOneReview, createReview, modifyReview, removeReview }
