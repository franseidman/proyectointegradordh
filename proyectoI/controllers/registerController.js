const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const users = db.User;

let registerController = {
    index: function(req, res){
        if(req.session.user != undefined){
            res.redirect("/")
        }else{
        //Mostrar el formulario de registro
        return res.render('register');
        }
    },
    store: function(req, res){ 
        // Guardar un usuario en la db
        let user = {
           username : req.body.username,
           mail: req.body.mail,
           contrasena: bcrypt.hashSync(req.body.contrasena, 10), 
           nacimiento: req.body.nacimiento,
           telefono: req.body.telefono,
       }
       users.create(user)
       .then( user => {
        return res.redirect('/login')
       })
       .catch(e => {console.log(e)});

    }
}

module.exports = registerController;
