const btns = document.querySelectorAll('.drum-btn');
btns.forEach(btn => {
	btn.addEventListener('click', () => {
		const audio = new Audio(`sounds/${btn.id}.wav`);
		audio.play();
	});
});