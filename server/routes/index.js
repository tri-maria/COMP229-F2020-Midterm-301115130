let express = require('express');
let router = express.Router();

let indexController=require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomepage);

/* GET about page. */
router.get('/home', indexController.displayHomepage);

/* GET about page. */
router.get('/about',  indexController.displayAboutpage);


/* GET products page. */
router.get('/products', indexController.displayProductspage);


/* GET services page. */
router.get('/services', indexController.displayServicespage);


/* GET contact us page. */
router.get('/contact', indexController.displayContactpage);

module.exports = router;
