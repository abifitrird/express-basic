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

exports.getTodos = (req, res) => {
  res.send({ Data: todos });
};

exports.detailTodo = (req, res) => {
  const filteredTodo = todos.filter((todo) => todo.id == req.params.id);
  res.send(filteredTodo[0]);
};

exports.storeTodo = (req, res) => {
  todos = [...todos, req.body];
  res.send({ Data: todos });
};

exports.updateTodo = (req, res) => {
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
};

exports.deleteTodo = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updatedTodo = todos.map((todo) => (todo.id == id ? body : todo));
  todos = updatedTodo;
  res.send({ data: todos });
};
