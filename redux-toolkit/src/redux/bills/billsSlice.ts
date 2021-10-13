import { createSlice } from '@reduxjs/toolkit';
import { Bill } from '../../definitions';
import { fetchBills } from './billsThunks';

type BillsState = {
	isLoading: boolean;
	bills: Bill[];
	error: string;
};

const initialState: BillsState = {
	isLoading: false,
	bills: [],
	error: '',
};

const billsSlice = createSlice({
	name: 'bills',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchBills.pending, state => {
			state.isLoading = true;
			state.error = '';
		});

		builder.addCase(fetchBills.fulfilled, (state, action) => {
			state.isLoading = false;
			state.bills = action.payload;
		});

		builder.addCase(fetchBills.rejected, (state, action) => {
			state.isLoading = false;
			// action.payload will not be undefined if the promise was handled by rejectWithValue
			if (action.payload) state.error = action.payload;
			// if the rejected promise was not handled by rejectWithValue then the action will have an error object
			else state.error = action.error.message!;
		});
	},
});

export default billsSlice.reducer;
