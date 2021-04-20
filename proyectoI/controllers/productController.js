const productController = {
    product: function(req, res){
        return res.render('product')
    },
    productAdd: function(req, res){
        return res.render('product-add')
    },
    productEdit: function(req, res){
        return res.render('product-edit')
    }
}

module.exports = productController