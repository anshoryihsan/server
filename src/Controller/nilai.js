const nilaiModel = require("../Model/nilai");
const response = require("../Helpers/res");

module.exports = {
  setNilai: (req, res) => {
    nilaiModel
      .setNilai(req.body)
      .then((data) => response.success(data, res, "berhasil ditambahkan"))
      .catch((err) => response.failed(err.message, res));
  },
  updateNilai: (req, res) => {
    nilaiModel
      .updateNilai(req.params.id, req.body)
      .then((data) => response.success(data, res, "berhasil diperbaharui"))
      .catch((err) => response.failed(err, res));
  },
  deleteNilai: (req, res) => {
    nilaiModel
      .deleteNilai(req.params.id)
      .then((data) => response.success(data, res, "berhasil dihapus"))
      .catch((err) => response.failed(err, res));
  },
  getNilai: (req, res) => {
    nilaiModel
      .getNilai()
      .then((data) => response.success(data, res))
      .catch((err) => response.failed(err, res));
  },
  avgNilai: (req, res) => {
    nilaiModel
      .avgNilai()
      .then((data) => response.success(data, res))
      .catch((err) => response.failed(err, res));
  },
};
