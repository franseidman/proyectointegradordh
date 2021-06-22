const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const op = db.Sequelize.Op

const profileController = {
    profile: function(req, res){
        return res.render('profile')
    },
    show: function(req, res){

        db.User.findByPk(req.params.id, {
            include : [
                {association : 'productodelusuario',
            include : [
                {association : 'comentariosproducto'},
            ]},
                {association : 'comentariodelusuario'}
            ]
        })
            .then(data =>{
                
                return res.render('profile', { user: data });
            })
            .catch(error =>{
                console.log(error);
            })
        
    }
}

module.exports = profileController