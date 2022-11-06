exports.up = function (knex) {
  return knex.schema.createTable('quiz', (table) => {
    table.increments('id')
    table.string('question')
    table.string('options')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('quiz')
}
