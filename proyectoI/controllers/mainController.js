const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const op = db.Sequelize.Op

const mainController = {

    register: function(req, res){
        return res.render('register')
    },
    login: function(req, res){
        return res.render('login')
    },
    productAdd: function(req, res){
        return res.render('product-add')
    },
    profileEdit: function(req, res){
        return res.render('profile-edit')
    },
    searchResults: function(req, res){
        return res.render('search-results')
    },
 
    search: function(req, res){ //FRAN
        let infoABuscar = req.query.search; //obtengo la info de la querystring.

        db.Product.findAll({
            
            include : [
                {association : 'comentariosproducto'}
            ],
            where: {
                [op.or]: [
                { nombre: {[op.like]: '%'+infoABuscar+'%'} }, 
                { descripcion: {[op.like]: '%'+infoABuscar+'%'} }
            ]
            }})
            .then( data => {
                return res.render('search-results',{products: data});
            })
            .catch( error => {
                console.log(error);
            })
    }, //FRAN
    novedades: function(req, res){ //MATEO

        //obtengo la info de la querystring.
        db.Product.findAll({
            include : [
                {association : 'comentariosproducto'}
            ],
            
            order: [['id', 'desc']]
            })
            .then( data => {
                return res.render('index',{products: data}); //se la mandamos a la vista adentro de un objeto
            })
            .catch( error => {
                console.log(error);
            })
    }
}

module.exports = mainController