var express = require('express');
var router = express.Router();
var registerController = require('../controllers/registerController');
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/users')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })

router.get('/', registerController.index);
router.post('/', upload.single("imagen"),registerController.store);
router.get('/edit/:id', registerController.profileEdit);
router.post('/edit', upload.single("imagen"), registerController.update);

module.exports = router;