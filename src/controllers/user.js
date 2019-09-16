const Model = require('../models/user');
const helper = require('../helpers/formResponse')

module.exports = {
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
}