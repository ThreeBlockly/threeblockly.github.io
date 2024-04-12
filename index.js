
var TI_BASE = 'https://threeinventor.github.io/';
//var TI_BASE = 'http://localhost:8080/TI/threeinventor.github.io';

function openInTI(id) {
	window.open(TI_BASE + '?id=' + id);
}

window.onload = async function() {
	initTHREE();
	if(ws) ws.init({ readOnly: true});
}