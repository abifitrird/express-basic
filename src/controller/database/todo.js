const { todo } = require("../../../models");

// fungsi untuk membaca data
exports.read = async (req, res) => {
  try {
    // variabel penampung data dari model todo
    // await melakukan blocking terhadap function/method yang dijalankan, setelah diselesaikan, baru eksekusi line di bawahnya
    const todos = await todo.findAll();

    res.send({
      message: "Response Success",
      data: { todos },
    });

    // jika promise di atas tidak fulfilled atau rejected maka throw error
  } catch (err) {
    // tampilkan laporan error di console untuk debugging
    console.log(err);

    // jika error maka berikan pemberitahuan kepada client
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};

// fungsi untuk membaca salah satu data
exports.readOne = async (req, res) => {
  try {
    const { id } = req.params;
    const detailTodo = await todo.findOne({
      where: {
        id,
      },
    });
    res.send({
      message: "Response success",
      data: {
        todo: detailTodo,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};

// fungsi untuk menambah data
exports.create = async (req, res) => {
  try {
    const todoCreated = await todo.create(req.body);
    res.send({
      message: "Todo has successfully created",
      data: {
        todo: todoCreated,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};

// fungsi untuk menghapus data
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    await todo.destroy({
      where: {
        id,
      },
    });
    res.send({
      message: `Data ${id} has been deleted`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};
