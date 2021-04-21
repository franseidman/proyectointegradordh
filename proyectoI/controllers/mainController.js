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
    productAdd: function(req, res){
        return res.render('product-add')
    },
    profileEdit: function(req, res){
        return res.render('profile-edit')
    },
    searchResults: function(req, res){
        return res.render('search-results')
    }
}

module.exports = mainController