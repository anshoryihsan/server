// const response = require("../Helpers/res");

// const readFile = {
//   excel: async (req, res, next) => {
//     try {
//       if (req.file == undefined) {
//         return response.failed(error, res);
//       }
//       const path = "./public/file/" + req.file.filename;
//       let fields = [];
//       await readXlsxFile(path).then((rows) => {
//         rows.shift();
//         rows.forEach((rows) => {
//           let field = {
//             id: rows[0],
//             nama: rows[1],
//             alamat: rows[2],
//           };
//           fields.push(field);
//         });
//       });
//       const data = fields;
//       next();
//     } catch (error) {
//       response.failed(error, res);
//     }
//   },
// };
// module.exports = readFile;
