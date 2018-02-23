
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('movies', table => {
    table.increments('id').primary();
    table.text('movie_name');
    table.text('shooting_dates');
    table.text('imdb_id');
    table.text('year');
    table.text('director');
    table.text('genre');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies')
};
