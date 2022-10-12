import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Skeleton from './Skeleton';
// import { departaments } from '../../utils/variables';
const PersonnelBlock = () => {

	const department = useSelector(state => state.filter.department);

	//let initialDepartment = Object.keys(departaments)[0];
	//console.log('initialDepartment:', initialDepartment);

	const [personnels, setPersonnels] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	//onst [department, setDepartment] = React.useState(initialDepartment);

	// axios.defaults.withCredentials = true;
	// axios.defaults.SameSite = "None";
	// axios.defaults.Secure = true;

	React.useEffect(() => {

		setLoading(true);

		const options = {
			method: "GET",
			headers: { "Content-Type": "application/json", "withCredentials": true },
		};
		const apiUrl = `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${department}`;


		axios.get(apiUrl, options).then((resp) => {
			const allPersons = resp.data.items;
			//console.log(allPersons);
			setPersonnels(allPersons);
		});

		setTimeout(() => { setLoading(false); }, 500);
	}, [department]);

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