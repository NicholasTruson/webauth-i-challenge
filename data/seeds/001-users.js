
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, userName: 'Nick', password:"nicknick"},
        {id: 2, userName: 'Rick', password:"rickrick"},
        {id: 3, userName: 'Vick', password:"vickvick"}
      ]);
    });
};
