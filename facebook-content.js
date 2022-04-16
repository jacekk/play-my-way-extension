function hideRightRailBoxes() {
	const $box = document.querySelector('[data-pagelet="RightRail"] > div:first-of-type');

	if (!$box) {
		return;
	}

	const isSponsored = $box.textContent.includes('Sponsorowane');
	const isProposed = $box.textContent.includes('Propozycje dla Ciebie');

	if (isSponsored || isProposed) {
		if ($box.style.display !== 'none') {
			$box.style.display = 'none';
			console.log('Sponsored box marked as hidden.', $box);
		}
	}
}

setInterval(hideRightRailBoxes, 1e4);

window.addEventListener('load', function () {
	hideRightRailBoxes();
});
