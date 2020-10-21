
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Maxime', last_name: 'Remacle', email:'remacle.maxime@gmail.com',password_hash:'',created_at:Date.now()},
        {id: 2, first_name: 'Jess', last_name: 'Matthews', email:'jess.l.matthews@hotmail.com',password_hash:'',created_at:Date.now()}
      ]);
    });
};
