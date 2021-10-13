// action type strings
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';
export const COUNTER_RESET = 'counter/reset';
export const CHANGE_STEP = 'counter/changeStep';

// type definitions for various action objects
type IncrementAction = { type: typeof COUNTER_INCREMENT; step: number };
type DecrementAction = { type: typeof COUNTER_DECREMENT; step: number };
type ChangeStepAction = { type: typeof CHANGE_STEP; step: number };
type ResetAction = { type: typeof COUNTER_RESET };

// action creators - functions that return an action object
export function increment(step: number): IncrementAction {
	return { type: COUNTER_INCREMENT, step };
}

export function decrement(step: number): DecrementAction {
	return { type: COUNTER_DECREMENT, step };
}

export function reset() {
	return { type: COUNTER_RESET };
}

export function changeStep(step: number): ChangeStepAction {
	return { type: CHANGE_STEP, step };
}

export type CounterAction = IncrementAction | DecrementAction | ResetAction | ChangeStepAction;
