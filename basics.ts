// DONE - Define an interface Book with the following properties:
// id (number)
// title (string)
// author (string)
// published (Date)
// available (boolean)

interface Book {
  id: number;
  title: string;
  author: string;
  published: Date;
  available: boolean;
}

// DONE - Create an array books with the type Book[] and add a few sample books to the array.
const books: Book[] = [
  {
    id: 1,
    title: "A Court Of Thrones And Roses",
    author: "Sarah J. Maas",
    published: new Date("2015-05-05"),
    available: true,
  },
  {
    id: 2,
    title: "A Court Of Mist And Fury",
    author: "Sarah J. Maas",
    published: new Date("2016-05-03"),
    available: true,
  },
  {
    id: 3,
    title: "A Court Of Wings And Ruin",
    author: "Sarah J. Maas",
    published: new Date("2017-05-02"),
    available: true,
  },
  {
    id: 4,
    title: "A Court Of Frost And Starlight",
    author: "Sarah J. Maas",
    published: new Date("2018-05-01"),
    available: false,
  },
  {
    id: 5,
    title: "A Court Of Silver Flames",
    author: "Sarah J. Maas",
    published: new Date("2021-02-16"),
    available: false,
  },
];

// DONE - Define a function addBook(book: Book): void that takes a Book object as a parameter and adds it to the books array.
function addBook(book: Book): void {
  books.push(book);
}

// DONE - Define a function findBookById(id: number): Book | undefined that takes a book id as a parameter and
//returns the book with the given id or undefined if the book is not found.
function findBookById(id: number): Book | undefined {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.id === id) {
      return book;
    }
  }
  return undefined;
}

// DONE - Define a function updateBook(book: Book): boolean that takes a Book object as a parameter,
//finds the book with the same id in the books array, and updates its properties.
//The function should return true if the book was updated successfully or false if the book was not found.
function updateBook(book: Book): boolean {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === book.id) {
      books[i] = book;
      return true;
    }
  }
  return false;
}

// DONE - Define a function removeBook(id: number): boolean that takes a book id as a parameter and
//removes the book with the given id from the books array.
//The function should return true if the book was removed successfully or false if the book was not found.
function removeBook(id: number): boolean {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      books.splice(i, 1);
      return true;
    }
  }
  return false;
}

// TESTING
console.log("Array of books before changes: ");
console.log(books);
console.log("");

//adding book
addBook({
  id: 6,
  title: "Jane Eyre",
  author: "Charlotte Bronte",
  published: new Date("1847-08-19"),
  available: true,
});
console.log("Array of books after adding Jane Eyre: ");
console.log(books);
console.log("");

//updating availability 
const bookToUpdate = findBookById(1);
if (bookToUpdate) {
  bookToUpdate.available = false;
  updateBook(bookToUpdate);
}
console.log("Updated book 1 to false in availability: ");
console.log(books);
console.log("");

//removing book
removeBook(3);
console.log("Array of books after removing book 3: ");
console.log(books);
console.log("");

//finding book by id
const bookToFind = findBookById(2);
console.log("Finding book 2 only: ");
console.log(bookToFind);
