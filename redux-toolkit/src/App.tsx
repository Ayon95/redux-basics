import React from 'react';
import Bills from './components/Bills';
import Counter from './components/Counter';
import ThemeToggleButton from './components/ThemeToggleButton';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Users from './components/Users';

function App() {
	const theme = useSelector((state: RootState) => state.theme.theme);
	return (
		<div className="App" style={{ color: theme.textColor, backgroundColor: theme.backgroundColor }}>
			<h1 className="app-title">Redux Basics</h1>
			<Counter />
			<Bills />
			<Users />
			<ThemeToggleButton />
		</div>
	);
}

export default App;
