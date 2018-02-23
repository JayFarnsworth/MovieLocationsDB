
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies_locations').insert([
        {
          id: 1,
          movies_id: 1,
          locations_id: 1
        },
        {
          id: 2,
          movies_id: 1,
          locations_id: 2
        },
        {
          id: 3,
          movies_id: 1,
          locations_id: 3
        },
        {
          id: 4,
          movies_id: 1,
          locations_id: 4
        }
        ]);
    });
};
