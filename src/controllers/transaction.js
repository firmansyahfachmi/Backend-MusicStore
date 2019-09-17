const Model = require('../models/transaction');
const helper = require('../helpers/formResponse')

module.exports = {
    getTransaction: (req, res) => {
        uid = req.params.uid
        Model.getTransaction(uid)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },

    addTransaction: (req, res) => {
        data = {
            id_user: req.param.uid,
            id_product: req.body.id_product,
            quantity: req.body.quantity
        }

        Model.addTransaction(data)
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },
}