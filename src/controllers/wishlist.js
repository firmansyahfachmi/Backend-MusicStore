const Model = require('../models/wishlist');
const helper = require('../helpers/formResponse')

module.exports = {
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

    addWishlist: (req, res) => {
        data = {
            id_user: req.params.id,
            category: req.body.category_name,
            branch: req.body.branch_name,
            name: req.body.name,
            price: req.body.price,
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

    deleteWishlist: (req, res) => {
        id = req.params.id;
        uid = req.params.uid;

        Model.deleteWishlist(uid, id)
            .then(response => {
                helper.result(res, 200, id);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    }
}