// inisialisasi (import) expressJS
const express = require("express");

// import express group routes
require("express-group-routes");

// init variabel app yang menghandle layanan server menggunakan express
const app = express();

// import router
const router = require("./src/routes/router");

// consume body-parser untuk menangkap respon dari client ke server kemudian dapat diolah
app.use(express.json());

// consume router
app.use("/api/v1/", router);

// port akses server
const port = 5000;

// fungsi agar app bisa berjalan
app.listen(port, () => console.log(`Listening on port ${port}`));
