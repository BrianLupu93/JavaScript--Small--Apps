'use strict';
const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.btn');

const buttonsSymbol = [
	'(',
	')',
	'.',
	'/',
	'7',
	'8',
	'9',
	'*',
	'4',
	'5',
	'6',
	'-',
	'1',
	'2',
	'3',
	'+',
	'clear',
	'0',
	'delete',
	'='
];
let input = [];
let result = 0;
let duplicate = false;

function loadCalculator() {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function() {
			addTerm(i);
		});
	}
}

function addTerm(i) {
	buttons[i].style.boxShadow = '5px 5px 15px black';
	setTimeout(() => {
		buttons[i].style.boxShadow = 'none';
	}, 100);
	let toPush = buttonsSymbol[i];
	let symbol = [ '(', ')', '/', '*', '-', '+', '.' ];

	if (symbol.indexOf(toPush) != -1) {
		if (input[input.length - 1] != toPush) {
			if (toPush == '%') {
				toPush = ' / 100';
			}
			input.push(toPush);
			display.textContent = input.join('');
			if (toPush == '(' || toPush == ')' || toPush == '.') {
				buttons[i].style.boxShadow = '5px 5px 15px #3f48cc';
			}
			if (toPush == '/' || toPush == '*' || toPush == '-' || toPush == '+') {
				buttons[i].style.boxShadow = '5px 5px 15px #ff7f27';
			}
		}
	} else if (toPush == 'clear') {
		buttons[i].style.boxShadow = '5px 5px 15px #239543';
		display.textContent = '';
		input = [];
		result = 0;
	} else if (toPush == 'delete') {
		buttons[i].style.boxShadow = '5px 5px 15px #239543';
		input.pop(toPush);
		display.textContent = input.join('');
	} else if (toPush == '=') {
		buttons[i].style.boxShadow = '5px 5px 15px #88001b';
		result = eval(input.join(''));
		display.textContent = result;
		input = [];
		input.push(result);
	} else {
		input.push(toPush);
		display.textContent = input.join('');
	}
}
loadCalculator();
