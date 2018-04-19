class Game {
	constructor(parentElement, size) {
		let gameFieldElement = createAndAppend({
			className: 'game',
			parentElement
		});

		let headerElement = createAndAppend({
			className: 'header',
			parentElement: gameFieldElement
		});

		this.rating = 0;
		headerElement.innerHTML = "Rating: " + this.rating;

		let fieldElement = createAndAppend({
			className: 'field',
			parentElement: gameFieldElement
		});

		for (let i = 0; i < size; i++) {
			for (let d = 0; d < size; d++) {
				new Cell(fieldElement);
				
			}
		}
	}
}
