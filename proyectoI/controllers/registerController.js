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
        console.log(req);
        let errors={}
        if(req.body.username == ""){
            errors.message = "Es necesario un nombre de usuario";
            res.locals.errors = errors;
            return res.render('register')
        //Chequear que la contraseña no esté vacía    
        } else if(req.body.mail == ""){
            errors.message = "El email es obligatorio";
            res.locals.errors = errors;
            return res.render('register')
        //Chequear que la contraseña no esté vacía    
        } else if(req.file == null){
            errors.message = "Es necesario una foto de perfil";
            res.locals.errors = errors;
            return res.render('register')
        } else if(req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg'){
            errors.message = "El formato del archivo no es compatible";
            res.locals.errors = errors;
            return res.render('register')
        }else if(req.body.contrasena == ""){
            errors.message = "La contraseña es obligatoria";
            res.locals.errors = errors;
            return res.render('register')
         //Chequear que repetir contraseña no esté vacío   
        } else if (req.body.contraseña2 == ""){
            errors.message = "Es necesario que repita su contraseña";
            res.locals.errors = errors;
            return res.render('register')
            //HACER TODO OBLIGATORIO, EL CHECKBOX TAMBIÉN
        } else if (req.body.contraseña2 != req.body.contrasena){
            errors.message = "Es necesario que repita correctamente su contraseña";
            res.locals.errors = errors;
            return res.render('register')
            //HACER TODO OBLIGATORIO, EL CHECKBOX TAMBIÉN
        }else {
            //Buscamos un usaurio en base al email ingresado.
            users.findOne({
                where: [{mail: req.body.mail}]
            })
                .then(function(user){
                    //Si find encontró un usuario significa que está en uso ese email por lo que debemos avisarle al usuario que elija otro email
                    if(user != null){
                        errors.message = "El email ya está registrado por favor elija otro.";
                        res.locals.errors = errors;
                        return res.render('register');
                    } else {
                        // Si el email está libre recién ahora podemos guardar un usuario en la db
                        let user = {
                            username : req.body.username,
                            mail: req.body.mail,
                            imagen: req.file.filename,
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

                })
                .catch( error => { console.log(error) })

            }

    },
    profileEdit: function(req, res){
        let id = req.params.id;

        if(id != req.session.user.id){
            //Redireccionar a la ruta del usuario logueado
            return res.redirect(`/register/edit/${req.session.user.id}`)
        } else {
            //Recuperar los datos del usuario y pasarlo al form de edición
            db.User.findByPk(id)
                .then( function(user){
                    return res.render('profile-edit', { userEdit:user})
                })
                .catch( e => {console.log(e)})
        }
    },
    update: function(req, res){
        
        let user = {
            username : req.body.username,
            mail: req.body.mail,
            imagen: '',
            contrasena: '', 
            nacimiento: req.body.nacimiento,
            telefono: req.body.telefono,
        }

        if(req.body.contrasena == ''){
            user.contrasena = req.session.user.contrasena;
        } else {
            user.contrasena = bcrypt.hashSync(req.body.contrasena, 10);
        }
        if(req.file == undefined){
            user.imagen = req.session.user.imagen;
        } else {
            user.imagen = req.file.filename;
        }

        db.User.update(user, {
            where:{
                id: req.session.user.id
            }
        })
            .then(function(id){
                //Actualiza los datos de session y redirecciona a la home.
                user.id = req.session.user.id;
                req.session.user = user;
                return res.redirect('/');
                
            })
            .catch( e => {console.log(e)})
    }
}

module.exports = registerController;