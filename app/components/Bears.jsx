//app/components/Bears.jsx

import React from 'react';
import Bear from './Bear.jsx';

export default ({bears}) => {
	return (
		<div className="row bears" id="bears">
			<h3 className="col-sm-12">Bears</h3>
			{bears.map(bear =>
				<Bear key={bear.id} name={bear.name} number={bear.number} desc={bear.desc} picUrls={bear.picUrls} />
			)}

			<div className="clearfix" />
		</div>
	)
}