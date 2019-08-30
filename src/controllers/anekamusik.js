const Model = require('../models/anekamusik');
const helper = require('../helpers/formResponse')

module.exports = {
    getHome: (req, res) => {
        const data = {
            list: req.params.list || 'all',
        }


        Model.getHome(data)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    getProducts: (req, res) => {
        const data = {
            category: req.params.category || 'all',
            page: req.query.page || 1,
            limit: req.query.limit || 10
        }

        Model.getProducts(data)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    addCategory: (req, res) => {
        data = {
            category: req.body.category,
            url: req.body.url
        }

        Model.addCategory(data)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    addProducts: (req, res) => {
        data = {
            id_category: req.body.id_category,
            id_branch: req.body.id_branch,
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

            id_category: req.body.id_category,
            id_branch: req.body.id_branch,
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
    }
}