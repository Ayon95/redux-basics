import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../definitions';

const usersApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
	tagTypes: ['Users'],
	endpoints: builder => ({
		fetchUsers: builder.query<User[], void>({
			query: () => '/users',
			providesTags: result =>
				// providing a unique 'Users' tag instance for each user, and a unique 'LIST' tag for the entire list of users
				result
					? [
							...result.map(user => ({ type: 'Users' as const, id: user.id })),
							{ type: 'Users', id: 'LIST' },
					  ]
					: [{ type: 'Users', id: 'LIST' }],
		}),
	}),
});

export default usersApi;
