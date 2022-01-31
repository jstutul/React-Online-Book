import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import { addToDb, getStoredCart } from "../Cart/cart";
import Cartcomponent from "../Cart/Cartcomponent";
import Search from "../Search/Search";
// import Search from "../Search/Search";
const Bookshop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [newbooks, setNewBooks] = useState([]);
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
        setNewBooks(data.books);
      });
  }, []);

  useEffect(() => {
    if (books.length) {
      const saveCartBook = getStoredCart();
      const storedCart = [];
      for (const key in saveCartBook) {
        const cartBook = books.find((book) => key === book.isbn13);
        if (cartBook) {
          const quantity = saveCartBook[key];
          cartBook.quantity = quantity;
          storedCart.push(cartBook);
        }
      }

      setCart(storedCart);
    }
  }, [books]);

  const addToCart = (book) => {
    const newCart = [...cart, book];
    setCart(newCart);
    addToDb(book.isbn13);
  };
  // const handleSearch = (event) => {
  //   const searhText = event.target.value;
  //   const matchedBooks = books.filter((book) =>
  //     book.title.toLowerCase().includes(searhText.toLowerCase())
  //   );
  //   setNewBooks(matchedBooks);
  //   console.log(newbooks);
  // };
  const handleSearch = (event) => {
    const searhText = event.target.value;
    const matchedBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searhText.toLowerCase())
    );
    setNewBooks(matchedBooks);
    console.log(newbooks);
  };

  return (
    <div>
      <div className="mt-4">
        <Search handleSearch={handleSearch}></Search>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <h3>Total Books {newbooks.length}</h3>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
              {newbooks.map((book) => (
                <Book
                  book={book}
                  addToCart={addToCart}
                  key={book.isbn13}
                ></Book>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-3 d-none d-md-block">
            <h2 className="card-title">Cart Zone</h2>

            <Cartcomponent cart={cart}></Cartcomponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookshop;
