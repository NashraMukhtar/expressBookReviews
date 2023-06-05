const axios = require("axios");
let books = require("./booksdb.js");

//get all books
async () => {
  try {
    const response = await axios.get("https://localhost:5000/");
    return response.status(200).send(response);
  } catch (err) {
    return response.status(500).send(err);
  }
};

//get book by isbn
async (req, res) => {
  try {
    await axios.get("https://localhost:5000/isbn/:isbn");
    books.map((book) => {
      if (book.isbn == req.params.isbn) {
        return res.status(200).send(book);
      }
    });
  } catch (err) {
    return response.status(500).send(err);
  }
};

// Get book details based on author
async (req, res) => {
  try {
    await axios.get("https://localhost:5000/author/:author");
    books.map((book) => {
      if (book.author == req.params.author) {
        return res.status(200).send(book);
      }
    });
  } catch {
    return response.status(500).send(err);
  }
};

// Get all books based on title
async (req, res) => {
  try {
    await axios.get("https://localhost:5000/title/:title");
    books.map((book) => {
      if (book.title == req.params.title) {
        return res.status(200).send(book);
      }
    });
  } catch {
    return response.status(500).send(err);
  }
};
