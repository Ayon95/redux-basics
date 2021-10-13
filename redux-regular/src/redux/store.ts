import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { billsReducer } from './reducers/bills';
import { counterReducer } from './reducers/counter';
import { themeReducer } from './reducers/theme';

// combining all the reducers to create a single root reducer
const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
	bills: billsReducer,
});

// creating a store enhanced with thunk middleware
export const store = createStore(rootReducer, applyMiddleware(thunk));

// getting the type definition of the root state (the app state) and the store's dispatch function
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
