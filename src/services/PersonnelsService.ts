import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IPersonnel } from './../models/IPersonnel';

export const personnelsAPI = createApi( {
	reducerPath: 'personnelsAPI',
	tagTypes: [ 'Personnels' ],
	baseQuery: fetchBaseQuery( {
		baseUrl: 'http://localhost:5000'
	} ),
	endpoints: ( build ) => ( {
		fetchAllPersonnels: build.query<IPersonnel[], { department: string, sortProperty: string; }>( {
			query: ( { department, sortProperty } ) => {
				if ( department === 'all' ) {
					return ( {
						url: '/personnels',
						params: {
							q: '',
							_sort: sortProperty,
						}
					} );
				} else {
					return ( {
						url: '/personnels',
						params: {
							department,
							_sort: sortProperty,
						}
					} );
				}
			},
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
