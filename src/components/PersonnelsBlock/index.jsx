import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { useGetPersonnelsQuery } from '../../redux/API/personnelsApi';
import Skeleton from './Skeleton';
import Personnels from '../Personnels';
import CriticalError from '../СriticalЕrror';

const PersonnelsBlock = () => {
	const { isLoading, isError } = useGetPersonnelsQuery();
	const navigate = useNavigate();
	const department = useSelector(state => state.filter.department);
	const code = useSelector(state => state.code.code);
	//const { status, error } = useSelector(state => state.personnels);

	/* React.useEffect(() => {

		setLoading(true);

		const options = {
			params: {
				__example: code ? '' : `${department}`,
				__code: code ? '500' : undefined,
			},
			onDownloadProgress: progressEvent => {
				setLoading(false);
			},
		};
		personnelsAPI.get('', options).then((resp) => {
			let allPersons = resp.data.items;
			if (sort.name === sortList[0].name) {
				allPersons = allPersons.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
			} else if (sort.name === sortList[1].name) {
				allPersons = allPersons.sort((a, b) => moment(b.birthday) - moment(a.birthday));
			}
			dispatch(setpersonnels(allPersons));
		})
			.catch(err => {
				if (err.response) {
					// client received an error response (5xx, 4xx)
					console.log('err.response:', err.response);
				} else if (err.request) {
					// client never received a response, or request never left
					console.log('err.request:', err.request);
				} else {
					// anything else
					console.log('anything else:', err.request);
				}
			});
	}, [department, dispatch, code, sort]); */

	React.useEffect(() => {
		const queryString = qs.stringify({
			department,
			//sort,
			//searchValue
		});

		navigate(`?${queryString}`);
	}, [department, /* sort, searchValue, */ navigate]);

	return (
		<div className="wrapper">
			<div className="personnel-block">
				{ !code && isLoading && ([...new Array(3)].map((item, index) => {
					return (
						<Skeleton key={ index } />
					);
				})) }
				{ !code && !isLoading && <Personnels /> }
				{ (code || isError) && <CriticalError /> }
			</div>
		</div>
	);
};

export default PersonnelsBlock;