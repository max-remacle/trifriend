
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('warzone').del()
    .then(function () {
      // Inserts seed entries
      return knex('warzone').insert([
        {id: 1, user_name: 'Aeollus%25231985', platform:'battle', user_id:1, game_id:1},
        {id: 2, user_name: 'Jesswarks18', platform:'psn', user_id:2, game_id:1},
        {id: 3, user_name: 'Testing%25231985', platform:'battle', user_id:1, game_id:1}
      ]);
    });
};
