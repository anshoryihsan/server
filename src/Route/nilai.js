const nilaiRoute = require("express").Router();
const nilaiController = require("../Controller/nilai");

nilaiRoute.post("/", nilaiController.setNilai);
nilaiRoute.put("/:id", nilaiController.updateNilai);
nilaiRoute.delete("/:id", nilaiController.deleteNilai);
nilaiRoute.get("/", nilaiController.getNilai);
nilaiRoute.get("/avg", nilaiController.avgNilai);

module.exports = nilaiRoute;
