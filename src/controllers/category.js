const Model = require('../models/category');
const helper = require('../helpers/formResponse')

module.exports = {
    getCategory: (req, res) => {

        Model.getCategory()
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
}