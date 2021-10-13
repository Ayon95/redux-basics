import { Bill } from '../../definitions';
import {
	BillsAction,
	FETCH_BILLS_FAILURE,
	FETCH_BILLS_LOADING,
	FETCH_BILLS_SUCCESS,
} from '../actions/bills';

export {};

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

export function billsReducer(state = initialState, action: BillsAction): BillsState {
	switch (action.type) {
		case FETCH_BILLS_LOADING:
			return {
				...state,
				isLoading: true,
				error: '',
			};

		case FETCH_BILLS_SUCCESS:
			return {
				...state,
				isLoading: false,
				bills: action.bills,
			};

		case FETCH_BILLS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.error,
			};

		default:
			return state;
	}
}
