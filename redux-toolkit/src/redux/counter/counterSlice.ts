import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
	count: number;
	step: number;
};

const initialState: CounterState = {
	count: 0,
	step: 1,
};

// creating a state slice for counter
// createSlice will automatically create the necessary action creators
// it will also combine the case reducers into a single slice reducer
const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
		decrement: (state, action: PayloadAction<number>) => {
			state.count -= action.payload;
		},
		reset: state => {
			state.count = 0;
			state.step = 1;
		},
		changeStep: (state, action: PayloadAction<number>) => {
			state.step = action.payload;
		},
	},
});

console.log(counterSlice);
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
