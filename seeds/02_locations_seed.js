
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          id: 1,
          location_name: "Mono Lake, California, USA",
          gps_lat: 38.018299,
          gps_lng: -119.065697
        },
        {
          id: 2,
          location_name: "Sierra Nevada Mountains, California, USA",
          gps_lat: 38.432045,
          gps_lng: -121.383459
        },
        {
          id: 3,
          location_name: "Winnemucca Lake, Nevada, USA",
          gps_lat: 39.408396,
          gps_lng: -119.218091
        },
        {
          id: 4,
          location_name: "Inyo National Forest, California, USA",
          gps_lat: 37.698299,
          gps_lng: -119.754204
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE locations_id_seq RESTART WITH 5;");
    });
};
