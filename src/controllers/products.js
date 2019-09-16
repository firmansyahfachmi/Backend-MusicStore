const Model = require('../models/products');
const helper = require('../helpers/formResponse')

module.exports = {


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



}