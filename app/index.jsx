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
		picUrls: ['http://i.imgur.com/lZikE3M.jpg'],
		desc: 'Lurch is missing his right year. He is one of the dominant males at Brooks Falls and frequently displaces females and subordinant males from their fishing spots.',
		earMissing: true
	},
	{	id: 'b002',
		number: 480,
		name: 'Otis',
		picUrls: ['http://i.imgur.com/1qub1HQ.jpg'],
		desc: 'Otis is one of the seniors at Brooks Falls and a crowd favorite. He has a floppy right ear. He often fishes the back office (the far bank opposite the cams and close to the falls). When the jacuzzi is vacant, he will move over there. He does not compete with the 3 most dominant males and will give up his fishing spot to them.',
		earFloppy: true
	},
	{	id: 'b003',
		number: 83,
		name: 'Wayne Brother',
		picUrls: ['http://i.imgur.com/hCrhy1k.jpg', 'http://i.imgur.com/J3KGjRZ.jpg'],
		desc: 'Wayne Brother is the surviving brother of two. He is named after Bruce Wayne for his batman-shaped ears. He is a frequent Brooks Falls fisher with recognizable scars on his upper left shoulder and on his back.',
		shoulderLeftScar: true
	},
	{	id: 'b007',
		number: 402,
		name: '402',
		picUrls: ['http://i.imgur.com/gdDcSte.jpg', 'http://i.imgur.com/XwwXc8i.jpg', 'http://i.imgur.com/jVugQoC.jpg'],
		desc: "Bear 402 has 2 cubs in 2016. She had 4 cubs from this litter in late 2015 but 2 are remaining now. Her cubs a relatively larger than the other sow's cubs and are light colored. Bear 402 still fishes on the Lip of the falls and stashes her cubs on the bank to the side.",
		cubs: 2
	},
	{	id: 'b004',
		number: 128,
		name: 'Grazer',
		picUrls: ['http://i.imgur.com/0uSXtyX.jpg', 'http://i.imgur.com/3JpQ5an.jpg'],
		desc: 'Grazer has 3 cubs in 2016 and she is a first-time mother. She is a uniformly blond colored bear. She and her family have been seen more towards the Lower River cam. In 2015, before having cubs, Grazer typically fished from the Lip of the falls.',
		cubs: 3
	},
	{	id: 'b005',
		number: 409,
		name: 'Beadnose',
		picUrls: ['http://i.imgur.com/dzAfEqw.jpg'],
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
		picUrls: ['http://i.imgur.com/DCoPZgH.jpg'],
		desc: 'Bear 273 is the mother of Velcro. 273 has a heart-shaped head and both she and Velcro are lighter colored bears. She does not have an official name in the Katmai bear book but was nicknamed as the "ma of Velcro".',
		cubs: 1
	}
];


ReactDOM.render((
	<App data={data} />), document.getElementById('app'));