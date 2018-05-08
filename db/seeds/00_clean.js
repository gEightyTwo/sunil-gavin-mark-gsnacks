exports.seed = function(knex, Promise) {
  return knex('reviews').del()
  .then(function () {
    return knex('users').del()
  })
  .then(function () {
    return knex('snacks').del()
  })
}
