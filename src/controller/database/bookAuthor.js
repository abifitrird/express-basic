const { Book, Author, AuthorBook } = require("../../../models");

// mengambil data buku dengan authornya
exports.getBooksAuthors = async (req, res) => {
  try {
    const bookData = await Book.findAll({
      include: {
        model: Author,
        as: "authors",
        through: {
          model: AuthorBook,
          as: "info",
        },
      },
    });
    res.send({
      message: "Success",
      data: {
        book: bookData,
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

// mengambil data author beserta buku yang dibuatnya
exports.getAuthorsBooks = async (req, res) => {
  try {
    const AuthorData = await Author.findAll({
      include: {
        model: Book,
        as: "book",
        through: {
          model: AuthorBook,
          as: "info",
        },
      },
    });
    res.send({
      message: "Your data has been successfully loaded. Here they are",
      data: {
        author: AuthorData,
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
