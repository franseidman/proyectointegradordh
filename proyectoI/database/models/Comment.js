module.exports = function(sequelize, dataTypes){

    //Definir un alias. Un nombre que le vamos a dar al modelo para que sequelize lo pueda identificar rápidamente.
    let alias = "Comment"; //Con este alias sequelize va a identificar internamente al archivo de modelo. 

    //Describir la configuración de las columnas de la tabla
    let cols = { //Cada atributo debe coincidir con el nombre de la columna.
        id:{ //Adentro de cada atributo hay un objeto literal con otros atributos.
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentario:{
            type: dataTypes.STRING(1000)
        },
        user_id:{
            type: dataTypes.INTEGER
        },
        product_id:{
            type: dataTypes.INTEGER
        }
    }

    let config = { //Configuracion adicional
        tableName: "comments",
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
    }

    const Comment = sequelize.define(alias, cols, config); //Sequelize use el metodo define que se ejecuta dentro del parametro sequelize

    Comment.associate = function(models){
        Comment.belongsTo(models.Product, {
            as:'comentariodeproducto', //Como voy a llamar a la relación dentro del controlador
            foreignKey:'product_id'
        }),
        Comment.belongsTo(models.User, {
            as:'usuariodelcomentario', //Como voy a llamar a la relación dentro del controlador
            foreignKey:'user_id'
        })
    }

    return Comment;

}