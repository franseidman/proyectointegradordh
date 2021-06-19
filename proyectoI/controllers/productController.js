const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const op = db.Sequelize.Op


const productController = {
    product: function(req, res){
        db.Product.findByPk(req.params.id, {
            include : [
                {association : 'owner'},
                {association : 'comentariosproducto',
            include: [
                {association : 'usuariodelcomentario'}
            ]}],
            order: [['comentariosproducto', 'id', 'desc']] //Propiedad order con lo configuración de orden
    
        })
            .then( data => {
                return res.render('product', {detalle:data});
            })
            .catch(error => {
                console.log(error);
            })
    },
    /*productAdd: function(req, res){
        return res.render('product-add')
    },*/
    productEdit: function(req, res){
        db.Product.findByPk(req.params.id, {
        })
            .then( data => {
              
                return res.render('product-edit', {detalle:data});
            })
            .catch(error => {
                console.log(error);
            })
    },
    update: function(req, res){
        
        let product = {           
            user_id: req.session.user.id, //req.session.user_id
            imagen: req.file.filename,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
        }

        if(req.body.nombre == ''){
            product.nombre = detalle.nombre;
        } else {
            product.nombre = req.body.nombre;
        }
        if(req.file == undefined){
            product.imagen = detalle.imagen;
        } else {
            product.imagen = req.body.imagen;
        }
        if(req.body.descripcion == ""){
            product.descripcion = detalle.descripcion;
        } else {
            product.descripcion = req.body.descripcion;
        }

        db.Product.update(product, {
            where:{
                id: req.params.id
            }
        })
            .then(function(id){
                
                //NO SABEMOS QUE FALTARÍA ESCRIBIR ACÁ
                return res.redirect('/');
                
            })
            .catch( e => {console.log(e)})  
    },
    show: function(req, res){
         //Control de acceso
         if(req.session.user == undefined){
            return res.redirect("/login");
        }else{
        //Mostrar formulario de carga de películas
        db.Product.findAll()
            .then( data => {
                return res.render('product-add'); //hacer una vista nueva para los productos del usuario
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    /*show: function(req, res){
        let id = req.params.id;

        db.Product.findByPk(id, {
            include : [
                {association : 'owner'},
                {association : 'comments'}
            ]
        })
            .then(data =>{
                return res.render('product', { product: data });
            })
            .catch(error =>{
                console.log(error);
            })
        
    },*/
    store: function(req, res){
        console.log(req);
        let errors={}
        if(req.body.nombre == ""){
            errors.message = "Es necesario un nombre de producto";
            res.locals.errors = errors;
            return res.render('product-add')
        //Chequear que la contraseña no esté vacía    
        } else if(req.body.descripcion == ""){
            errors.message = "Es necesaria una descripción del producto";
            res.locals.errors = errors;
            return res.render('product-add')
        //Chequear que la contraseña no esté vacía    
        } else if(req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg'){
            errors.message = "El formato del archivo no es compatible";
            res.locals.errors = errors;
            return res.render('product-add')
        } else{
        //Método para guardar nueva película.
        //1) Obtener datos del formulario
        //2)Crear pelicula nueva.
        let product = {           
            user_id: req.session.user.id, //req.session.user_id
            imagen: req.file.filename,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
        }
        //3)Guardar película
        db.Product.create(product)
            .then( (nuevoProducto) => {
        //4)Redirección
                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })}
    },
    destroy: function(req, res){
        let productABorrar = req.params.id;
        console.log(productABorrar);
        db.Comment.destroy({
            where: {
                product_id: productABorrar
            }
        })
            .then(()=>{
                db.Product.destroy({
                    where: {
                        id : productABorrar
                    }
                })
                    .then( (id) => {
                         return res.redirect('/');
                    })
                    .catch( error => { 
                        console.log(error);
                    })
            })
            .catch( error => { 
                console.log(error);
            })
    },
    storeComentarios: function(req, res){
        let errors={}
        if(req.body.comentario == ""){
            errors.message = "Es necesario un comentario";
            res.locals.errors = errors;
            return res.render('product')
        //Chequear que el comentario no esté vacío    
        } else{
        //Método para guardar nueva película.
        //1) Obtener datos del formulario
        //2)Crear pelicula nueva.
        let comentario = {
            comentario: req.body.comentario,          
            user_id: req.session.user.id,
            product_id: 1, //pasar id del producto
        }
        //3)Guardar película
        db.Comment.create(comentario)
            .then( (nuevoComentario) => {
        //4)Redirección
                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
            })}
    },

}

module.exports = productController