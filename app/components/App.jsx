//app/components/App.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Bears from './Bears.jsx';

export default class App extends React.Component {

	constructor(props) {
		super();
		//hiding all data initially
		this.state = {
			curFilters: ['all'],
			data: props.data,
			backup: props.data
		};
	}

	//componentWillMount() {
	//}

	render() {
		let bears = this.state.data;

		var bearNodes = this.state.data.map(function(bear) {
			var bearName = bear.name;
			return (
				<div key={bear.id} >
					<h4>Bear {bear.number} ({bear.name}) </h4>
					<p>{bear.desc}</p>
					{bear.picUrls.length ? <img src={bear.picUrls[0]} alt={bear.name} className="img-responsive" /> : null}
					{/*{bear.picUrls.length ? imageNodes(bear) : null}*/}
				</div>
			)
		})

		return (
			<div data={this.props.data}>
				<div className="row">
					<header>
						<nav className="navbar navbar-default">
						  <div className="container-fluid">
						    {/*} Brand and toggle get grouped for better mobile display */}
						    <div className="navbar-header">
						      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						      </button>
						      <a href='/' className="navbar-brand header-link" >Name that Bear</a>{/* activeClassName='active'*/}
						    </div>

						    {/*} Collect the nav links, forms, and other content for toggling */}
						    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

						      <ul className="nav navbar-nav navbar-right">
						          <li><a href="#find">Find a Bear</a></li>
						          <li><a href="#bears">Bears</a></li>
						          <li><a href="#map">Brooks Falls</a></li>
						          <li><a href="https://github.com/cch5ng/bear-id" target="_blank">Github</a></li>
						      </ul>
						    </div>{/*} /.navbar-collapse */}
						  </div>{/*} /.container-fluid */}
						</nav>


						{/*<nav className="navbar navbar-default">
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

								<div className="collapse navbar-collapse" id="">
									<ul className="nav navbar-nav navbar-right">
										<li><a href="#find">Find a Bear</a></li>
										<li><a href="#bears">Bears</a></li>
										<li><a href="#map">Brooks Falls</a></li>
									</ul>
								</div>
							</div>
						</nav>*/}
					</header>
				</div>

				<main className="container">
					<div className="row rect">
						<div className="col-sm-12">
							<form id="bear-form">
								<h3 id="find">Find a Katmai Bear</h3>
							    <details>
							      <summary>Ears</summary>
							      <fieldset>
							      	<radiogroup>
										<div className="radio">
										  <label>
										    <input type="radio" name="ear-missing" id="ear-missing" onClick={this.filterMissingEar} />
										    Missing right ear
										  </label>
										</div>
										<div className="radio">
										  <label>
										    <input type="radio" name="ear-floppy" id="ear-floppy" onClick={this.filterFloppyEar} />
										    Floppy right ear
										  </label>
										</div>
								    </radiogroup>
							      </fieldset>
							    </details>
							    <details>
							      <summary>Scars</summary>
									<div className="radio">
									  <label>
									    <input type="radio" name="shoulder-left-scar" id="shoulder-left-scar" onClick={this.filterShoulderScar} />
									    Upper left shoulder and back
									  </label>
									</div>
							    </details>
							    <details>
							      <summary>Cubs</summary>
							      <fieldset>
							      	<radiogroup>
										<div className="radio">
										  <label>
										    <input type="radio" name="three-cubs" id="three-cubs" value="three-cubs" onClick={this.filter3Cubs} />
										    3 cubs
										  </label>
										</div>
										<div className="radio">
										  <label>
										    <input type="radio" name="two-cubs" id="two-cubs" value="two-cubs" onClick={this.filter2Cubs} />
										    2 cubs
										  </label>
										</div>
										<div className="radio">
										  <label>
										    <input type="radio" name="one-cub" id="one-cub" value="one-cub" onClick={this.filter1Cub} />
										    1 cub
										  </label>
										</div>
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
							    {/* TODO sections
							    <details>
							      <summary>Courting Bears</summary>
							      <fieldset>
							        <input type="radio" name="four-ton-747" id="four-ton-747" value="four-ton-747" />747 and 410
							      </fieldset>
							    </details>
							    <details>
							      <summary>Fur Color</summary>
							      <fieldset>
							        <input type="radio" name="light-fur" id="light-fur" value="light-fur" />Light fur color*/}
							        {/* <input type="radio" name="dark-fur" id="dark-fur" value="dark-fur" />Dark fur color
							        */}
							      {/*</fieldset>
							    </details>*/}
							        {/*<button type="button" name="filterBtn" className="btn">Filter Bears</button>*/}
							        <button type="button" name="clearBtn" className="btn" onClick={this.clearFilters} >All Bears</button>
							        {/*<button type="button" name="allBtn" className="btn">All</button>*/}
							</form>
						</div>
					</div>

					{/* bear data section */}
					<Bears bears={bears} />

					<div className="map row" id="map">
						<div className="col-xs-12">
							<h3>Guide to Brooks Falls</h3>
							<p>Tip: hover over a bear to see which bears usually fish at a location. Included are bears seen in late June. More bears may arrive at salmon peak and after spawning time.</p>
							<map id="imgmap201678224433" name="imgmap201678224433">
								<area shape="rect"  className="back-office" alt="Back Office" title="Back Office where Otis often fishes" coords="293,101,473,164" href="#" target="_blank" />
								<area shape="rect" className="far-banks" alt="Far Banks Right" title="Far Banks where Scare D Bear often fishes" coords="508,103,678,192" href="#" target="_blank" />
								<area shape="rect" className="middle-front" alt="Middle Front" title="Middle close to falls where 410 often fishes. Backpack or 83 may crowd her and try to steal fish." coords="214,166,472,254" href="#" target="_blank" />
								<area shape="rect" className="middle-back" alt="Middle Back" title="Middle back where Backpack and 83 often fish" coords="483,199,679,310" href="#" target="_blank" />
								<area shape="rect" className="below-lip" alt="Below the Lip" title="Below the Lip where 410 may fish" coords="130,256,412,393" href="#" target="_blank" />
								<area shape="rect" className="jacuzzi" alt="Jacuzzi" title="Jacuzzi where dominant bears (856, 747, Lurch) usually fish. Otis or less dominant bears may fish here when the big guys are gone." coords="420,348,698,488" href="#" target="_blank" />
								{/* Created by Online Image Map Editor (http://www.maschek.hu/imagemap/index) */}
							</map>
							<img useMap="#imgmap201678224433" className="img-responsive" src="./static/images/brooks_falls2016-07-03_16x9.jpg" alt="Brooks Falls Katmai" />
						</div>
					</div>

				</main>

				<footer className="fluid-container">
					<div className="row footer">
					<div className="col-xs-12 col-sm-12">
						<p className="text-center">With <i className="fa fa-heart" aria-hidden="true"></i> from<br />
							Bear 410's kisser
						</p>
						<p className="text-center">
							<a href="https://www.nps.gov/katm/learn/photosmultimedia/upload/Bears-of-Brooks-River-2016.pdf" target="_blank">Mike Fitz's 2016 Katmai Bear Book</a><br />
						</p>
						<p className="text-center">
							<a href="http://explore.org/live-cams/player/brown-bear-salmon-cam-brooks-falls" target="_blank">May the Furs be With You!</a><br />
							<a href="https://github.com/cch5ng/bear-id" target="_blank">Source</a>
						</p>
						<p className="text-center">
							Disclaimer: this is a personal project and not affiliated with Katmai NP nor explore.org. Thank you.
						</p>
					</div>
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
	 *
	 */
	filterShoulderScar = () => {
		var shoulderScarInp = document.getElementById('shoulder-left-scar');
		if (shoulderScarInp.checked) {
			console.log('shoulder scar radio button checked');
			this.setState({
				data: this.state.backup.filter(function(bear) {
					return bear.shoulderLeftScar;
				})
			})
		} else {
			console.log('shoulder scar radio button not checked');
		}

		//TODO do I need to toggle so that every other radio button gets cleared?
		//something is weird where both radio buttons can get selected together so when one is selected,
		//toggle other to be unselected

	}


	/**
	 *
	 *
	 */
	filter3Cubs = () => {
		var threeCubsInp = document.getElementById('three-cubs');
		if (threeCubsInp.checked) {
			console.log('3 cubs radio button checked');
			this.setState({
				data: this.state.backup.filter(function(bear) {
					return (bear.cubs === 3);
				})
			})
		} else {
			console.log('shoulder scar radio button not checked');
		}

		//TODO do I need to toggle so that every other radio button gets cleared?
		//something is weird where both radio buttons can get selected together so when one is selected,
		//toggle other to be unselected
		var twoCubsInp = document.getElementById('two-cubs');
		twoCubsInp.checked = false;

		var oneCubInp = document.getElementById('one-cub');
		oneCubInp.checked = false;

	}

	/**
	 *
	 *
	 */
	filter2Cubs = () => {
		var twoCubsInp = document.getElementById('two-cubs');
		if (twoCubsInp.checked) {
			console.log('2 cubs radio button checked');
			this.setState({
				data: this.state.backup.filter(function(bear) {
					return (bear.cubs === 2);
				})
			})
		} else {
			console.log('2 cubs radio button not checked');
		}

		//TODO do I need to toggle so that every other radio button gets cleared?
		//something is weird where both radio buttons can get selected together so when one is selected,
		//toggle other to be unselected
		var threeCubsInp = document.getElementById('three-cubs');
		threeCubsInp.checked = false;

		var oneCubInp = document.getElementById('one-cub');
		oneCubInp.checked = false;

	}



	/**
	 *
	 *
	 */
	filter1Cub = () => {
		var oneCubInp = document.getElementById('one-cub');
		if (oneCubInp.checked) {
			console.log('1 cub radio button checked');
			this.setState({
				data: this.state.backup.filter(function(bear) {
					return (bear.cubs === 1);
				})
			})
		} else {
			console.log('1 cub radio button not checked');
		}

		//TODO do I need to toggle so that every other radio button gets cleared?
		//something is weird where both radio buttons can get selected together so when one is selected,
		//toggle other to be unselected
		var twoCubsInp = document.getElementById('two-cubs');
		twoCubsInp.checked = false;

		var threeCubsInp = document.getElementById('three-cubs');
		threeCubsInp.checked = false;

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

	/**
	 *
	 *
	 */
	displayImages = (bear) => {
		return bear.picUrls.forEach(function(picUrl) {
			<img alt={bear.name} src={picUrl} />
		})
	}


}