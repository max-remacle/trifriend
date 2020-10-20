
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Maxime', last_name: 'Remacle', email:'remacle.maxime@gmail.com',password_hash:'',created_at:Date.now()}
      ]);
    });
};
