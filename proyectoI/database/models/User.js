module.exports = function(sequelize, dataTypes){

    //Definir un alias. Un nombre que le vamos a dar al modelo para que sequelize lo pueda identificar rápidamente.
    let alias = "User"; //Con este alias sequelize va a identificar internamente al archivo de modelo. 

    //Describir la configuración de las columnas de la tabla
    let cols = { //Cada atributo debe coincidir con el nombre de la columna.
        id:{ //Adentro de cada atributo hay un objeto literal con otros atributos.
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        username:{
            type: dataTypes.STRING
        },
        mail:{
            type: dataTypes.STRING
        },
        contrasena:{
            type: dataTypes.STRING
        },
        nacimiento:{
            type: dataTypes.DATE
        },
        prefijo:{
            type: dataTypes.INTEGER
        },
        telefono:{
            type: dataTypes.INTEGER
        },
    }

    let config = { //Configuracion adicional
        tableName: "users",
        timesstamps: false, //Si la tabla no tiene los campos created_at y updated_at
    }

    const User = sequelize.define(alias, cols, config); //Sequelize use el metodo define que se ejecuta dentro del parametro sequelize

    return User;

}