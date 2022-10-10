import React from 'react';
import axios from 'axios';
import Skeleton from './Skeleton';

const PersonnelBlock = () => {

	const [personnels, setPersonnels] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {

		setLoading(true);

		const options = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};
		const apiUrl = "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all";

		axios.get(apiUrl, options).then((resp) => {
			const allPersons = resp.data.items;
			console.log(allPersons);
			setPersonnels(allPersons);
		});

		setTimeout(() => { setLoading(false); }, 500);
	}, []);

	const listItems = personnels.map((item) => {
		return (
			<li key={ item.id }>
				<div className="personnel-block-item-card">
					<p></p>
					<div>
						<p>
							<span>{ item.firstName }{ item.lastName }</span><span>{ item.userTag }</span>
						</p>
						<p>{ item.position }</p>
					</div>
				</div>

			</li>
		);
	});


	return (
		<div className="wrapper">
			<div className="personnel-block">
				{ loading ? ([...new Array(6)].map((item, index) => {
					return (
						<div key={ index } className="personnel-block-item">
							<Skeleton />
						</div>
					);
				})) :
					(<ul>
						{ listItems }
					</ul>)
				}
			</div>
		</div>
	);
};

export default PersonnelBlock;