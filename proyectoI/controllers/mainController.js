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
    /*product: function(req, res){
        return res.render('product')
    },*/
    productAdd: function(req, res){
        return res.render('product-add')
    },
    /*profile: function(req, res){
        return res.render('profile')
    },*/
    profileEdit: function(req, res){
        return res.render('profileEdit')
    },
    searchResults: function(req, res){
        return res.render('search-results')
    }
}

module.exports = mainController