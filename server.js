// inisialisasi (import) expressJS
const express = require("express");

// import body-parser untuk menangkap respon dari client ke server kemudian dapat diolah
const bodyParser = require("body-parser");

// import express group routes
require("express-group-routes");

// init variabel app yang menghandle layanan server menggunakan express
const app = express();

// import router
const router = require("./src/routes/router");

// consume body-parser
app.use(bodyParser.json());

// consume router
app.use("/api/v1/", router);

// port akses server
const port = 5000;

// fungsi agar app bisa berjalan
app.listen(port, () => console.log(`Listening on port ${port}`));
