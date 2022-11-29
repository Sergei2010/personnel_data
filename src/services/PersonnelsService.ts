import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IPersonnel } from './../models/IPersonnel';

export const personnelsAPI = createApi( {
	reducerPath: 'personnelsAPI',
	tagTypes: [ 'Personnels' ],
	baseQuery: fetchBaseQuery( {
		baseUrl: 'http://localhost:5000/personnels'
	} ),
	endpoints: ( build ) => ( {
		fetchAllPersonnels: build.query<IPersonnel[], { department: string, sortProperty: string, searchValue: string; }>( {
			query: ( { department, sortProperty, searchValue } ) => {
				if ( department === 'all' ) {
					return ( {
						url: '/',
						params: {
							//q:'',
							q: searchValue,
							_sort: sortProperty,
							//fetchBaseQuery: searchValue,
						}
					} );
				} else {
					return ( {
						url: '/',
						params: {
							department,
							_sort: sortProperty,
							//_search: searchValue,
							q: searchValue
						}
					} );
				}
			},
			providesTags: [ 'Personnels' ]
		} ),
		createPersonnel: build.mutation<IPersonnel, IPersonnel>( {
			query: ( personnel ) => ( {
				url: `/${ personnel.id }`,
				method: 'POST',
				body: personnel
			} ),
			invalidatesTags: [ 'Personnels' ]
		} ),
		updatePersonnel: build.mutation<IPersonnel, IPersonnel>( {
			query: ( personnel ) => ( {
				url: `/${ personnel.id }`,
				method: 'PUT',
				body: personnel
			} ),
			invalidatesTags: [ 'Personnels' ]
		} ),
		deletePersonnel: build.mutation<IPersonnel, IPersonnel>( {
			query: ( personnel ) => ( {
				url: `/${ personnel.id }`,
				method: 'DELETE',
			} ),
			invalidatesTags: [ 'Personnels' ]
		} )
	} )
} );
