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
    product: function(req, res){
        return res.render('product')
    }
}

module.exports = mainController