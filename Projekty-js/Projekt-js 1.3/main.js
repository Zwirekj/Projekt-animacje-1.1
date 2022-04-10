const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.btn2');
const square = document.querySelector('.color');
const removecolor = document.querySelector('.remove-color');

function redcolor() {
	square.classList.add('red');
	square.classList.remove('blue');
}

function bluecolor() {
	square.classList.add('blue');
	square.classList.remove('red');
}
function delatecolor() {
	square.classList.remove('blue');
	square.classList.remove('red');
}

btn1.addEventListener('click', redcolor);
btn2.addEventListener('click', bluecolor);
removecolor.addEventListener('click', delatecolor);
