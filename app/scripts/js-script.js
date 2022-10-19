function superClick(el) {
	el.style.background = 'yellow';
	el.style.color = 'black';
}
var h1Showed = false;
function changeDisplay() {
	const header1 = document.getElementById('1');
	header1.style.display = h1Showed ? 'block' : 'none';
	h1Showed = !h1Showed
}
 
 var h2Showed = false
 function hangeDisplay() {
	const header2 = document.getElementById('2');
	header2.style.display = h2Showed ? 'block' : 'none';
	h2Showed = !h2Showed
} 
 var h3Showed = false
 function angeDisplay() {
	const header3 = document.getElementById('3');
	header3.style.display = h3Showed ? 'block' : 'none';
	h3Showed = !h3Showed
}