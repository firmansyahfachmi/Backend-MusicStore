const db = require("../configs/connect");

module.exports = {
    getCart: id => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM cart WHERE id_user = '${id}'`,
                (err, response) => {
                    if (!err) {
                        resolve(response);
                    } else {
                        reject(err);
                    }
                }
            );
        });
    },

    addCart: data => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO cart SET ?`, data, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },

    editCart: (data, uid, id) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE cart SET ? WHERE id_product='${id}' AND id_user='${uid}'`,
                data,
                (err, response) => {
                    if (!err) {
                        resolve(response);
                    } else {
                        reject(err);
                    }
                }
            );
        });
    },

    deleteCart: (uid, id) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM cart WHERE id='${id}' AND id_user = '${uid}'`,
                (err, response) => {
                    if (!err) {
                        resolve(response);
                    } else {
                        reject(err);
                    }
                }
            );
        });
    },
}