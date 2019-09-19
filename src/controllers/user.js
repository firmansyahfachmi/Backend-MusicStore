const Model = require('../models/user');
const helper = require('../helpers/formResponse')
const jwt = require('jsonwebtoken')

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

    register: (req, res) => {

        const passwordHash = helper.setPassword(req.body.password, process.env.SECRET_KEY)

        const data = {
            email: req.body.email,
            name: req.body.name,
            password: passwordHash.passwordHash,
            level: 2
        }

        Model.register(data)
            .then((response) => {
                helper.result(res, 200, response)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    login: (req, res) => {
        const email = req.body.email
        const password = req.body.password

        Model.getByEmail(email)
            .then((result) => {
                const dataUser = result[0]
                const usePassword = helper.setPassword(password, process.env.SECRET_KEY).passwordHash
                if (usePassword === dataUser.password) {
                    dataUser.token = jwt.sign({
                        userid: dataUser.id
                    }, process.env.SECRET_KEY, {
                        expiresIn: '24h'
                    })

                    delete dataUser.password

                    return helper.result(res, 200, dataUser)
                } else {
                    return helper.result(res, 403, 'Wrong password!')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },

}