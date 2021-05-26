const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const op = db.Sequelize.Op

const mainController = {
    index: function(req, res){
        db.User.findAll()
            .then(data =>{
                console.log(data);
                return res.render('index', { users: data });
            })
        //return res.render('index')
    },
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
    show: function(req, res){
        let id = req.params.id;

        db.User.findByPk(id)
            .then(data =>{
                return res.render('index', { users: data });
            })
            .catch(error =>{
                console.log(error);
            })
        
    } ,
    search: function(req, res){
        let infoABuscar = req.query.search; //obtengo la info de la querystring.

        db.Product.findAll({
            //SELECT * FROM movies
            //WHERE title LIKE "%potter%"
            where: [
                { nombre: {[op.like]: '%'+infoABuscar+'%'}}
            ]})
            .then( data => {
                return res.render('search-results',{products: data});
            })
            .catch( error => {
                console.log(error);
            })
    }
}
//hola
module.exports = mainController