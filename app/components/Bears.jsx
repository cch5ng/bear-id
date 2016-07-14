//app/components/Bears.jsx

import React from 'react';
import Bear from './Bear.jsx';

export default ({bears}) => {
	return (
		<div className=" bears bearList" id="bears">
			<h3>Bears</h3>
			{bears.map(bear =>
				<Bear key={bear.id} name={bear.name} number={bear.number} desc={bear.desc} picUrls={bear.picUrls} />
			)}

			<div className="clearfix" />
		</div>
	)
}