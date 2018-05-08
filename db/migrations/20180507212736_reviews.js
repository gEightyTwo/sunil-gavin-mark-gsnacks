const TABLE_NAME = 'reviews'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, table=>{
    table.increments()
    table.integer('snack_id').notNullable().references('snacks.id')
    table.integer('user_id').notNullable().references('users.id')
    table.string('title').notNullable().defaultTo('')
    table.text('text').notNullable().defaultTo('')
    table.float('rating').notNullable().defaultTo(0)


    table.timestamps(true,true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
}
