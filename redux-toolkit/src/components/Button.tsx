import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type Props = {
	text: string;
	clickHandler: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ text, clickHandler }: Props) {
	const theme = useSelector((state: RootState) => state.theme.theme);
	return (
		<button
			className="button"
			type="button"
			onClick={clickHandler}
			style={{ backgroundColor: theme.buttonBackgroundColor }}
		>
			{text}
		</button>
	);
}

export default Button;
