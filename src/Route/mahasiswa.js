const mhsRoute = require("express").Router();
const mhsController = require("../Controller/mahasiswa");
const upload = require("../Middlewares/upload");

// mhsRoute.post("/", upload.singleUpload, (req, res) => {
//   console.log(req);
// });
mhsRoute.post("/", upload.singleUpload, mhsController);

module.exports = mhsRoute;
