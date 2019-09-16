const db = require("../configs/connect");

module.exports = {
    getBranch: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM branch", (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
}