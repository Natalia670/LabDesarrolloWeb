const knex = require('../database/connection');

exports.all = () => {
    return knex
    .select('*')
    .from('products');
}

exports.create = (product) => {
    return knex('products')
      .insert({
        name: product.name,
        price: product.price,
        description: product.description
      });
  }

exports.find = (id) => {
return knex
    .select('*')
    .from('products')
    .where('id', id)
    .first();
}

// Actualiza el producto con el id dado con la información definida en product
exports.update = (id, product) => {
    return knex('products')
      .update(product)
      //.update('updated_at', knex.fn.now())
      .where('id', id);
  }

exports.delete = (id) => {
return knex('products')
    .delete()
    .where('id', id);
}
