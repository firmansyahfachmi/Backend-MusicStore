const db = require("../configs/connect");

module.exports = {
    getUser: id => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM user WHERE id = '${id}'`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
}