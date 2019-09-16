const db = require("../configs/connect");

module.exports = {
    getWishlist: id => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM wishlist WHERE id_user = '${id}'`,
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

    addWishlist: data => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO wishlist SET ?`, data, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },

    deleteWishlist: (uid, id) => {
        return new Promise((resolve, reject) => {
            db.query(
                `DELETE FROM wishlist WHERE id='${id}' AND id_user='${uid}'`,
                (err, response) => {
                    if (!err) {
                        resolve(response);
                    } else {
                        reject(err);
                    }
                }
            );
        });
    }
}