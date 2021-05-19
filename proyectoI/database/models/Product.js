module.exports = function(sequelize, dataTypes){

    //Definir un alias. Un nombre que le vamos a dar al modelo para que sequelize lo pueda identificar rápidamente.
    let alias = "Product"; //Con este alias sequelize va a identificar internamente al archivo de modelo. 

    //Describir la configuración de las columnas de la tabla
    let cols = { //Cada atributo debe coincidir con el nombre de la columna.
        id:{ //Adentro de cada atributo hay un objeto literal con otros atributos.
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        imagen:{
            type: dataTypes.STRING
        },
        nombre:{
            type: dataTypes.STRING
        },
        creacion:{
            type: dataTypes.DATE
        },
        descripcion:{
            type: dataTypes.STRING
        },
    }

    let config = { //Configuracion adicional
        tableName: "products",
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
    }

    const Product = sequelize.define(alias, cols, config); //Sequelize use el metodo define que se ejecuta dentro del parametro sequelize

    return Product;

}