const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {id: 1, first_name: 'Dan', last_name: 'Dog', email: 'dandog@gmail.com', hashed_password: 'ilovesnacks' },
        {id: 2, first_name: 'Tengo', last_name: 'Dog', email: 'tengodog@gmail.com', hashed_password: 'ilovesnugs' }
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
