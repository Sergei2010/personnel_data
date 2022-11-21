import React from 'react';

import Modal from '../components/Modal';
import Sort from '../components/Sort';
import NavigationBar from '../components/NavigationBar';
import PersonnelsContainer from '../components/Personnels/PersonnelsContainer';

const PersonnelsPage = () => {
	return (
		<>
			<Modal>
				<Sort />
			</Modal>
			<NavigationBar />
			<PersonnelsContainer />
		</>
	);
};

export default PersonnelsPage;