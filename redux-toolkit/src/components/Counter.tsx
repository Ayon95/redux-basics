import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../redux/counter/counterSlice';
import { RootState } from '../redux/store';
import Button from './Button';

function Counter() {
	const { increment, decrement, changeStep, reset } = counterActions;
	const counterState = useSelector((state: RootState) => state.counter);
	const theme = useSelector((state: RootState) => state.theme.theme);
	const dispatch = useDispatch();

	function handleChangeStep(e: React.ChangeEvent<HTMLInputElement>) {
		const step = Number.parseFloat(e.target.value);
		dispatch(changeStep(step));
	}
	return (
		<section className="counter">
			<h2 className="counter-title">Count: {counterState.count}</h2>
			<div className="button-container">
				<Button text="Increment" clickHandler={() => dispatch(increment(counterState.step))} />
				<Button text="Decrement" clickHandler={() => dispatch(decrement(counterState.step))} />
				<Button text="Reset" clickHandler={() => dispatch(reset())} />
			</div>
			<div className="counter-input-container">
				<label className="label" htmlFor="step">
					Step
				</label>
				<input
					className="input"
					type="number"
					id="step"
					value={counterState.step}
					onChange={handleChangeStep}
					style={{ color: theme.inputTextColor, backgroundColor: theme.inputBackgroundColor }}
				/>
			</div>
		</section>
	);
}

export default Counter;
