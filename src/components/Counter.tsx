import React, { useState } from "react";

interface CounterInterface {
	initialValue?: number;
	stopValue?: number;
	stepSize?: number;
}

const Counter: React.FC<CounterInterface> = ({
	initialValue = 100,
	stopValue = 110,
	stepSize = 1,
}) => {
	const [count, setCount] = useState<number>(initialValue);

	const incrementCount = () => {
		if (count + 1 * stepSize > stopValue) {
			return;
		}
		setCount(count + 1 * stepSize);
	};

	const decrementCount = () => {
		setCount(count - 1 * stepSize);
	};

	const resetCount = () => {
		setCount(initialValue);
	};

	return (
		<div id="counter">
			<button className="decrement" onClick={decrementCount}>
				-
			</button>
			<p>{count}</p>
			<button className="increment" onClick={incrementCount}>
				+
			</button>
			<button className="reset" onClick={resetCount}>
				Reset
			</button>
		</div>
	);
};
export default Counter;
