import React from 'react';
import { useSelector } from 'react-redux';
import usersApi from '../api/users';
import { RootState } from '../redux/store';

function Users() {
	const { data: users, error, isLoading } = usersApi.useFetchUsersQuery();
	const theme = useSelector((state: RootState) => state.theme.theme);
	return (
		<section className="users-section">
			<h2 className="users-title">Users</h2>
			{isLoading && <p>Fetching users...</p>}
			{error && <p>{error}</p>}
			<div className="users">
				{users &&
					users.map(user => (
						<div
							key={user.id}
							className="user"
							style={{ backgroundColor: theme.userBackgroundColor }}
						>
							<dt>Name:</dt>
							<dd>{user.name}</dd>
							<dt>Username:</dt>
							<dd>{user.username}</dd>
							<dt>Email:</dt>
							<dd>{user.email}</dd>
						</div>
					))}
			</div>
		</section>
	);
}

export default Users;
