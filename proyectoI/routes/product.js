var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/products')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })


router.get('/id/:id', productController.product);
//router.get('/add', productController.productAdd);
router.post('/store', productController.store);
router.post('/delete/:id', productController.destroy);
router.post('/storeComentarios', productController.storeComentarios);

router.get('/edit/:id', productController.productEdit);
router.post('/edit', upload.single("imagen"), productController.update);

router.get('/add', productController.show);
router.post('/add', upload.single("imagen"), productController.store);


module.exports = router;