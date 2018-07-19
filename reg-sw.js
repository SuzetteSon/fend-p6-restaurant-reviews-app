//register service worker
document.addEventListener("DOMContentLoaded", event => {
	if (navigator.serviceWorker) {
		navigator.serviceWorker
			.register('sw.js') 
			.then(registered => console.log('registered service worker', registered))
			.catch(error => console.log('not registered', error));
	}
});