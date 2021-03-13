const db = require("../Helpers/db");

module.exports = {
  importFile: (fields) => {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO mahasiswa SET ?";
      db.query(query, fields, (err, data) => {
        if (!err) {
          resolve(fields);
        } else {
          reject(err);
        }
      });
    });
  },
};
