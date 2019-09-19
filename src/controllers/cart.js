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
        id = req.params.id
        data = {
            id_user: Number(id),
            id_product: req.body.id,
            category: req.body.category_name,
            branch: req.body.branch_name,
            quantity: 1,
            name: req.body.name,
            price: req.body.price,
            url: req.body.url
        }

        Model.addCart(data)
            .then(response => {
                data.id = response.insertId
                helper.result(res, 200, data);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    editCart: (req, res) => {
        id = req.params.id;
        uid = req.params.uid;
        data = {
            id_user: Number(uid),
            id_product: req.body.id,
            category: req.body.category_name,
            branch: req.body.branch_name,
            quantity: req.body.quantity,
            name: req.body.name,
            price: req.body.price,
            url: req.body.url
        }
        Model.editCart(data, uid, id)
            .then(response => {
                data.id = response.insertId
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
                helper.result(res, 200, id);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },
}