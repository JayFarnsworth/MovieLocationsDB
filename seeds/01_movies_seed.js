
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          id: 1,
          movie_name: 'High Plains Drifter',
          shooting_dates: '17 July, 1972',
          imdb_id: 'tt0068699',
          year: '1973',
          director: 'Clint Eastwood',
          genre: 'Mystery, Western'
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE movies_id_seq RESTART WITH 2;");
    });
};
