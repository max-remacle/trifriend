
exports.up = function(knex) {
  return knex.schema.createTable('league',(table)=>{
      table.increments('id').primary().unique()
      table.string('user_name')
      table.integer('user_id')
      table.integer('game_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('league')
};
