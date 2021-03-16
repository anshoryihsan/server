const db = require("../Helpers/db");

module.exports = {
  importFile: (fields) => {
    // console.log(fields);
    return new Promise((resolve, reject) => {
      // const query = "INSERT INTO mahasiswa SET ?";
      const query = "INSERT INTO `mahasiswa` (`id`, `nama`, `alamat`) VALUES ?";
      db.query(query, [fields], (err, data) => {
        if (!err) {
          resolve(fields);
        } else {
          reject(err);
        }
      });
    });
  },
};
