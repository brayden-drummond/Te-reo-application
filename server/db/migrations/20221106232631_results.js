exports.up = function (knex) {
  return knex.schema.createTable('results', (table) => {
    table.string('auth0_id').references('users.auth0_id')
    table.integer('quiz_id').references('quiz.id')
    table.date('created')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('results')
}
