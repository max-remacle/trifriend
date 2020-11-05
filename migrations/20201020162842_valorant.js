
exports.up = function(knex) {
  return knex.schema.createTable('valorant',(table) =>{
      table.increments('id').primary().unique()
      table.string('user_name')
      table.integer('user_id')
      table.integer('game_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('valorant')
};
