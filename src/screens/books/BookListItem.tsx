/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Link } from "react-router-dom";

import { Book } from "../../domain/types";

interface BookListItemProps extends Book {}

const BookListItem: React.FC<BookListItemProps> = ({ title, isbn }) => {
  return (
    <li>
      <Link to={`/books/${isbn}`}>{title}</Link>
    </li>
  );
};

export default BookListItem;
