import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeActions } from '../redux/theme/themeSlice';
import { RootState } from '../redux/store';
import Button from './Button';

function ThemeToggleButton() {
	const { toggleTheme } = themeActions;
	const dispatch = useDispatch();
	const isLightTheme = useSelector((state: RootState) => state.theme.isLightTheme);
	return (
		<Button
			text={isLightTheme ? 'Dark Mode' : 'Light Mode'}
			clickHandler={() => dispatch(toggleTheme())}
		/>
	);
}

export default ThemeToggleButton;
