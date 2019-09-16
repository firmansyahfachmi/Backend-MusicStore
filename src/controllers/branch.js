const Model = require('../models/branch');
const helper = require('../helpers/formResponse')

module.exports = {
    getBranch: (req, res) => {

        Model.getBranch()
            .then(response => {
                helper.result(res, 200, response);
            })

            .catch(err => {
                helper.result(res, 404, err);
            });
    },
}