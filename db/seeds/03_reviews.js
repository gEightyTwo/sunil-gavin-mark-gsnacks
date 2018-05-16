const TABLE_NAME = 'reviews'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {id: 1, title: 'Great Snack 1', text: 'Om nom nom 1', rating: 5.0, snack_id: 1, user_id: 1},
        {id: 2, title: 'Great Snack 2', text: 'Om nom nom 2', rating: 5.0, snack_id: 1, user_id: 2},
        {id: 3, title: 'Great Snack 3', text: 'Om nom nom 3', rating: 5.0, snack_id: 2, user_id: 1},
        {id: 4, title: 'Great Snack 4', text: 'Om nom nom 3', rating: 5.0, snack_id: 2, user_id: 1},
        {id: 5, title: 'Great Snack 5', text: 'Om nom nom 3', rating: 5.0, snack_id: 2, user_id: 1}
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
