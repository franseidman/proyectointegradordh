const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const op = db.Sequelize.Op

const mainController = {
    index: function(req, res){
        return res.render('index')
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
}

module.exports = mainController