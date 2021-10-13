import { Bill } from '../../definitions';
import { fetchBillsThunk } from '../thunks/bills';

export const FETCH_BILLS_LOADING = 'bills/fetchBills/loading';
export const FETCH_BILLS_SUCCESS = 'bills/fetchBills/success';
export const FETCH_BILLS_FAILURE = 'bills/fetchBills/failure';

type FetchBillsLoadingAction = { type: typeof FETCH_BILLS_LOADING };
type FetchBillsSuccessAction = {
	type: typeof FETCH_BILLS_SUCCESS;
	bills: Bill[];
};
type FetchBillsFailureAction = {
	type: typeof FETCH_BILLS_FAILURE;
	error: string;
};

// this is a special type of action creator; it is a thunk action creator; it returns an async function (thunk)
export function fetchBills() {
	return fetchBillsThunk;
}

export function fetchBillsLoading(): FetchBillsLoadingAction {
	return { type: FETCH_BILLS_LOADING };
}

export function fetchBillsSuccess(bills: Bill[]): FetchBillsSuccessAction {
	return {
		type: FETCH_BILLS_SUCCESS,
		bills,
	};
}

export function fetchBillsFailure(error: string): FetchBillsFailureAction {
	return { type: FETCH_BILLS_FAILURE, error };
}

export type BillsAction =
	| FetchBillsLoadingAction
	| FetchBillsSuccessAction
	| FetchBillsFailureAction;
