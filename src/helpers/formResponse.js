const crypto = require('crypto')

module.exports = {
    result: (res, status, response) => {
        if (response < 1) {
            status = 404;
            response = "Not Found";
        }

        const formResponse = {
            status: status,
            data: response
        };
        res.status(status);
        res.json(formResponse);
    },

    setPassword: (password, secretkey) => {
        let hash = crypto.createHmac('sha512', secretkey)
        hash.update(password)
        let value = hash.digest('hex')
        return {
            passwordHash: value
        }
    }
};