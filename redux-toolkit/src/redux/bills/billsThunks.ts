import { createAsyncThunk } from '@reduxjs/toolkit';
import { Bill } from '../../definitions';

const url = 'http://localhost:8000/bills';
/* thunk action creator that will be responsible for fetching bills
Specified a few TS generic arguments because I need to use thunkAPI in the payload creator:
- the first argument defines the return type of the payload creator
- the second argument defines the type of the payload creator's first argument; not passing any argument, so it is void
- the third argument is an object that defines types for thunkAPI properties;
    - here we are specifying the type of the value passed into rejectWithValue()
    - if the request fails due to an error, then the payload creator will return a promise that resolves with 'Failed to fetch bills'
    - this will be available as action.payload in case reducers
*/
export const fetchBills = createAsyncThunk<Bill[], void, { rejectValue: string }>(
	'bills/fetchBills',
	async (_, thunkAPI) => {
		const response = await fetch(url);
		if (!response.ok) return thunkAPI.rejectWithValue('Failed to fetch bills.');
		const data: Bill[] = await response.json();
		return data;
	}
);
