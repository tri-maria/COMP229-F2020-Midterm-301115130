let express= require('express');
let router=express.Router();
let mongoose=require('mongoose');

//connect to our book model
 let Book=require('../models/book')
 
 let bookController=require('../controllers/book');

/* Get route for Book List Page -- read operation */
router.get('/', bookController.displayBookList);

/* Get route for Book -Add page  operation - CREATE OPERATION*/
router.get('/add',bookController.displayAddPage);

/* POST route for processing the Add Page -- CREATE OPERATION */
router.post('/add',bookController.processAddPage);
   
   
/* Get route for  displaying the Edit Page -- UPDATE OPERATION */
router.get('/edit/:id',bookController.displayEditPage);


/* POST route for processing the EditPage -- UPDATE OPERATION */
router.post('/edit/:id',bookController.processEditPage);


//Get -to perform Deletion- DELETE OPERATION */
router.get('/delete/:id',bookController.performDelete);

module.exports = router;