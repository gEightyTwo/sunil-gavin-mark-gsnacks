const TABLE_NAME = 'reviews'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {id: 1, title: 'Great Snack', text: 'Om nom nom', rating: 5.0, snack_id: 147, user_id: 2},
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
