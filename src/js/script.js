window.addEventListener('DOMContentLoaded', () => {
	// TABS
	const tabs = require('./modules/tabs');

	// MODAL
	const modal = require('./modules/modal');

	// TIMER
	const timer = require('./modules/timer');

	// CARD MENU
	const cardsMenu = require('./modules/cardsMenu');

	// SLIDER
	const slider = require('./modules/slider');

	// FORMS
	const forms = require('./modules/forms');

	// CALCULATE
	const calculate = require('./modules/calculate');

	tabs();
	modal();
	timer();
	cardsMenu();
	slider();
	forms();
	calculate();
});
