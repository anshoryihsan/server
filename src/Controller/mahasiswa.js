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
    // console.log(rows);
  });
  mhsModel
    .importFile(fields)
    .then((data) => response.success(data, res, "upload file berhasil"))
    .catch((err) => response.failed(err.message, res));
  console.log(fields);
};
module.exports = importFile;

// module.exports = {
//   importFile: async (req, res) => {
//     // // let path = "./public/file/" + req.file.filename;
//     // // console.log(path);
//     // // try {
//     // //   if (req.file == undefined) {
//     // //     return res.status(400).send("Mohon upload file excel!");
//     // //   }
//     // const path = "./public/file/" + req.file.filename;
//     // let fields = [];
//     // await readXlsxFile(path).then((rows) => {
//     //   rows.shift();
//     //   rows.forEach((rows) => {
//     //     let data = {
//     //       id: rows[0],
//     //       nama: rows[1],
//     //       alamat: rows[2],
//     //     };
//     //     fields.push(data);
//     //   });
//     //   // console.log(fields);
//     //   // const fileExcel =[]
//     //   // rows.forEach(row => {
//     //   //   id:[0],
//     //   // });
//     // });
//     console.log(req);
//     // mhsModel
//     //   .importFile(fields)
//     //   .then((data) => response.success(data, res, "upload file berhasil"))
//     //   .catch((err) => response.failed(err.message, res));
//     // console.log(fields);
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   },
// };
