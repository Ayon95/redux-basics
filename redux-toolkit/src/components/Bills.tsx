import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchBills } from './../redux/bills/billsThunks';

function Bills() {
	const { isLoading, bills, error } = useSelector((state: RootState) => state.bills);
	const dispatch = useDispatch();

	// fetch bills when this component mounts
	useEffect(() => {
		dispatch(fetchBills());
	}, [dispatch]);
	return (
		<ul className="bills">
			<h2 className="bills-title">Bills</h2>
			{isLoading && <p>Fetching data...</p>}
			{error && <p>{error}</p>}
			{bills.map(bill => (
				<li className="bill" key={bill.id}>
					{bill.name}
				</li>
			))}
		</ul>
	);
}

export default Bills;
