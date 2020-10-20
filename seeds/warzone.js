
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('warzone').del()
    .then(function () {
      // Inserts seed entries
      return knex('warzone').insert([
        {id: 1, user_name: 'Aeollus#1985', platform:'battle', user_id:1},
      ]);
    });
};
