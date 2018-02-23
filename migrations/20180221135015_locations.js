
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('locations', table => {
      table.increments('id').primary();
      table.text('location_name');
      table.float('gps_lat');
      table.float('gps_lng');
    })
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('locations')
};
