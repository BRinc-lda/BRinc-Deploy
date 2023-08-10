/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import BookCoverCard from "../BookCoverCard/BookCoverCard";

function BookList() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [searchBook, setSearchBook] = useState("");

  const handleChange = (event) => {
    setSearchBook(event.target.value);
  };

  const getBook = () => {
    axios
      .get(`http://openlibrary.org/search.json?title=${searchBook}`)
      .then((response) => {
        if (response.data.docs) {
          const newBooks = response.data.docs.slice(0, 4).map((singleBook) => {
            //the slice was set to 20 but i will only want to display 4
            const {
              key,
              author_name,
              cover_i,
              edition_count,
              first_publish_year,
              title,
            } = singleBook;

            return {
              id: key.replace("/works/", ""),
              author: author_name,
              cover_id: cover_i,
              edition_count: edition_count,
              first_publish_year: first_publish_year,
              title: title,
            };
          });
          setBooks(newBooks);
          setError("");
          if (newBooks.length === 0) {
            setBooks([]);
            setError("No Search results found!");
          }
        } else {
          setBooks([]);
          setError("No Search results found!");
        }
      });
  };

  useEffect(() => {
    if (searchBook && searchBook.length > 0) {
      getBook();
    } else {
      setBooks([]);
      setError(""); //maybe we should put empty string instead of No Search results found!
    }
  }, [searchBook]);
  return (
    <>
      <SearchBar handleChange={handleChange} searchBook={searchBook} />
      {books && books.length > 0 && searchBook !== "" ? (
        books.map((book) => <BookCoverCard key={book.id} book={book} />)
      ) : searchBook === "" && error && error.length > 0 ? (
        <h2>{error}</h2>
      ) : null}
    </>
  );
}

export default BookList;
