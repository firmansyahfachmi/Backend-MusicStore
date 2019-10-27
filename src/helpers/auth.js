const jwt = require('jsonwebtoken')
const helper = require('../helpers/formResponse')

const allowedAccess = process.env.REQUEST_HEADERS

module.exports = {
    authInfo: (req, res, next) => {
        const headerAuth = req.headers['authorization']
        const headerToken = req.headers['token']
        if (headerAuth !== allowedAccess) {
            
            return helper.result(res, 401, 'Unauthorized, Need Authentication!')
        } else if (typeof headerToken === 'undefined') {
            console.log('Authentication Valid!')
            next()
        } else {
            const bearerToken = headerToken.split(' ')
            const token = bearerToken[0]
            req.token = token
            console.log('Token stored!')
            next()
        }
    },

    accesstoken: (req, res, next) => {
        const secretKey = process.env.SECRET_KEY
        const accessToken = req.token
        const userToken = req.headers['user']

        jwt.verify(accessToken, secretKey, (err, decoded) => {
            if (err && err.name === 'TokenExpiredError') return helper.result(res, 401, 'Token expired')

            if (err && err.name === 'JsonWebTokenError') return helper.result(res, 401, 'Invalid Token')

            if (parseInt(userToken) !== parseInt(decoded.userid)) return helper.result(res, 401, 'Invalid User Token')

            console.log('Access Granted!')
            next()
        })
    }
}