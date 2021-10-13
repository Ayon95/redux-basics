import { ThemeAction, THEME_TOGGLE } from '../actions/theme';

type Theme = {
	backgroundColor: string;
	textColor: string;
	buttonBackgroundColor: string;
	inputBackgroundColor: string;
	inputTextColor: string;
};

type ThemeState = {
	isLightTheme: boolean;
	theme: Theme;
};

const lightTheme: Theme = {
	backgroundColor: '#fff',
	textColor: '#292929',
	buttonBackgroundColor: '#1557c2',
	inputTextColor: '#1a1a1a',
	inputBackgroundColor: '#e8e8e8',
};

const darkTheme: Theme = {
	backgroundColor: '#292929',
	textColor: '#d6d6d6',
	buttonBackgroundColor: '#1c69e6',
	inputTextColor: '#fff',
	inputBackgroundColor: '#525252',
};

const initialState: ThemeState = {
	isLightTheme: true,
	theme: lightTheme,
};

export function themeReducer(state = initialState, action: ThemeAction): ThemeState {
	switch (action.type) {
		case THEME_TOGGLE:
			return {
				...state,
				isLightTheme: !state.isLightTheme,
				theme: {
					...(state.isLightTheme ? darkTheme : lightTheme),
				},
			};
		default:
			return state;
	}
}
