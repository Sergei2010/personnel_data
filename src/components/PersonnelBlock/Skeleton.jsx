import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
	<ContentLoader
		speed={ 2 }
		width={ 343 }
		height={ 84 }
		viewBox="0 0 343 84"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{ ...props }
	>
		<rect x="88" y="25" rx="9" ry="9" width="144" height="16" />
		<rect x="88" y="47" rx="4" ry="4" width="80" height="12" />
		<rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
		<circle cx="37" cy="42" r="36" />
	</ContentLoader>
);

export default Skeleton;
