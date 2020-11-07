
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Valorant').del()
    .then(function () {
      // Inserts seed entries
      return knex('Valorant').insert([
        {id: 1, user_name: 'Positive Chi', user_id:1, game_id:3},
      ]);
    });
};
