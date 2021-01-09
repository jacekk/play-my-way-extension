function hideSponsored() {
	const $box = document.querySelector('[data-pagelet="RightRail"] > div:first-of-type');
	if (!$box) {
		return;
	}

	const isSponsored = $box.textContent.includes('Sponsorowane');
	if (!isSponsored) {
		return;
	}

	if ($box.style.display !== 'none') {
		$box.style.display = 'none';
		console.log('Sponsored box mark as hidden.', $box);
	}
}

setInterval(hideSponsored, 1e4);

window.addEventListener('load', function () {
	hideSponsored();
});
