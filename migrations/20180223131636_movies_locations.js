
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies_locations', table => {
    table.increments('id').primary();
    table.integer('movies_id');
    table.foreign('movies_id').references('movies.id');
    table.integer('locations_id');
    table.foreign('locations_id').references('locations.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies_locations');
};
