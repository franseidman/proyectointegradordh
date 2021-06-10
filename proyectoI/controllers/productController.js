const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const op = db.Sequelize.Op


const productController = {
    product: function(req, res){
        db.Product.findByPk(req.params.id)
            .then( data => {
                return res.render('product', {detalle:data});
            })
            .catch(error => {
                console.log(error);
            })
    },
    productAdd: function(req, res){
        return res.render('product-add')
    },
    productEdit: function(req, res){
        return res.render('product-edit')
    },
    show: function(req, res){
        //Mostrar formulario de carga de películas
        db.Product.findAll()
            .then( data => {
                return res.render('movieNew', {genres:data}); //hacer una vista nueva para los productos del usuario
            })
            .catch(error => {
                console.log(error);
            })
    },
    store: function(req, res){
        //Método para guardar nueva película.
        //1) Obtener datos del formulario
        let data = req.body;
        
        //2)Crear pelicula nueva.
        let product = {           
            user_id: 1, //req.session.user_id
            imagen: data.imagen,
            nombre: data.nombre,
            creacion: data.creacion,
            descripcion: data.descripcion,
        }
        //3)Guardar película
        db.Product.create(product)
            .then( (nuevoProducto) => {
        //4)Redirección
                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })
    },
    destroy: function(req, res){
        let productABorrar = req.params.id;
        db.Product.destroy({
            where: [
                {id : productABorrar}
            ]
        })
            .then( (id) => {
                return res.send(id)
                 return res.redirect('/');
            })
            .catch( error => { 
                console.log(error);
            })
    }
}

module.exports = productController