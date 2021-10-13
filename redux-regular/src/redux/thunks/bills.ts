import { Bill } from '../../definitions';
import { fetchBillsFailure, fetchBillsLoading, fetchBillsSuccess } from '../actions/bills';
import { AppDispatch } from '../store';

const url = '  http://localhost:8000/bills';

export async function fetchBillsThunk(dispatch: AppDispatch) {
	try {
		// loading state - just before the request is made
		dispatch(fetchBillsLoading());
		const response = await fetch(url);
		if (!response.ok) throw new Error('Failed to fetch bills due to an error');
		const data: Bill[] = await response.json();
		// success state - request was successful
		dispatch(fetchBillsSuccess(data));
	} catch (error) {
		// failure state - the request failed
		dispatch(fetchBillsFailure((error as Error).message));
	}
}
