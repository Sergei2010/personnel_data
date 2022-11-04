import React from 'react';
import { /* useDispatch, */ useSelector } from 'react-redux';
//import moment from 'moment';
import Moment from 'react-moment';
import 'moment/locale/ru';

//import { setpersonnels } from '../../redux/slices/personnelsSlice';
import { arrForHash } from '../../utils/variables';
import { sortList } from '../../utils/variables';

const Personnels = () => {
	const personnels = useSelector(state => state.personnels.personnels);
	const sort = useSelector(state => state.filter.sort);

	let now = new Date();
	let nowYear = now.getFullYear();
	let nowMilliSec = nowYear.getTime();

	const personnelsData = personnels.map((item) => {
		let date = new Date(item.birthday);
		let dateThisYear = date.setFullYear(nowYear);
		return {
			...item,
			birthday: () => {
				return ((nowMilliSec - dateThisYear) < 0) ? date.setFullYear(nowYear + 1) : date.setFullYear(nowYear);
			}

			//moment(item.birthday)
			//.set('year', moment().year())
			//.set('year', (moment().diff(moment(item.birthday)) < 0) ? console.log('2023') : '2022')
		};
	});

	console.log('personnelsData:', personnelsData);
	//console.log('nowInMilliSec:', nowInMilliSec);

	function addLink(a, b, c) {
		return (a + b + c);
	}

	function rand() {
		// random hash
		return arrForHash[~~(Math.random() * arrForHash.length)];
	}

	//const now = moment();
	//const birthdayDate = (d) => moment(d);

	/* const dateToFormat = (d) => {
		moment(d).format('YYYY-MM-DD');
	}; */
	// определяем текущую дату
	//moment(String);
	// определяем дату ДР		
	/* if (!moment(now).isValid() || !moment(now).isValid()) {
		console.log('Invalid Date');
	} */
	// определяем ДР в текущем году 

	/* if (!moment(d).isValid()) {
		console.log('Invalid Date');
	} else {
		let str = () => {
			return (moment(d).day() + moment(d).month());
		};
		console.log('str:', str);
	} */


	return (
		<ul>
			{
				personnelsData.map((item) => {

					return (
						<li key={ item.id }>
							<div className="personnel-block-item-card">
								<figure>
									<img src={ addLink(item.avatarUrl, '&hash=', rand()) } alt="Avatar" />
									{/* <Avatar url={ item.avatarUrl } /> */ }
								</figure>
								<div>
									<p>
										<span>{ item.firstName } { item.lastName }</span>
										<span>  { item.userTag }</span>
									</p>
									<p>{ item.position }</p>
								</div>
							</div>
							{
								(sort.name === sortList[1].name) &&
								<div>
									<Moment /* format="DD MM YYYY" */>
										{ item.birthday }
									</Moment>
								</div>
							}
						</li>
					);
				})
			}
		</ul >
	);
};

export default Personnels;;