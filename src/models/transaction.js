const db = require("../configs/connect");

module.exports = {
  getTransaction: uid => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT t.id,  t.id_user, t.created_date ,t.quantity,  p.name, c.category_name, b.branch_name, p.price  FROM transaction AS t INNER JOIN user AS u ON (t.id_user = u.id)INNER JOIN products AS p ON (t.id_product = p.id) INNER JOIN branch AS b ON (p.id_branch = b.id) INNER JOIN category AS c ON (p.id_category = c.id) WHERE u.id = '${uid}'`,
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

  getTransactionAdmin: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT t.id,  t.id_user, t.created_date ,t.quantity,  p.name, c.category_name, b.branch_name, p.price  FROM transaction AS t INNER JOIN user AS u ON (t.id_user = u.id)INNER JOIN products AS p ON (t.id_product = p.id) INNER JOIN branch AS b ON (p.id_branch = b.id) INNER JOIN category AS c ON (p.id_category = c.id)`,
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

  addTransaction: data => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO transaction SET ?`, data, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
