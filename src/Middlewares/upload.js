const multer = require("multer");
const path = require("path");
const response = require("../Helpers/res");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/file");
  },
  filename: function (req, file, cb) {
    str = file.originalname;
    const fileName = str.replace(/\s/g, "-");
    cb(null, `${Date.now()}-${fileName}`);
  },
});
const limits = { fileSize: 3e6 }; //3000000
const fileFilter = (req, file, cb) => {
  const fExtens = /xlsx/;
  const extName = fExtens.test(path.extname(file.originalname).toLowerCase());
  if (extName) {
    cb(null, true);
  } else {
    cb("format file (xlsx)", null);
  }
};

const upload = multer({ storage, limits, fileFilter });

const uploadFile = {
  singleUpload: (req, res, next) => {
    const singleUpload = upload.single("file");
    singleUpload(req, res, (err) => {
      if (err) {
        if (err.code === `LIMIT_FIELD_VALUE`) {
          response.failed(err, res);
        } else {
          response.failed(err, res);
        }
      } else {
        next();
      }
    });
  },
};

module.exports = uploadFile;
