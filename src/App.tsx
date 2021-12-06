/* eslint-disable react/react-in-jsx-scope */
import SimpleName from "./components/SimpleName";
import Counter from "./components/Counter";
import BookList from "./components/BookList";
import Book from "./components/Book";

function App() {
	return (
		<div className="App">
			<div>
				<BookList
					books={[
						{ title: "My first book", price: 11.11 },
						{ title: "My second book", price: 22.22, numPages: 4 },
					]}
					onItemClick={(book) => alert(book.price)}
				/>
				<Book />
			</div>
			<div className="innerDiv">
				<h1>Normaler Counter</h1>
				<Counter />
			</div>
			<div className="innerDiv">
				<h1>Counter mit initial Value</h1>
				<Counter initialValue={50} />
			</div>
			<div className="innerDiv">
				<h1>Counter mit initial Value und StopValue</h1>
				<Counter initialValue={100} stopValue={105} />
			</div>
			<div className="innerDiv">
				<h1>Counter mit initial Value und StepSize</h1>
				<Counter initialValue={50} stepSize={2} />
			</div>
			<div className="innerDiv">
				<h1>Counter mit allem</h1>
				<Counter initialValue={50} stopValue={100} stepSize={10} />
			</div>
		</div>
	);
}

export default App;
