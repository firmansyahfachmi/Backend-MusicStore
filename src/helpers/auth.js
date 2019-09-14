const jwt = require('jsonwebtoken')

const allowedAccess = process.env.REQUEST_HEADERS

module.exports = {
    authInfo: (req, res, next) => {
        const headerAuth = req.headers['authorization']
    }
}