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
	}


for (let i = 1; i <= 15; i++) {
	const cell = document.createElement('div');
	cell.className = 'cell four';
	cell.innerHTML = i;

	const left = i % 4;
	const top = (i - left) / 4;

	cells.push( {
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
























// // Создание основны DOM

// const body = document.body;
// const header = document.createElement('header');
// const main = document.createElement('main');
// const footer = document.createElement('footer');

// body.append(header);
// body.append(main);
// body.append(footer);

// body.classList.add('body');
// header.classList.add('header');
// main.classList.add('main');
// footer.classList.add('footer');

// Создание заголовка хедере

// header.append(document.createElement('h1'));
// document.querySelector('header h1').innerHTML = "Gem Puzzle";


// // // Создание кнопок в хедере

// header.append(document.createElement('div'));


// while (document.querySelector('header div').childNodes.length < 4) {
//     let button = document.createElement('button');
//     button.classList.add('button');
//     button.id = `btn_${document.querySelector('header div').childNodes.length}`
//     switch (document.querySelector('header div').childNodes.length) {
//         case 0:
//             button.innerHTML = 'New Game';
//             break;
//         case 1:
//             button.innerHTML = 'Save';
//             break;
//         case 2:
//             button.innerHTML = 'Continue';
//             break;
//         case 3:
//             button.innerHTML = 'Results';
//             break;
//     }
//     document.querySelector('header div').append(button);
// }

// newGameBtn = document.getElementById('btn_0');
// saveBtn = document.getElementById('btn_1');
// continueBtn = document.getElementById('btn_2');
// resultsBtn = document.getElementById('btn_3');

// // Cчетчик ходов

// let counter = 0;

// function moveCounter(move) {
//     counter += move;
//     header.lastChild.childNodes[0].childNodes[1].innerHTML = counter;
// }

// // Таймер

// let minutesUnit = document.createElement('span');
// minutesUnit.innerHTML = "00";
// let secondsUnit = document.createElement('span');
// secondsUnit.innerHTML = "00";
// let SeparatorUnit = document.createElement('span');
// SeparatorUnit.innerHTML = ":";

// let minutes,
//     seconds,
//     interval;

// function timer() {
//     seconds++;
//     if (seconds < 9) secondsUnit.innerHTML = '0' + seconds;
//     if (seconds > 9) secondsUnit.innerHTML = seconds;
//     if (seconds > 59) {
//         minutes++;
//         minutesUnit.innerHTML = minutes;
//         seconds = 0;
//         secondsUnit.innerHTML = '0' + seconds;
//     }
//     if (minutes < 9) minutesUnit.innerHTML = '0' + minutes;
//     if (minutes > 9) minutesUnit.innerHTML = minutes;
//     if (minutes > 59) {
//         minutes = 0;
//         minutes.innerHTML = '0' + minutes;
//         seconds = 0;
//         secondsUnit.innerHTML = '0' + seconds;
//     }
// }

// function startTimer() {
//     minutes = 0;
//     seconds = -1;
//     timer();
//     clearInterval(interval);
//     interval = setInterval(timer, 1000)
// }

// function continueTimer() {
//     timer();
//     clearInterval(interval);
//     interval = setInterval(timer, 1000)
// }

// // Добавление счетчика ходов и таймера в DOM

// header.append(document.createElement('div'));

// header.childNodes.forEach(elem => {
//     if (elem.nodeName == 'DIV')
//         elem.classList.add('wrapper')
// });

// header.lastChild.append(document.createElement('div'));
// header.lastChild.append(document.createElement('div'));

// while (header.lastChild.childNodes[0].childNodes.length < 2) {
//     let span = document.createElement('span');
//     span.innerHTML = header.lastChild.childNodes[0].childNodes.length == 0 ? 'Moves: ' : '0';
//     if (header.lastChild.childNodes[0].childNodes.length != 0) span.id = 'move_counter';
//     header.lastChild.childNodes[0].append(span);
// }

// while (header.lastChild.childNodes[1].childNodes.length < 2) {
//     let span = document.createElement('span');
//     span.innerHTML = header.lastChild.childNodes[1].childNodes.length == 0 ? 'Time: ' : '';
//     if (header.lastChild.childNodes[1].childNodes.length != 0) span.id = 'timer';
//     header.lastChild.childNodes[1].append(span);
// }

// while (document.getElementById('timer').childNodes.length < 3) {
//     switch (document.getElementById('timer').childNodes.length) {
//         case (0):
//             document.getElementById('timer').append(minutesUnit);
//             break;
//         case (1):
//             document.getElementById('timer').append(SeparatorUnit);
//             break;
//         case (2):
//             document.getElementById('timer').append(secondsUnit);
//             break;
//     }
// }

// //Создание доски

// main.append(document.createElement('div'));
// document.querySelector('main div').classList.add('wrapper');

// //Создание плиток

// let collectionItems;

// function createItems(size, collection) {
//     let array = collection ? collection : getRandomColection(size * size);
//     array.forEach(i => {
//         let item = document.createElement('div');
//         item.classList.add('item');
//         switch (size) {
//             case 3:
//                 item.classList.add('three');
//                 break;
//             case 4:
//                 item.classList.add('four');
//                 break;
//             case 5:
//                 item.classList.add('five');
//                 break;
//             case 6:
//                 item.classList.add('six');
//                 break;
//             case 7:
//                 item.classList.add('seven');
//                 break;
//             case 8:
//                 item.classList.add('eight');
//                 break;
//         }
//         if (i == 0) item.classList.add('zero');
//         item.innerHTML = `${i}`;
//         item.id = `${i}`;
//         document.querySelector('main div').append(item);
//     });
//     positioningItems(document.querySelector('main div').childNodes, size);
//     collectionItems = document.querySelector('main div').childNodes;
//     moveItem(size);
//     dragDrop(size);
// }

// //Удаление плиток

// function removeItems() {
//     while (document.querySelector('main div').firstChild) {
//         document.querySelector('main div').removeChild(document.querySelector('main div').firstChild);
//     }
// }

// //Получение рандомного числа

// function getRandomNumber(max) {
//     return Math.floor(Math.random() * (max + 1));
// }

// //Получение рандомного набора

// function getRandomColection(length) {
//     let set = new Set();
//     while (!(set.size == length)) {
//         set.add(getRandomNumber(length - 1));
//     }
//     let collection = Array.from(set);
//     return checkSolvability(collection) ? collection : getRandomColection(length);
// }

// // Позиционирование плиток

// function positioningItems(collection, size) {
//     for (let i = 0; i < collection.length; i++) {
//         collection[i].style.left = `${i % size * 100 / size}%`;
//         collection[i].style.top = `${(Math.floor(i / size)) * 100 / size}%`;
//     }
//     addInteractive(size);
// }

// // Добавление интерактива только подвижным плиткам

// function addInteractive(size) {
//     let zeroItem = document.querySelector('.zero');

//     document.querySelector('main div').childNodes.forEach(item => {
//         if (!item.classList.contains('zero')
//             && ((Math.abs(+item.style.left.slice(0, -1) - +zeroItem.style.left.slice(0, -1)) <= 100 / size + 0.1
//                 && item.style.top == zeroItem.style.top)
//                 || (item.style.left == zeroItem.style.left
//                     && Math.abs(+item.style.top.slice(0, -1) - +zeroItem.style.top.slice(0, -1)) <= 100 / size + 0.1))) {
//             item.classList.add('interactive');
//         }
//     });
// }

// // Создание в футере переключателей размерности доски

// footer.append(document.createElement('div'));

// while (document.querySelector('footer div').childNodes.length < 11) {
//     let x = document.querySelector('footer div').childNodes.length / 2;
//     let input = document.createElement('input');
//     let label = document.createElement('label');
//     input.type = 'radio';
//     input.id = `${x + 3}x${x + 3}`;
//     input.name = 'size_frame';
//     if (x == 1) input.checked = 'true';
//     label.for = `${x + 3}x${x + 3}`;
//     document.querySelector('footer div').append(input);
//     document.querySelector('footer div').append(label);
//     document.querySelector('footer div').lastChild.innerHTML = `${label.for}`;
//     document.querySelector('footer div').lastChild.classList.add('label');
// }

// // Переключение размера доски

// document.getElementsByName('size_frame').forEach(function (elem) {
//     elem.addEventListener('click', () => {
//         removeItems();
//         createItems(+elem.id[0]);
//         counter = 0;
//         moveCounter(0);
//         startTimer();
//     });
// });

// // Создание в футере переключателя звука

// footer.append(document.createElement('div'));

// let input = document.createElement('input');
// input.type = 'checkbox';
// input.checked = 'true';
// input.name = 'sound';
// document.querySelector('footer').lastChild.append(input);

// let label = document.createElement('label');
// document.querySelector('footer').lastChild.append(label);
// document.querySelector('footer').lastChild.lastChild.innerHTML = 'Sound on/off';
// document.querySelector('footer').lastChild.lastChild.classList.add('label');

// // Кнопка "Новая игра"

// newGameBtn.addEventListener('click', () => start());

// // Старт игры

// function start() {
//     let size;
//     document.getElementsByName('size_frame').forEach(elem => {
//         if (elem.checked) {
//             size = +elem.id[0];
//         }
//     });
//     removeItems();
//     createItems(size);
//     counter = 0;
//     moveCounter(0);
//     startTimer();
// }

// // Старт игры при загрузке страницы

// start()

// // Перемещение плиток

// function moveItem(size) {
//     let zeroItem = document.querySelector('.zero');
//     collectionItems.forEach(item => {
//         item.addEventListener('click', () => {
//             if (!item.classList.contains('zero')
//                 && ((Math.abs(+item.style.left.slice(0, -1) - +zeroItem.style.left.slice(0, -1)) <= 100 / size + 0.1
//                     && item.style.top == zeroItem.style.top)
//                     || (item.style.left == zeroItem.style.left
//                         && Math.abs(+item.style.top.slice(0, -1) - +zeroItem.style.top.slice(0, -1)) <= 100 / size + 0.1))) {
//                 let currentLeft = item.style.left;
//                 let currentTop = item.style.top;
//                 item.style.left = zeroItem.style.left;
//                 item.style.top = zeroItem.style.top;
//                 zeroItem.style.left = currentLeft;
//                 zeroItem.style.top = currentTop;

//                 function refresh() {
//                     let currentItem = 0;
//                     let currentZeroItem = 0;
//                     currentItem = item.cloneNode(true);
//                     currentZeroItem = zeroItem.cloneNode(true);
//                     item.after(currentZeroItem);
//                     zeroItem.after(currentItem);
//                     zeroItem.remove();
//                     item.remove();
//                     let collection = [];
//                     document.querySelector('main div').childNodes.forEach((item) => collection.push(item.id));
//                     removeItems();
//                     createItems(size, collection);
//                     moveCounter(1);
//                     if (checkWin(collection)) {
//                         clearInterval(interval);
//                         showMessage();
//                         highScore(size);
//                     }
//                 }
//                 playAudio()
//                 setTimeout(refresh, 400)
//             }
//         });
//     });
// }

// // Звук перемещения плитки

// const audio = new Audio();

// function playAudio() {
//     audio.src = "./assets/sound/sound.mp3";
//     if (document.getElementsByName('sound')[0].checked) audio.play();
// }

// // Сохранение игры

// function saveGame() {

//     let collection = [];
//     document.querySelector('main div').childNodes.forEach((item) => collection.push(item.id));
//     localStorage.setItem('collection', collection);
//     localStorage.setItem('minutes', minutes);
//     localStorage.setItem('seconds', seconds);
//     localStorage.setItem('counter', counter);
//     document.getElementsByName('size_frame').forEach(function (elem) {
//         if (elem.checked) localStorage.setItem('size', elem.id);
//     });
// }

// saveBtn.addEventListener('click', () => saveGame());

// //  Продолжение сохраненной игры

// function continueGame() {
//     let collection = localStorage.getItem('collection').split(',');
//     minutes = localStorage.getItem('minutes');
//     seconds = localStorage.getItem('seconds');
//     counter = +localStorage.getItem('counter');
//     let size = localStorage.getItem('size');
//     document.getElementsByName('size_frame').forEach(function (elem) {
//         if (elem.id == size) elem.checked = true;
//         else elem.checked = false;
//     });
//     removeItems();
//     createItems(+size[0], collection);
//     moveCounter(0);
//     continueTimer();
// }

// continueBtn.addEventListener('click', () => continueGame());

// // Проверка на решаемость

// function checkSolvability(collection) {
//     let checkCollection = collection.slice(0)
//     let evenBoard = Math.sqrt(checkCollection.length) % 2 == 0 ? true : false;
//     let rowZero;
//     checkCollection.forEach((elem, index) => {
//         if (elem == 0) {
//             rowZero = Math.floor(index / Math.sqrt(checkCollection.length));
//             checkCollection.splice(index, 1)
//         }
//     });

//     let counterInvertion = 0;
//     for (let i = 0; i < checkCollection.length; i++) {
//         for (let j = i + 1; j < checkCollection.length; j++) {
//             if (checkCollection[i] > checkCollection[j]) counterInvertion++;
//         }
//     }

//     if (!evenBoard) {
//         return counterInvertion % 2 === 0 ? true : false;
//     } else {
//         return (counterInvertion + rowZero) % 2 === 0 ? false : true;
//     }
// }

// // Определение конца игры

// function checkWin(collection) {
//     if (collection[collection.length - 1] == 0) {
//         collection.splice(-1, 1);
//     } else {
//         return false;
//     }
//     for (let i = 0; i < collection.length - 1; i++) {
//         if (collection[i + 1] - collection[i] != 1) {
//             return false;
//         } else {
//             if (i == collection.length - 2) {
//                 return true;
//             }
//         }
//     }
// }

// // Вывод победного сообщения

// function showMessage() {

//     const blackOut = document.createElement('div');
//     blackOut.classList.add('blackout');
//     body.append(blackOut);

//     const popUp = document.createElement('div');
//     popUp.classList.add('popup');
//     popUp.innerHTML = `Hooray! <br/> You solved the puzzle in ${showTime()} and ${counter} moves!`;
//     blackOut.append(popUp);

//     // Скрытие победного сообщения и начало новой игры

//     document.querySelector('.blackout').addEventListener('click', () => {
//         document.querySelector('.popup').remove();
//         document.querySelector('.blackout').remove();
//         start()
//     });
// }

// // Отображение времени в победном сообщении

// function showTime() {
//     let showSeconds;
//     let showMinutes;
//     if (seconds < 9) showSeconds = '0' + seconds;
//     else showSeconds = seconds;
//     if (minutes < 9) showMinutes = '0' + minutes;
//     else showMinutes = minutes;
//     return `${showMinutes}:${showSeconds}`
// }

// // Топ-10 результатов

// function highScore(size) {
//     let topList = [];
//     let currentResult = [counter, showTime(), `${size}x${size}`];
//     if (localStorage.getItem('topList')) topList = JSON.parse(localStorage.getItem('topList'));
//     topList.push(currentResult);
//     topList.sort(compareMoves);
//     if (topList.length > 10) topList = topList.slice(0, 10);
//     localStorage.setItem('topList', JSON.stringify(topList));
// }

// // Сортировка топ результатов по количеству ходов

// function compareMoves(a, b) {
//     if (a[0] > b[0]) return 1;
//     if (a[0] == b[0]) return 0;
//     if (a[0] < b[0]) return -1;
// }

// // Отображение Топ-10 результатов

// resultsBtn.addEventListener('click', () => showTopList());

// function showTopList() {

//     clearInterval(interval);

//     const blackOut = document.createElement('div');
//     blackOut.classList.add('blackout');
//     body.append(blackOut);

//     const popUp = document.createElement('div');
//     popUp.classList.add('popup');
//     blackOut.append(popUp);

//     popUp.append(document.createElement('h2'));
//     document.querySelector('h2').innerHTML = "Top List by moves";

//     let topList = [];
//     if (localStorage.getItem('topList')) {
//         topList = JSON.parse(localStorage.getItem('topList'));

//         for (let i = 0; i <= topList.length; i++) {
//             let item = document.createElement('div');
//             item.classList.add('top-list-item');
//             for (let j = 0; j < 4; j++) {
//                 let span = document.createElement('span');
//                 if (i == 0) {
//                     switch (j) {
//                         case (0):
//                             span.innerHTML = '&nbsp&nbsp';
//                             break;
//                         case (1):
//                             span.innerHTML = 'Moves';
//                             break;
//                         case (2):
//                             span.innerHTML = 'Time';
//                             break;
//                         case (3):
//                             span.innerHTML = 'Size';
//                             break;
//                     }
//                 } else {
//                     span.innerHTML = (j == 0) ? (i != 10 ? `&nbsp&nbsp${i})` : `${i})`) : topList[i - 1][j - 1];
//                 }
//                 item.append(span);
//             }
//             if (i % 2 == 0) {
//                 item.classList.add('colored');
//             }
//             popUp.append(item);
//         }
//         if (topList.length < 10) {
//             for (let i = topList.length + 1; i <= 10; i++) {
//                 let item = document.createElement('div');
//                 item.classList.add('top-list-item');
//                 for (let j = 0; j < 4; j++) {
//                     let span = document.createElement('span');
//                     span.innerHTML = (j == 0) ? (i != 10 ? `&nbsp&nbsp${i})` : `${i})`) : "-&nbsp&nbsp&nbsp";
//                     item.append(span);
//                 }
//                 if (i % 2 == 0) {
//                     item.classList.add('colored');
//                 }
//                 popUp.append(item);
//             }
//         }
//     } else {
//         for (let i = 0; i <= 10; i++) {
//             let item = document.createElement('div');
//             item.classList.add('top-list-item');
//             for (let j = 0; j < 4; j++) {
//                 let span = document.createElement('span');
//                 if (i == 0) {
//                     switch (j) {
//                         case (0):
//                             span.innerHTML = '&nbsp&nbsp';
//                             break;
//                         case (1):
//                             span.innerHTML = 'Moves';
//                             break;
//                         case (2):
//                             span.innerHTML = 'Time';
//                             break;
//                         case (3):
//                             span.innerHTML = 'Size';
//                             break;
//                     }
//                 } else {
//                     span.innerHTML = (j == 0) ? (i != 10 ? `&nbsp&nbsp${i})` : `${i})`) : "-&nbsp&nbsp&nbsp";
//                 }
//                 if (i % 2 == 0) {
//                     item.classList.add('colored');
//                 }
//                 item.append(span);
//                 popUp.append(item);
//             }
//         }
//     }

//     // Скрытие Топ-10 результатов

//     document.querySelector('.blackout').addEventListener('click', () => {
//         document.querySelector('.popup').remove();
//         document.querySelector('.blackout').remove();
//         continueTimer();
//     });
// }

// // Перетаскивание плиток 

// function dragDrop(size) {
//     let zeroItem = document.querySelector('.zero');

//     collectionItems.forEach(item => {
//         item.draggable = false;

//         if (!item.classList.contains('zero')
//             && ((Math.abs(+item.style.left.slice(0, -1) - +zeroItem.style.left.slice(0, -1)) <= 100 / size + 0.1
//                 && item.style.top == zeroItem.style.top)
//                 || (item.style.left == zeroItem.style.left
//                     && Math.abs(+item.style.top.slice(0, -1) - +zeroItem.style.top.slice(0, -1)) <= 100 / size + 0.1))) {
//             item.draggable = true;
//         }
//     });

//     zeroItem.ondragover = allowDrop;
//     zeroItem.ondrop = drop;
//     collectionItems.forEach(item => {
//         item.ondragstart = dragStart;
//         item.ondragend = dragEnd;
//     });
// }

// function allowDrop(event) {
//     event.preventDefault();
// }

// function dragStart(event) {
//     event.dataTransfer.setData('id', event.target.id);
//     setTimeout(() => {
//         event.target.classList.add('hide');
//     }, 0);
// };

// function dragEnd(event) {
//     event.target.classList.remove('hide');
// };

// function drop(event) {
//     let itemId = event.dataTransfer.getData('id');
//     dragDropMove(itemId);
// }

// function dragDropMove(itemId) {
//     let size;
//     document.getElementsByName('size_frame').forEach(elem => {
//         if (elem.checked) size = +elem.id[0];
//     });
//     let zeroItem = document.querySelector('.zero');
//     let item = document.getElementById(itemId);
//     let currentLeft = item.style.left;
//     let currentTop = item.style.top;
//     item.style.left = zeroItem.style.left;
//     item.style.top = zeroItem.style.top;
//     zeroItem.style.left = currentLeft;
//     zeroItem.style.top = currentTop;
//     let currentItem = 0;
//     let currentZeroItem = 0;
//     currentItem = item.cloneNode(true);
//     currentZeroItem = zeroItem.cloneNode(true);
//     item.after(currentZeroItem);
//     zeroItem.after(currentItem);
//     zeroItem.remove();
//     item.remove();
//     let collection = [];
//     document.querySelector('main div').childNodes.forEach((item) => collection.push(item.id));
//     removeItems();
//     createItems(size, collection);
//     moveCounter(1);
//     if (checkWin(collection)) {
//         clearInterval(interval);
//         showMessage();
//         highScore(size);
//     }
//     playAudio()
// }



