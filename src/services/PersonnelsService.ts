import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IPersonnel } from './../models/IPersonnel';

export const personnelsAPI = createApi( {
	reducerPath: 'personnelsAPI',
	tagTypes: [ 'Personnels' ],
	baseQuery: fetchBaseQuery( {
		baseUrl: 'http://localhost:5000'
	} ),
	endpoints: ( build ) => ( {
		fetchAllPersonnels: build.query<IPersonnel[], string>( {
			query: ( department: string ) => ( {
				url: '/personnels',
				params: {
					q: department === 'all' ? '' : department
				}
			} ),
			providesTags: [ 'Personnels' ]
		} ),
		createPersonnel: build.mutation<IPersonnel, IPersonnel>( {
			query: ( personnel ) => ( {
				url: `/personnels/${ personnel.id }`,
				method: 'POST',
				body: personnel
			} ),
			invalidatesTags: [ 'Personnels' ]
		} ),
		updatePersonnel: build.mutation<IPersonnel, IPersonnel>( {
			query: ( personnel ) => ( {
				url: `/personnels/${ personnel.id }`,
				method: 'PUT',
				body: personnel
			} ),
			invalidatesTags: [ 'Personnels' ]
		} ),
		deletePersonnel: build.mutation<IPersonnel, IPersonnel>( {
			query: ( personnel ) => ( {
				url: `/personnels/${ personnel.id }`,
				method: 'DELETE',
			} ),
			invalidatesTags: [ 'Personnels' ]
		} )
	} )
} );
