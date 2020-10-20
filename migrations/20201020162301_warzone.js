
exports.up = function(knex) {
  return knex.schema.createTable('warzone',(table)=>{
      table.increments('id').primary().unique()
      table.string('user_name')
      table.string('platform')
      table.integer('user_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('warzone')
};
