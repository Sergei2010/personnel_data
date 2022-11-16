import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IPersonnel } from './../models/IPersonnel';

export const personnelsAPI = createApi( {
	reducerPath: 'personnelsAPI',
	baseQuery: fetchBaseQuery( {
		baseUrl: 'http://localhost:5000'
	} ),
	tagTypes: [ 'Personnel' ],
	endpoints: ( build ) => ( {
		fetchAllPersonnels: build.query<IPersonnel[], string>( {
			query: ( department: string = 'all' ) => ( {
				url: '/personnels',
				params: {
					_department: department
				}
			} ),
			providesTags: result => [ 'Personnel' ]
		} ),
		createPersonnel: build.mutation<IPersonnel, IPersonnel>( {
			query: ( personnel ) => ( {
				url: '/personnels',
				method: 'POST',
				body: personnel
			} ),
			invalidatesTags: [ 'Personnel' ]
		} ),
		updatePersonnel: build.mutation<IPersonnel, IPersonnel>( {
			query: ( personnel ) => ( {
				url: `/personnels/${ personnel.id }`,
				method: 'PUT',
				body: personnel
			} ),
			invalidatesTags: [ 'Personnel' ]
		} ),
		deletePersonnel: build.mutation<IPersonnel, IPersonnel>( {
			query: ( personnel ) => ( {
				url: `/personnels/${ personnel.id }`,
				method: 'DELETE',
			} ),
			invalidatesTags: [ 'Personnel' ]
		} )
	} )
} );
