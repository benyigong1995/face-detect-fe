import React from 'react';

const Rank = ({entries}) => {
	return (
		<div className = 'center'>
			<div className = 'white f3'>
				{'Benyi, you current rank is ...'}
			</div>
			<div className = 'white f3'>
				{entries}
			</div>
		</div>
	);
}

export default Rank;