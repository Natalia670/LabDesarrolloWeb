let ProductModel = require('../models/Products');

exports.homepage = (req, res) => {
    ProductModel.all()
        .then((data) => {
            let products = data;
            console.log(products);
            res.render('pages/homepage', {products: products});
        });
}

exports.about = (req, res) => {
    res.render('pages/aboutus');
}

exports.create = (req,res) => {
    ProductModel.all()
    .then(() => {
        res.render('products/create')
    });
    
}

exports.store = (req, res) => {
    console.log(req.body);
    let product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };
    ProductModel.create(product)
    .then((id) => {
      res.redirect('/');
    });

}

exports.show = (req, res) => {
    let id = req.params.id;
    ProductModel.find(id).then((product) => {
      if (product == null) {
        res.status(404).send('Not found');
        return;
      }
      res.render('products/show', {product: product});
    });
  }

exports.edit = (req, res) => {
// Obtiene el id que viene en la url
let id = req.params.id;
// Busca dentro de la base de datos el producto con el id indicado
ProductModel.find(id).then((product) => {
    // Si el producto no existe entonces
    if (product == null) {
    // Regresa el error 404
    res.status(404).send('Not found');
    return;
    }
    // Si el producto existe entonces muestra la vista products/edit.hbs
    // con la información del producto
    res.render('products/edit', {product: product});
});
}

exports.update = (req, res) => {
    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    ProductModel.find(id).then((product) => {
      // Si el producto no existe entonces
      if (product == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
  
      // Define los datos del producto actualizado
      let updateProduct = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
      }
  
      // Actualiza los datos del producto
      ProductModel.update(product.id, updateProduct)
        .then((id) => {
          // Al terminar redirige el índice
          res.redirect('/');
        });
    });
  }

  exports.delete = (req, res) => {
    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    ProductModel.find(id).then((product) => {
        console.log("encontré el producto")
      // Si el producto no existe entonces
      if (product == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
      // Elimina los datos del producto
      ProductModel.delete(product.id)
        .then((id) => {
          // Al terminar redirige el índice
          res.redirect('/');
        });
    });
  }
  