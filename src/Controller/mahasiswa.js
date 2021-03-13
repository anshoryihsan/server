const mhsModel = require("../Model/mahasiswa");
const response = require("../Helpers/res");
const readXlsxFile = require("read-excel-file/node");

const importFile = async (req, res) => {
  let path = "./public/file/" + req.file.filename;
  let fields = [];
  await readXlsxFile(path).then((rows) => {
    rows.shift();
    rows.forEach((rows) => {
      let data = {
        id: rows[0],
        nama: rows[1],
        alamat: rows[2],
      };
      fields.push(data);
    });
  });
  mhsModel
    .importFile(fields)
    .then((data) => response.success(data, res, "upload file berhasil"))
    .catch((err) => response.failed(err.message, res));
  console.log(fields);
};
module.exports = importFile;
