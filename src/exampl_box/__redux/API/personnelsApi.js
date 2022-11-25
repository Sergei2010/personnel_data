import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const personnelsApi = createApi({
	reducerPath: 'personnelsApi',
	tagTypes: ['Personnels'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/'
	}),
	endpoints: (build) => ({
		getPersonnels: build.query({
			query: (name = 'all') => `users?__example=${name}`,
		}),
		providesTags: (result) =>
			result
				? [
					...result.map(({ id }) => ({ type: 'Personnels', id })),
					{ type: 'Personnels', id: 'LIST' },
				]
				: [{ type: 'Personnels', id: 'LIST' }],
	})
});

export const { useGetPersonnelsQuery } = personnelsApi;