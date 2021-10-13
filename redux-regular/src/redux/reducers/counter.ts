import {
	CHANGE_STEP,
	CounterAction,
	COUNTER_DECREMENT,
	COUNTER_INCREMENT,
	COUNTER_RESET,
} from '../actions/counter';

type CounterState = {
	count: number;
	step: number;
};

const initialState: CounterState = {
	count: 0,
	step: 1,
};

export function counterReducer(state = initialState, action: CounterAction): CounterState {
	switch (action.type) {
		case COUNTER_INCREMENT:
			return { ...state, count: state.count + action.step };
		case COUNTER_DECREMENT:
			return { ...state, count: state.count - action.step };
		case COUNTER_RESET:
			return { ...state, count: 0, step: 1 };
		case CHANGE_STEP:
			return { ...state, step: action.step };
		default:
			return state;
	}
}
