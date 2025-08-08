// Import express
const express = require("express");
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// In-memory data store (array)
let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" }
];

// ✅ 1. GET - Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// ✅ 2. GET - Get single book by ID
app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
});

// ✅ 3. POST - Add new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and Author are required" });
  }
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// ✅ 4. PUT - Update book by ID
app.put("/books/:id", (req, res) => {
  const { title, author } = req.body;
  const book = books.find(b => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// ✅ 5. DELETE - Remove book by ID
app.delete("/books/:id", (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  books.splice(bookIndex, 1);
  res.json({ message: "Book deleted successfully" });
});

// Start server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`);
});
