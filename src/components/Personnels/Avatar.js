import React from 'react';
import { arrForHash, /* str, */ getRandomArbitrary } from '../../utils/variables';

const Avatar = async (props) => {
	console.log('props:', props);
	function avatarLink(s, arr, i) {
		return `${s}${arr[i]}`;
	};

	let index = getRandomArbitrary(0, 10);

	//const [loading, setLoading] = React.useState(true);

	//const [link, setLink] = React.useState('');

	/* React.useEffect(() => {
		//setLoading(true);
		setLink(avatarLink(url, arrForHash, index));
		//setLoading(false);
	}, []); */

	//setLink(avatarLink(url, arrForHash, index));
	const link = avatarLink(props.url, arrForHash, index);
	console.log('link:', link);
	return (
		<>
			{/* { link && (<img src={ link } alt="SomeImage" />) } */ }
			{ link && (<h2>{ link }</h2>) }
		</>
	);

};


export default Avatar;