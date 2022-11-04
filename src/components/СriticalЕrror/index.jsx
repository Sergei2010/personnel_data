import React from 'react';
import { Link } from 'react-router-dom';
import flyingSaucer from '../../assets/flying-saucer.svg';

const CriticalError = () => {
	return (
		<div className='critical-error'>
			<p><img src={ flyingSaucer } alt="Flying Saucer" /></p>
			<p>Какой-то сверхразум все сломал</p>
			<p>Постараемся быстро починить</p>
			<Link to='/'>Попробовать снова</Link>
		</div>
	);
};

export default CriticalError;