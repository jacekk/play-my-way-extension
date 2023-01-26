function hideRightRailBoxes() {
	const $boxes = document.querySelectorAll('[role=complementary] [aria-label=Reklamodawca]');

	Array.from($boxes).forEach(($box) => {
		if ($box.style.display !== 'none') {
			$box.style.display = 'none';
			console.log('Reklamodawca box marked as hidden.', $box.textContent);
		}
	});
}

setInterval(hideRightRailBoxes, 1e4);

window.addEventListener('load', function () {
	hideRightRailBoxes();
});
