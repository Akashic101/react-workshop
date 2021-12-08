import React from "react";

import SimpleName from "./../components/SimpleName";
import Counter from "./../components/Counter";
import BookList from "./../components/BookList";
import Book from "./../components/Book";

function Playground() {
  return (
    <>
      <SimpleName />
      <Counter initialValue={0} />
      <Counter />
      <BookList
        books={[
          { title: "My first book", price: 11.11 },
          { title: "My second book", price: 22.22 },
        ]}
        onItemClick={(book) => alert(book.price)}
      />
      <Book />
    </>
  );
}

export default Playground;
