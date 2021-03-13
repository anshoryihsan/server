const db = require("../Helpers/db");

module.exports = {
  setNilai: (body) => {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO data_nilai SET ?";

      db.query(query, body, (err, data) => {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  },
  updateNilai: (id, body) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM data_nilai WHERE id_mahasiswa=${id} AND id_matakuliah="${body.id_matakuliah}"`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            const query = `UPDATE data_nilai SET nilai = ${body.nilai} WHERE id_mahasiswa = ${id} AND id_matakuliah= "${body.id_matakuliah}"`;
            db.query(query, (err, data) => {
              if (!err) {
                resolve({
                  "id mahasiswa": id,
                  "id matakuliah": body.id_matakuliah,
                  nilai: body.nilai,
                });
              } else {
                reject(err);
              }
            });
          }
        }
      );
    });
  },
  deleteNilai: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM data_nilai WHERE id_mahasiswa=${id}`,
        (err, res) => {
          if (!err) {
            resolve();
          }
          reject(err);
        }
      );
    });
  },
  getNilai: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT data_nilai.id_mahasiswa, A.nama, B.nama_mata_kuliah as "nama matakuliah", nilai FROM data_nilai 
      INNER JOIN mahasiswa as A ON data_nilai.id_mahasiswa = A.id
      INNER JOIN mata_kuliah as B ON data_nilai.id_matakuliah = B.id`;
      db.query(query, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  avgNilai: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT id_mahasiswa,A.nama, ROUND(AVG(nilai),2) AS "rata-rata" FROM data_nilai
      INNER JOIN mahasiswa as A ON data_nilai.id_mahasiswa = A.id
      GROUP BY id_mahasiswa`;
      db.query(query, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
