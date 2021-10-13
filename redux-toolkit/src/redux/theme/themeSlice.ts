import { createSlice } from '@reduxjs/toolkit';

type Theme = {
	backgroundColor: string;
	textColor: string;
	buttonBackgroundColor: string;
	inputBackgroundColor: string;
	inputTextColor: string;
	userBackgroundColor: string;
};

type ThemeState = {
	isLightTheme: boolean;
	theme: Theme;
};

const initialState: ThemeState = {
	isLightTheme: true,
	theme: {
		backgroundColor: '#fff',
		textColor: '#292929',
		buttonBackgroundColor: '#1557c2',
		inputTextColor: '#292929',
		inputBackgroundColor: '#e8e8e8',
		userBackgroundColor: '#cfcfcf',
	},
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: state => {
			state.theme = {
				backgroundColor: state.isLightTheme ? '#292929' : '#fff',
				textColor: state.isLightTheme ? '#d6d6d6' : '#292929',
				buttonBackgroundColor: state.isLightTheme ? '#1c69e6' : '#1557c2',
				inputTextColor: state.isLightTheme ? '#fff' : '#292929',
				inputBackgroundColor: state.isLightTheme ? '#525252' : '#e8e8e8',
				userBackgroundColor: state.isLightTheme ? '#525252' : '#cfcfcf',
			};
			state.isLightTheme = !state.isLightTheme;
		},
	},
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
