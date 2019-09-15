const Model = require('../models/anekamusik');
const helper = require('../helpers/formResponse')

module.exports = {
    getHome: (req, res) => {

        Model.getHome()
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    getBranch: (req, res) => {

        Model.getBranch()
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    getUser: (req, res) => {
        id = req.params.id
        Model.getUser(id)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    getCart: (req, res) => {
        id = req.params.id
        Model.getCart(id)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },


    getWishlist: (req, res) => {
        id = req.params.id
        Model.getWishlist(id)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    getProducts: (req, res) => {
        const data = {
            category: req.params.category,
            page: req.query.page || 1,
            limit: req.query.limit || 8
        }

        Model.getProducts(data)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    getProductsDetail: (req, res) => {
        const data = {
            name: req.params.name,
        }

        Model.getProductsDetail(data)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    getProductsTable: (req, res) => {

        Model.getProductsTable()
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    getProductsBy: (req, res) => {
        const data = {
            name: req.params.name,
        }

        Model.getProductsBy(data)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },



    addCategory: (req, res) => {
        data = {
            category_name: req.body.category,
            url: req.body.url
        }

        Model.addCategory(data)
            .then(response => {
                helper.result(res, 200, data);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    addCart: (req, res) => {
        data = {
            id_user: req.params.id,
            category: req.body.category,
            branch: req.body.branch,
            name: req.body.name,
            price: req.body.price,
            url: req.body.url,
            product_id: req.body.id
        }

        Model.addCart(data)
            .then(response => {
                helper.result(res, 200, data);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    addWishlist: (req, res) => {
        data = {
            id_user: req.params.id,
            category: req.body.category,
            branch: req.body.branch,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            url: req.body.url,
            product_id: req.body.id
        }

        Model.addWishlist(data)
            .then(response => {
                helper.result(res, 200, data);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    addProducts: (req, res) => {
        data = {
            id_category: req.body.category,
            id_branch: req.body.branch,
            name: req.body.name,
            quantity: req.body.quantity,
            description: req.body.description,
            price: req.body.price,
            url: req.body.url
        }

        Model.addProducts(data)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    updateProducts: (req, res) => {
        id = req.params.id
        data = {

            id_category: req.body.category,
            id_branch: req.body.branch,
            name: req.body.name,
            quantity: req.body.quantity,
            description: req.body.description,
            price: req.body.price,
            url: req.body.url
        }

        Model.updateProducts(data, id)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    deleteProducts: (req, res) => {
        id = req.params.id;

        Model.deleteProducts(id)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    deleteCart: (req, res) => {
        id = req.params.id;
        uid = req.params.uid;

        Model.deleteCart(uid, id)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    deleteWishlist: (req, res) => {
        id = req.params.id;
        uid = req.params.uid;

        Model.deleteWishlist(uid, id)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    }
}