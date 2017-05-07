//app/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

require("!style!css!sass!./main.scss");

var css = require("!css!sass!./main.scss");

//TODO add the light colored bears and properties
var data = [
	{	id: 'b001',
		number: 814,
		name: 'Lurch',
		picUrls: ['./static/images/lurch_b814_2016-06-26_16x9.jpg'],
		desc: 'Lurch is missing his right year. He is one of the dominant males at Brooks Falls and frequently displaces females and subordinant males from their fishing spots.',
		earMissing: true
	},
	{	id: 'b002',
		number: 480,
		name: 'Otis',
		picUrls: ['./static/images/otis_2014_16x9.jpg'],
		desc: 'Otis is one of the seniors at Brooks Falls and a crowd favorite. He has a floppy right ear. He often fishes the back office (the far bank opposite the cams and close to the falls). When the jacuzzi is vacant, he will move over there. He does not compete with the 3 most dominant males and will give up his fishing spot to them.',
		earFloppy: true
	},
	{	id: 'b003',
		number: 83,
		name: 'Wayne Brother',
		picUrls: ['./static/images/wayne_bro83shoulder_2016-06-24_16x9.jpg', './static/images/wayne_83_back2016-06-29_16x9.jpg'],
		desc: 'Wayne Brother is the surviving brother of two. He is named after Bruce Wayne for his batman-shaped ears. He is a frequent Brooks Falls fisher with recognizable scars on his upper left shoulder and on his back.',
		shoulderLeftScar: true
	},
	{	id: 'b007',
		number: 402,
		name: '402',
		picUrls: ['./static/images/bear402_cubs2016-07-03_16x9.jpg', './static/images/402_cub2016-07-07_16x9.jpg', './static/images/402_cubs2016-07-04_16x9.jpg'],
		desc: "Bear 402 has 2 cubs in 2016. She had 4 cubs from this litter in late 2015 but 2 are remaining now. Her cubs a relatively larger than the other sow's cubs and are light colored. Bear 402 still fishes on the Lip of the falls and stashes her cubs on the bank to the side.",
		cubs: 2
	},
	{	id: 'b004',
		number: 128,
		name: 'Grazer',
		picUrls: ['./static/images/grazer-2016-06-21_16x9.jpg', './static/images/grazer_cubbies2016-06-21_16x9.jpg'],
		desc: 'Grazer has 3 cubs in 2016 and she is a first-time mother. She is a uniformly blond colored bear. She and her family have been seen more towards the Lower River cam. In 2015, before having cubs, Grazer typically fished from the Lip of the falls.',
		cubs: 3
	},
	{	id: 'b005',
		number: 409,
		name: 'Beadnose',
		picUrls: ['./static/images/409cub-2016-06-2016_16x9.jpg'],
		desc: 'Beadnose has 2 cubs in 2016. This is her fourth known litter. Her cubs have dark colored fur. ',
		cubs: 2
	},
	{	id: 'b006',
		number: 284,
		name: 'Electra',
		picUrls: [],
		desc: "Electra has 2 cubs in 2016. This is her first known litter. Her cubs have dark colored fur. In the Katmai bear book, she does not have an official name but she was nick-named after Amelia Earhart's plane because 284's mother is Amelia.",
		cubs: 2
	},
	{	id: 'b008',
		number: 273,
		name: 'Velma',
		picUrls: ['./static/images/1velcro273_2016-07-09_16x9.jpg'],
		desc: 'Bear 273 is the mother of Velcro. 273 has a heart-shaped head and both she and Velcro are lighter colored bears. She does not have an official name in the Katmai bear book but was nicknamed as the "ma of Velcro".',
		cubs: 1
	}
];


ReactDOM.render((
	<App data={data} />), document.getElementById('app'));