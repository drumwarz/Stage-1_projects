"use strict"

let playButton = document.querySelector(".play");
let galleryButton = document.querySelector(".gallery");
let background = document.querySelector(".background");
let description = document.querySelector(".description");
let logoH = document.querySelector(".logo_h1");
let logoIcon = document.querySelector(".logo_icon");
let game = document.querySelector(".game");
let lang = document.querySelector('.language_pic');
let languageText = document.querySelector('.language_text');
let descriptionText = document.querySelector(".description_text");

logoIcon.addEventListener('click', pageLink);
logoH.addEventListener('click', pageLink);

function pageLink() {
  document.location.href = 'index.html';
}

console.log('270/270 all task are completed.'+ '\n' + 'I will ask you to rate a very cool gallery! (In my opinion)');

setLang();

function setLang() {
  if (localStorage.getItem('birdLang') === 'RU'){
    lang.classList.add('language_pic_ru');
  }
  if (localStorage.getItem('birdLang') === 'ENG'){
    lang.classList.remove('language_pic_ru');
  }
  if (localStorage.getItem('birdLang') === null){
    localStorage.setItem('birdLang', 'ENG');
  }
  translate();
}

lang.addEventListener('click', changeLang);

function changeLang() {
  if (lang.classList.contains('language_pic_ru')){
    lang.classList.remove('language_pic_ru');
    localStorage.setItem('birdLang', 'ENG');
    location.reload();
  } else {
    lang.classList.add('language_pic_ru');
    localStorage.setItem('birdLang', 'RU');
    location.reload();
  }
}

function translate() {
  if (localStorage.getItem('birdLang') === 'RU'){
    languageText.textContent = 'Язык';
    descriptionText.textContent = 'Игра, в которой вам предстоит угадывать птиц по их голосу.';
    playButton.textContent = 'Играть';
    galleryButton.textContent = 'Галерея';
  }
}