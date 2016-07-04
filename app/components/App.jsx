//app/components/App.jsx

import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {

	constructor(props) {
		super();
		//hiding all data initially
		this.state = {
			filter: true,
			curFilters: ['all'],
			data: props.data,
			backup: props.data
		};
	}

	// componentWillMount() {
	// }

	render() {
		var bearNodes = this.state.data.map(function(bear) {
//		var bearNodes = this.props.data.map(function(bear) {
			var bearName = bear.name;
			return (
				<div>
					<h3>Bear {bear.number} ({bear.name}) </h3>
					<p>{bear.desc}</p>
				</div>
			)
		})

		return (
			<div className="container-fluid" data={this.props.data}>
				<div className="row">
					<header>
						<nav className="navbar navbar-default">
							<div className="container-fluid">
								<div className="navbar-header">
									<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
									<a href='/' className="navbar-brand header-link" activeClassName='active'>Bear ID Helper</a>
								</div>
							</div>
						</nav>
					</header>
				</div>

				<main>
					<form id="bear-form">
					    <details>
					      <summary>Ears</summary>
					      <fieldset>
					      	<radiogroup>
						        <input type="radio" name="ear-missing" id="ear-missing" onClick={this.filterMissingEar} label=""/>Missing right ear
						        <input type="radio" name="ear-floppy" id="ear-floppy" onClick={this.filterFloppyEar} />Floppy right ear
						    </radiogroup>
					      </fieldset>
					    </details>
					    <details>
					      <summary>Scars</summary>
					      <fieldset>
					        <input type="radio" name="shoulder-left-scar" id="shoulder-left-scar" value="shoulder-left-scar" />Upper left shoulder and back
					      </fieldset>
					    </details>
					    <details>
					      <summary>Cubs</summary>
					      <fieldset>
					      	<radiogroup>
						        <input type="radio" name="three-cubs" id="three-cubs" value="three-cubs" />3 cubs
						        <input type="radio" name="two-cubs" id="two-cubs" value="two-cubs" />2 cubs
						        <input type="radio" name="one-cub" id="one-cub" value="one-cub" />1 cub
					        </radiogroup>
					      </fieldset>
					    </details>
					    {/* not sure how to handle at the moment
					    <details>
					      <summary>Fishing Spot</summary>
					      <fieldset>
					        <input type="radio" name="far-bank-bf" id="far-bank-bf" value="far-bank-bf">Far Banks of Brooks Falls
					        <input type="radio" name="jacuzzi" id="jacuzzi" value="jacuzzi">Jacuzzi
					        <input type="radio" name="lip" id="lip" value="lip">The Lip
					        <input type="radio" name="riffles" id="riffles" value="riffles">The Riffles
					      </fieldset>
					    </details>
					    */}
					    <details>
					      <summary>Courting Bears</summary>
					      <fieldset>
					        <input type="radio" name="four-ton-747" id="four-ton-747" value="four-ton-747" />747 and 410
					      </fieldset>
					    </details>
					    <details>
					      <summary>Fur Color</summary>
					      <fieldset>
					        <input type="radio" name="light-fur" id="light-fur" value="light-fur" />Light fur color
					        {/* <input type="radio" name="dark-fur" id="dark-fur" value="dark-fur" />Dark fur color
					        */}
					      </fieldset>
					    </details>
					        <button type="button" name="filterBtn" className="btn">Filter Bears</button>
					        <button type="button" name="clearBtn" className="btn" onClick={this.clearFilters} >Clear</button>
					        <button type="button" name="allBtn" className="btn">All</button>
					</form>
				</main>

				{/* bear data section */}
				{bearNodes}

				<footer className="row footer">
					<div className="col-xs-12 col-sm-12">
						<p className="text-center">With <i className="fa fa-heart" aria-hidden="true"></i> from<br />
							Bear 410's kisser!
						</p>
						<p className="text-center">
							<a href="http://explore.org/live-cams/player/brown-bear-salmon-cam-brooks-falls" target="_blank">May the Furs be With You!</a><br />
							<a href="https://github.com/cch5ng/" target="_blank">Source</a>
						</p>
					</div>
				</footer>

			</div>
		);
	}


//TODO not working but unsure why
	/**
	 * displays bear name if one exists
	 *
	 */
	displayBearName = (name) => {
		return <span>(name)</span>
	}

	/**
	 *
	 *
	 */
	filterMissingEar = () => {
		var missingEarInp = document.getElementById('ear-missing');
		if (missingEarInp.checked) {
			console.log('missing ear radio button checked');
			this.setState({
				data: this.state.backup.filter(function(bear) {
					return bear.earMissing;
				})
			})
		} else {
			console.log('missing ear radio button not checked');
		}

		//something is weird where both radio buttons can get selected together so when one is selected,
		//toggle other to be unselected
		var floppyEarInp = document.getElementById('ear-floppy');
		floppyEarInp.checked = false;
	}

	/**
	 *
	 *
	 */
	filterFloppyEar = () => {
		var floppyEarInp = document.getElementById('ear-floppy');
		if (floppyEarInp.checked) {
			console.log('floppy ear radio button checked');
			this.setState({
				data: this.state.backup.filter(function(bear) {
					return bear.earFloppy;
				})
			})
		} else {
			console.log('floppy ear radio button not checked');
		}

		//something is weird where both radio buttons can get selected together so when one is selected,
		//toggle other to be unselected
		var missingEarInp = document.getElementById('ear-missing');
		missingEarInp.checked = false;

	}

	/**
	 *
	 */
	clearFilters = () => {
		this.setState({
			data: this.state.backup
		})

		var form = document.getElementById('bear-form');
		form.reset();
	}


}