const indexRoute = require("express").Router();
const nilaiRoutes = require("./nilai");
const mhsRoutes = require("./mahasiswa");

indexRoute.use("/nilai", nilaiRoutes);
indexRoute.use("/mahasiswa", mhsRoutes);

module.exports = indexRoute;
