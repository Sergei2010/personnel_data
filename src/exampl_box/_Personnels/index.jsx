import React from 'react';
import { useSelector } from 'react-redux';

import { useGetPersonnelsQuery } from '../__redux/API/personnelsApi';

const Personnels = () => {

	const { sortProperty } = useSelector(state => state.filter.sort);
	const { department } = useSelector(state => state.filter);

	const { data = [] } = useGetPersonnelsQuery(department);
	const { items } = data;

	const personnels = JSON.stringify(data.items);

	console.log('personnels:', personnels);

	return (
		<>
			<ul>
				{ items &&
					items.map((item) => {

						return (
							<li key={ item.id }>
								<div className="personnel-block-item-card">
									<figure>
										<img src={ item.avatarUrl } alt="Avatar" />
									</figure>
									<div>
										<p>
											<span>{ item.firstName } { item.lastName }</span>
											<span>  { item.userTag }</span>
										</p>
										<p>{ item.position }</p>
									</div>
								</div>
								<div className="personnel-block-birthday">
									{ sortProperty === 'birthday' && item.birthday }
								</div>
							</li>
						);
					})
				}
			</ul >
		</>
	);
};

export default Personnels;;