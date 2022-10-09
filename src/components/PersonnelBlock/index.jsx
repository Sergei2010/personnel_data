import React from 'react';
import Skeleton from './Skeleton';

const PersonnelBlock = () => {
	return (
		<div className="wrapper personnel-block">
			{ [...new Array(6)].map((item, index) => {
				return (
					<div key={ index } className="personnel-block-item">
						<Skeleton />
					</div>
				);
			}) }
		</div>
	);
};

export default PersonnelBlock;