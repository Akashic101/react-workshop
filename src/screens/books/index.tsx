/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import {Book} from "../../domain/types"

const Books: React.FC = () => {
	const [data, setData] = useState<Book>();
	useEffect(() => {
		async function fetchData() {
			const response = await fetch("http://localhost:4730/books");
			const data = await response.json();
			setData(data);
		}
    fetchData()
	}, []); // empty array if on mount, array with dependencies e.g. for params

	// use `data` here if available
	return data ? <p>Data is available!</p> : <p>Still loading...</p>;
};

export default Books;
