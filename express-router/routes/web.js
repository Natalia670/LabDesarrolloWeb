let router = require('express').Router();
let PagesController = require('../controllers/PagesController');

router.get('/', PagesController.homepage);

router.get('/about-us', PagesController.about);

router.get('/products/create', PagesController.create);

router.post('/products', PagesController.store);

router.get('/products/:id', PagesController.show);

router.get('/products/:id/edit', PagesController.edit);

router.put('/products/:id', PagesController.update);

router.delete('/products/:id', PagesController.delete);

/*router.get('/', (req, res) => {
    res.send('Root');
});

router.get('/about-us', (req, res) => {
    res.send('About us');
});*/

module.exports = router;