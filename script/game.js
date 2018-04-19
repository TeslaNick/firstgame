class Game {
	constructor(parentElement, size) {
		this.size = size;
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

		this.field = [];

		for (let i = 0; i < size; i++) {
			this.field[i] = [];
			for (let k = 0; k < size; k++) {
				this.field[i][k] = new Cell(fieldElement);
				
			}
		}
		console.log(this.field);
	}

	spawnUnit() {
		let emptyCells = [];
		for (let i = 0; i < this.field.length; i++) {
			for (let k = 0; k< this.field[i].length; k++){
				if (!this.field[i][k].value) {
				emptyCells.push(this.field[i][k]);
				}
			}			
		}
		
		if (emptyCells.length) {
			emptyCells[getRandomInt(0, emptyCells.length - 1)].spawn();
		} else {
			alert ('Game over');
		}
	}


	moveRight() {
		let hasMoved = false;
		for (let i = 0; i < this.field.length; i++) {
			for (let k = this.field[i].length - 2; k>=0; k--){
				let currentCell = this.field[i][k];
				if (currentCell.isEmpty) {
					continue;
				}
				let nextCellKey = k + 1;
				while(nextCellKey < this.size){
					let nextCell = this.field[i][nextCellKey];
					if (!nextCell.isEmpty || (nextCellKey == (this.size - 1))) {
						if (nextCell.value == currentCell.value && (nextCellKey - 1 != k) || (nextCell.isEmpty && (nextCellKey == (this.size - 1))))  {
							this.field[i][nextCellKey].merge(currentCell);
							hasMoved = true;
						}
						break;
					} 
					nextCellKey++;
					nextCell = this.field[i][nextCellKey];
				}
			}			
		}

		if (hasMoved) {
			this.spawnUnit();
		}
	}

}


