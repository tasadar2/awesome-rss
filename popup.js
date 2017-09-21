function init() {
	const url = new URL(location.href);
	const links = JSON.parse(url.searchParams.get('links'));
	const container = document.getElementById('feeds-container');

	try {
		links.forEach(link => {
			let feed = document.createElement('a');
			feed.href = link.href;
			feed.textContent = link.title;
			feed.title = link.title;
			feed.classList.add('panel-list-item');
			feed.target = '_blank';
			container.appendChild(feed);
		});
	} catch (error) {
		console.error(error);
	}

}
if (['interactive', 'complete'].includes(document.readyState)) {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init, {once: true});
}