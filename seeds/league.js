
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('league').del()
    .then(function () {
      // Inserts seed entries
      return knex('league').insert([
        {id: 1, user_name: 'Positive Chi', user_id:1, game_id:2},
        {id: 2, user_name: 'DownTown Madness', user_id:2, game_id:2},
        {id: 3, user_name: 'Shruikan', user_id:1, game_id:2}
      ]);
    });
};
