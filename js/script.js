document.body.style.backgroundImage = 'url(img/landscape.jpg)';
document.body.style.transition = 'background 4000ms ease-in-out 100ms';
setTimeout(function(){
	document.body.style.backgroundImage = 'url(img/landscape.png), url(img/landscape.jpg)';
}, 500);