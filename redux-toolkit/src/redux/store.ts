import { configureStore } from '@reduxjs/toolkit';
import usersApi from '../api/users';
import billsReducer from './bills/billsSlice';
import counterReducer from './counter/counterSlice';
import themeReducer from './theme/themeSlice';

// redux toolkit automatically adds redux thunk middleware to the store
// it also automatically combines slice reducers into a single root reducer
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		theme: themeReducer,
		bills: billsReducer,
		// adding the usersApi reducer as a top-level slice
		[usersApi.reducerPath]: usersApi.reducer,
	},
	// adding the usersApi middleware to the default middleware
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware),
});

// getting the type definition of the root state (the app state) and the store's dispatch function
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
