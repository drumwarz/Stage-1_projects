"use strict";

// HTML структура
const body = document.body,
      header = document.createElement('header'),
		main = document.createElement('main'),
		footer = document.createElement('footer');


		body.append(header),
		body.append(main),
		body.append(footer);

		body.classList.add('body'),
		header.classList.add('header'),
		main.classList.add('main'),
		footer.classList.add('footer');


		// заголовок

		header.append(document.createElement('h1'))

		document.querySelector('h1').textContent = "Gem Puzzle"

		console.log()



		// Кнопки
      let btns = document.createElement('div');
		btns.classList.add('wrapper');
		
		header.append(btns);
		

		for ( let i = 0; i < 4; i++) {
			let button = document.createElement('button')
			button.classList.add('button');
			button.id = `btn_${i}`;
			header.querySelector('header, div').append(button);
            if (i == 0) {
	        	   button.textContent = "New Game"
	         } else if (i == 1) {
	        	   button.textContent = "Save"
	         } else if (i == 2) {
	        	   button.textContent = "Continue"
	         } else if (i == 3) {
	        	   button.textContent = "Results"
	         }
	   }


	
// Cчетчик ходов

let counter = 0;

function moveCounter(move) {
    counter += move;
    header.lastChild.childNodes[0].childNodes[1].innerHTML = counter;
}

// Таймер

let minutesUnit = document.createElement('span');
minutesUnit.innerHTML = "00";
let secondsUnit = document.createElement('span');
secondsUnit.innerHTML = "00";
let SeparatorUnit = document.createElement('span');
SeparatorUnit.innerHTML = ":";

let minutes,
    seconds,
    interval;

function timer() {
    seconds++;
    if (seconds < 9) secondsUnit.innerHTML = '0' + seconds;
    if (seconds > 9) secondsUnit.innerHTML = seconds;
    if (seconds > 59) {
        minutes++;
        minutesUnit.innerHTML = minutes;
        seconds = 0;
        secondsUnit.innerHTML = '0' + seconds;
    }
    if (minutes < 9) minutesUnit.innerHTML = '0' + minutes;
    if (minutes > 9) minutesUnit.innerHTML = minutes;
    if (minutes > 59) {
        minutes = 0;
        minutes.innerHTML = '0' + minutes;
        seconds = 0;
        secondsUnit.innerHTML = '0' + seconds;
    }
}

function startTimer() {
    minutes = 0;
    seconds = -1;
    timer();
    clearInterval(interval);
    interval = setInterval(timer, 1000)
}

function continueTimer() {
    timer();
    clearInterval(interval);
    interval = setInterval(timer, 1000)
}

// Добавление счетчика ходов и таймера в DOM



		// Таймер 

		
        let drumTimer = document.createElement('div');
		  drumTimer.classList.add('wrapper');
		
 		header.append(drumTimer);




     let drumMoves = document.createElement('div');
 	 drumTimer.append(drumMoves)
   let drumClock = document.createElement('div');
	drumTimer.append(drumClock)



// // Шаги

	 let titleMoves = document.createElement('span')
	 titleMoves.textContent = "Moves: "
	 drumMoves.append(titleMoves)


 	 let counterMoves = document.createElement('span')
 	 counterMoves.classList.add('count');
 	 counterMoves.textContent = "0"
 	 drumMoves.append(counterMoves)

// // Время

 let titleTime = document.createElement('span')
 titleTime.textContent = "Time: "
 drumClock.append(titleTime)

 let countTime = document.createElement('span')
 countTime.textContent = "00:00"
 drumClock.append(countTime)



 let desk = document.createElement('div');
 desk.classList.add('wrapper');
 main.append(desk);

const cellSize = 100;

const empty = {
	value:0,
	top: 0,
	left: 0
};

const cells= [];
cells.push(empty)

function move(index) {
	const cell = cells[index];
	const leftDiff = Math.abs(empty.left - cell.left);
	const topDiff = Math.abs(empty.top - cell.top);

   if (leftDiff + topDiff > 1) {
		return;
	}
	

	cell.element.style.left = `${empty.left * cellSize}px`;
	cell.element.style.top = `${empty.top * cellSize}px`;

    const emptyLeft = empty.left;
	 const emptyTop = empty.top;
	 empty.left = cell.left;
	 empty.top = cell.top;
	 cell.left = emptyLeft;
	 cell.top = emptyTop;

    const isFinished = cells.every( cell => {
		return cell.value === cell.top * 4 + cell.left;
	 });
   if (isFinished) {
		alert("you won")
	}

	}
const numbers = [...Array(15).keys()]

.sort(() => Math.random() - 0.5)

for (let i = 1; i <= 15; i++) {
	const cell = document.createElement('div');
	const value = numbers[i-1] + 1
	cell.className = 'cell four';
	cell.innerHTML = value;

	const left = i % 4;
	const top = (i - left) / 4;

	cells.push( {
	 value: value,
    left: left,
	 top: top,
	 element: cell
	});

	

	cell.style.left = `${left * cellSize}px`;
	cell.style.top = `${top * cellSize}px`;

   desk.append(cell);

   cell.addEventListener('click', () => {
     move(i);
	})
}






// Кнопка "Новая игра"

newGameBtn.addEventListener('click', () => start());

// Старт игры

function start() {
    let size;
    document.getElementsByName('size_frame').forEach(elem => {
        if (elem.checked) {
            size = +elem.id[0];
        }
    });
    removeItems();
    createItems(size);
    counter = 0;
    moveCounter(0);
    startTimer();
}



















