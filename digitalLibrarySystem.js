// Question 1: Exploring JavaScript Objects

// Task 1: Create a constructor function for the Book object with properties for title, author, and pages

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
  
let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 304)
let book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
let book3 = new Book("1984", "George Orwell", 328);
let book4 = new Book("The Count of Monte Cristo", "Alexander Dumas", 1276);
let book5 = new Book("Short Story", "Anonymous", 50)
  
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);

// Task 2: Implement a method within the Book object to display book information

Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
};
  
book1.displayInfo(); 
book2.displayInfo(); 
book3.displayInfo();
book4.displayInfo();
book5.displayInfo();

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author

const libraryBooks = [];

function addBookToLibrary(book) {
    libraryBooks.push(book);
}

function searchBooksByTitle(title) {
    return libraryBooks.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchBooksByAuthor(author) {
    return libraryBooks.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

// Adding books
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);

// Searching books by title and author
console.log(searchBooksByTitle("The Hobbit"));
console.log(searchBooksByAuthor("Alexander Dumas"));

// Task 4: Create functions that utilize the filter method and the map method 

// Function to filter books with more than 100 pages
function filterBooksByNumberOfPages() {
    return libraryBooks.filter(book => book.pages >= 100);
}

// Function to map books and add "Title: " and "Author: "
function mapBookTitlesAndAuthors() {
    return libraryBooks.map(book => {
        return {
            ...book,
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`
        };
    });
}
  
console.log(libraryBooks)
console.log(filterBooksByNumberOfPages()); 
console.log(mapBookTitlesAndAuthors()); 