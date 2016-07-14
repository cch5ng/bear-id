//app/Components/Bear.jsx

import React from 'react';
import uuid from 'node-uuid';

export default class Recipe extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.id,
			number: this.props.number,
			picUrls: this.props.picUrls,
			name: this.props.name,
			desc: this.props.desc
		}
	}

	render() {
		let name = this.state.name;
		var imageNodes = this.state.picUrls.map( function(picUrl) {
			console.log('got to imageNodes');
			console.log('picUrl: ' + picUrl);
			return (
				<img key={uuid.v1()} src={picUrl} alt={name} className="img-responsive" title={name} /> 
			)
		})

		return (
			<div key={this.state.id} className="col-xs-12 col-sm-6 col-md-4 bear">
				<h4>Bear {this.state.number} ({this.state.name}) </h4>
				<p className="desc">{this.state.desc}</p>
				{this.state.picUrls.length ? imageNodes : null}
			</div>
		)
	}

}