// inisialisasi (import) expressJS
const express = require("express");

// import body-parser untuk menangkap respon dari client ke server kemudian dapat diolah
const bodyParser = require("body-parser");

// import express group routes
require("express-group-routes");

// init variabel app yang menghandle layanan server menggunakan express
const app = express();

// consume body-parser
app.use(bodyParser.json());

// port akses server
const port = 5000;

// fake data
let todos = [
  {
    id: 1,
    title: "Cuci Muka",
    isDone: true,
  },
  {
    id: 2,
    title: "Sarapan",
    isDone: false,
  },
];

// get data keseluruhan
app.get("/todos", (req, res) => {
  res.send({ Data: todos });
});

// get data spesifik
app.get("/todo/:id", (req, res) => {
  const filteredTodo = todos.filter((todo) => todo.id == req.params.id);
  res.send(filteredTodo[0]);
});

// post data yang diperoleh dari body
app.post("/todo", (req, res) => {
  todos = [...todos, req.body];
  res.send({ Data: todos });
});

// update data sebagian berdasarkan key tertentu
app.patch("/todo/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updatedTodo = todos.map((todo) =>
    todo.id == id
      ? {
          ...todo,
          title: body.title,
          isDone: body.isDone,
        }
      : todo
  );
  todos = updatedTodo;
  res.send({ data: todos });
});

// replace secara keseluruhan dari object yang ingin kita ubah
app.put("/todo-put/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updatedTodo = todos.map((todo) => (todo.id == id ? body : todo));
  todos = updatedTodo;
  res.send({ data: todos });
});

// delete data
app.delete("/todo/:id", (request, response) => {
  const { id } = request.params;
  const filteredTodo = todos.filter((todo) => todo.id != id);
  response.send({ data: filteredTodo });
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>> CRUD END <<<<<<<<<<<<<<<<<<<<<<

// penggunaan prefiks api untuk group routing
// app.get("/api/v1/todos", (req, res) => {
//   res.send({ Data: todos });
// });

app.group("/api/v1", (router) => {
  router.get("/todos", (req, res) => {
    res.send({ Data: todos });
  });
});

// fungsi agar app bisa berjalan
app.listen(port, () => console.log(`Listening on port ${port}`));
