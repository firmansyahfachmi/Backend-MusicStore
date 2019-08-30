const db = require('../configs/connect')

module.exports = {
    getHome: (data) => {
        let query = '';
        (data.list === 'all') ? query = 'SELECT * FROM category': query = `SELECT * FROM category WHERE category_name LIKE '%${data.list}%'`
        return new Promise((resolve, reject) => {
            db.query(query, (err, response) => {
                if (!err) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    },

    getProducts: (data) => {
        let query = '';
        const page = (data.page * data.limit) - data.limit;
        (data.category === 'all') ? query = `SELECT p.id, c.category_name, b.branch_name, p.name, p.quantity, p.description, p.price, p.url FROM products AS p INNER JOIN category AS c ON (p.id_category = c.id) INNER JOIN branch AS b ON (p.id_branch = b.id) LIMIT ${page},${data.limit}`: query = `SELECT p.id, c.category_name, b.branch_name, p.name, p.quantity, p.description, p.price, p.url FROM products AS p INNER JOIN category AS c ON (p.id_category = c.id) INNER JOIN branch AS b ON (p.id_branch = b.id) WHERE c.category = '${data.category}' LIMIT ${page},${data.limit}`
        return new Promise((resolve, reject) => {

            db.query(query, (err, response) => {
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
            db.query(`INSERT INTO category SET category='${data.category}', url='${data.url}'`, (err, response) => {
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
            db.query(`INSERT INTO products SET id_category='${data.id_category}', id_branch='${data.id_branch}', name='${data.name}', quantity='${data.quantity}', description='${data.description}', price='${data.price}', url='${data.url}'`, (err, response) => {
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
            db.query(`UPDATE products SET ? WHERE id ='${id}'`, [data], (err, response) => {
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
            db.query(`DELETE FROM products WHERE id=${id}`, (err, response) => {

                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }

            })
        })
    }

}