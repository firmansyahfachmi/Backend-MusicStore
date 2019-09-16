const Model = require('../models/cart');
const helper = require('../helpers/formResponse')

module.exports = {
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
}