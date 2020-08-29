exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'Sueter', description: 'Color negro', price: 100 },
        { name: 'Chamarra', description: 'Color azul', price: 200 },
        { name: 'Pantalones', description: 'Slim-fit', price: 300 },
      ]);
    });
};