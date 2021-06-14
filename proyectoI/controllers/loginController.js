const bcrypt = require('bcryptjs');
const db = require('../database/models');

const op = db.Sequelize.Op;

let loginController = {
    index: function(req, res){
        if(req.session.user != undefined){
            res.redirect("/")
        }else{
        //Mostramos el form de login
        return res.render('login');
        }
    },
    //AAAAAAAAAA
    login: function(req, res){
        //Buscar mail

        // Buscar el usuario que se quiere loguear.
        db.User.findOne({
            where: [{mail: req.body.mail}]
        })
        .then( user => {
            let errors={};
            if(user == null){
                errors.message = "El mail no corresponde con un usuario existente"
                res.locals.errors = errors
                return res.render("login");
            } else if(bcrypt.compareSync(req.body.contrasena, user.contrasena) == false){
                errors.message = "La contraseña no es correcta, intente de nuevo"
                res.locals.errors = errors
                return res.render("login");
            } else {
                req.session.user = user;
                console.log('en login controller');
                console.log(req.session.user);

            //Si tildó recordame => creamos la cookie.
                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5})
                }

                return res.redirect('/');
            }
        })
        .catch( e => {console.log(e)})
    },
    logout: function(req,res){
        //Destruir la sessión
        req.session.destroy();

        //Destruir la coockie
         res.clearCookie('userId');
        
        //redireccionar a hone
        return res.redirect('/')
    }
}



module.exports = loginController;