"use strict"

let stagesTexts = document.querySelectorAll('.stage_text');
let stagesRU = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
let infoPlay = document.querySelector('.info_play');
let scoreText = document.querySelector('.score');
let popupButton = document.querySelector('.popup_button');
let popupHome = document.querySelector('.popup_home'); 

if (localStorage.getItem('birdLang') === 'RU'){
  for (let i = 0; i < stagesTexts.length; i++) {
    stagesTexts[i].textContent = stagesRU[i];
  }
  infoPlay.textContent = 'Послушайте голос птицы. Попробуйте определить кому он принадлежит.';
  buttonNext.textContent = 'Следующий уровень';
  scoreText.textContent = 'Счет:';
  popupButton.textContent = 'Новая игра';
  popupHome.textContent = 'Домой';
}