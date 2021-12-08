/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../domain/types"

const Book: React.FC = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<Book | undefined>(null)
  return <p>ISBN: {isbn}</p>;
};

export default Book;
