const db = require('../configs/connect')

module.exports = {
    getHome: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM category', (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    getBranch: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM branch', (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    getCart: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM cart WHERE id_user = '${id}'`, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    getWishlist: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM wishlist WHERE id_user = '${id}'`, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    getUser: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM user WHERE id = '${id}'`, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    getProducts: (data) => {
        const page = (data.page * data.limit) - data.limit;
        return new Promise((resolve, reject) => {
            let query = '';
            (data.category === 'all') ? query = `SELECT p.id, c.category_name, b.branch_name, p.name, p.quantity, p.description, p.price,p.url FROM products AS p INNER JOIN category AS c ON (p.id_category = c.id)INNER JOIN branch AS b ON (p.id_branch = b.id) ORDER BY id ASC LIMIT ${page},${data.limit}`:
                query = `SELECT p.id, c.category_name, b.branch_name, p.name, p.quantity, p.description, p.price,p.url FROM products AS p INNER JOIN category AS c ON (p.id_category = c.id) INNER JOIN branch AS b ON (p.id_branch = b.id)  WHERE category_name LIKE '%${data.category}%' ORDER BY id ASC LIMIT ${page},${data.limit}`
            db.query(query, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    getProductsDetail: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT p.id, c.category_name, b.branch_name, p.name, p.quantity, p.description, p.price,p.url FROM products AS p INNER JOIN category AS c ON (p.id_category = c.id)INNER JOIN branch AS b ON (p.id_branch = b.id) WHERE name LIKE '%${data.name}%'`, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    getProductsTable: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM products', (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    getProductsBy: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT p.id, c.category_name, b.branch_name, p.name, p.quantity, p.description, p.price,p.url FROM products AS p INNER JOIN category AS c ON (p.id_category = c.id) INNER JOIN branch AS b ON (p.id_branch = b.id)  WHERE name LIKE '%${data.name}%'`, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },




    addCategory: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO category SET ?`, data, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    addCart: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO cart SET ?`, data, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    addWishlist: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO wishlist SET ?`, data, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    addProducts: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO products SET ?`, data, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    updateProducts: (data, id) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE products SET ? WHERE products.id ='${id}'`, data, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    deleteProducts: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM products WHERE id='${id}'`, (err, response) => {

                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }

            })
        })
    },

    deleteCart: (uid, id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM cart WHERE id='${id}' AND id_user = '${uid}'`, (err, response) => {

                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }

            })
        })
    },

    deleteWishlist: (uid, id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM wishlist WHERE id='${id}' AND id_user='${uid}'`, (err, response) => {

                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }

            })
        })
    }

}