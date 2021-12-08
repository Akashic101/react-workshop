/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";

import SimpleName from "../components/SimpleName";
import Counter from "../components/Counter";
import { Book as BookI } from "../domain/types";

const isbn = "9781783983667";
function Playground() {
  const [book, setBook] = useState<BookI>();

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const bookAsJson = await response.json();
      setBook(bookAsJson);
    }

    fetchBook();
  }, []);

  return (
    <>
      <SimpleName />
      <Counter initialValue={0} />
      <Counter />
    </>
  );
}

export default Playground;
