
//var TI_BASE = 'https://threeinventor.github.io/';
var TI_BASE = 'http://localhost:8080/threeinventor.github.io';

function openInTI(id) {
	window.open(TI_BASE + '?id=' + id);
}

if(ws) ws.initWorkspace({ readOnly: true});
