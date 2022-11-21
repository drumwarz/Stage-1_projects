"use strict"

let pictures = document.querySelector('.pictures');
let galleryDes = document.querySelector('.gallery_des');
let infoWrap = document.querySelector('.info_wrap');
let infoHeroImage = document.querySelector('.info_bird_image');
let infoHeroCategory = document.querySelector('.info_bird_category');
let infoHeroName = document.querySelector('.info_bird_name');
let infoText = document.querySelector('.info_text');
let birdVideo = document.querySelector('.bird_video');
let picturesText = document.querySelector('.pictures_text');

let audioPlayInfo = document.querySelector('.audio_play');
let maxTimeInfo = document.querySelector('.max_time');
let rangeTimelineInfo = document.querySelector('.range_timeline');
let currentTimeInfo = document.querySelector('.current_time');

let volumeInfo = document.querySelector('.volume');
let volumeBarWrapInfo = document.querySelector('.volume_bar_wrap');
let volumeBarInfo = document.querySelector('.volume_bar');

const voiceInfo = new Audio();
const rightAnswer = new Audio('../../assets/audio/right.mpeg');
rightAnswer.volume = 0.1;

let stagesRU = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
let stages = ['Warm-up', 'Sparrows', 'Forest Birds', 'Song Birds', 'Birds of prey', 'Sea Birds'];

if (localStorage.getItem('birdLang') === 'RU'){
  galleryDes.textContent = "Нажмите на птицу в списке ниже, чтобы увидеть информацию о ней.";
  picturesText.textContent = "Птицы:"
} 

for (let i = 0; i < birds.length; i++) {
  for (let j = 0; j < birds[i].length; j++) {
    let pictureWrap = document.createElement('div');
    pictureWrap.classList.add('picture_wrap');
    pictures.append(pictureWrap);
    pictureWrap.addEventListener('click', showInfo);
    let birdImg = document.createElement('img');
    birdImg.classList.add('bird_img');
    birdImg.src = birds[i][j].image;
    birdImg.alt = birds[i][j].name;
    pictureWrap.append(birdImg);
    let birdName = document.createElement('p');
    birdName.classList.add('bird_name');
    if (localStorage.getItem('birdLang') === 'ENG') {
      birdName.textContent = birds[i][j].name;
    } 
    else if (localStorage.getItem('birdLang') === 'RU') {
      birdName.textContent = birds[i][j].nameRU;
    }
    
    pictureWrap.append(birdName);
  }
}

function showInfo() {
  galleryDes.classList.add('hide');
  infoWrap.classList.add('active');
  rightAnswer.currentTime = 0;
  rightAnswer.play();
  let birdName = this.querySelector('.bird_name').textContent;
  for (let i = 0; i < birds.length; i++) {
    for (let j = 0; j < birds[i].length; j++) {
      if (birdName === birds[i][j].name){
        let bird = birds[i][j];
        infoHeroImage.src = bird.image;
        infoHeroName.textContent = bird.name;
        if (localStorage.getItem('birdLang') === 'ENG'){
          infoHeroCategory.textContent = "Category: " + stages[i];
          infoText.textContent = bird.description;
        }

        birdVideo.src = bird.video;
        voiceInfo.src = bird.audio;
        pauseVoiceInfo();
        placeAudioInfo();
      }  else if (birdName === birds[i][j].nameRU)  {  
      let bird = birds[i][j];
      infoHeroImage.src = bird.image;
      infoHeroName.textContent = bird.nameRU;
      
      if (localStorage.getItem('birdLang') === 'RU') {
           infoHeroCategory.textContent = "Категория: " + stagesRU[i];
          infoText.textContent = bird.desRU;
        } 
        birdVideo.src = bird.video;
        voiceInfo.src = bird.audio;
        pauseVoiceInfo();
        placeAudioInfo();
      }
    }
  }
}

audioPlayInfo.addEventListener('click', playAudioInfo);

function playAudioInfo() {
  let isPlaying = audioPlayInfo.classList.contains('audio_pause');
  if (!isPlaying){
    playVoiceInfo();
  } else {
    pauseVoiceInfo();
  }
}

function playVoiceInfo() {
  audioPlayInfo.classList.add('audio_pause');
  voiceInfo.play();
}

function pauseVoiceInfo() {
  audioPlayInfo.classList.remove('audio_pause');
  voiceInfo.pause();
}

function placeAudioInfo() {
  voiceInfo.onloadedmetadata = function(){
    let time = voiceInfo.duration.toString();
    time = time.split('.')[0];
    maxTimeInfo.textContent = ('00:' + ('0' + time).slice(-2));
  };
}

voiceInfo.addEventListener('ended', () => {
  audioPlayInfo.classList.remove('audio_pause');
  currentTimeInfo.textContent = '00:00';
})

voiceInfo.addEventListener('timeupdate', updateBarInfo);

function updateBarInfo() {
  rangeTimelineInfo.value = (voiceInfo.currentTime / voiceInfo.duration) * 100;
  if (voiceInfo.currentTime === 0){
    rangeTimelineInfo.value = 0;
  }
  let time = voiceInfo.currentTime.toString().split('.')[0];
  currentTimeInfo.textContent = ('00:' + ('0' + time).slice(-2));
}

rangeTimelineInfo.addEventListener('input', setBarInfo);

function setBarInfo() {
  voiceInfo.currentTime = (this.value * voiceInfo.duration) / 100;
}

volumeInfo.addEventListener('mouseover', showBarInfo);
volumeInfo.addEventListener('mouseout', hideBarInfo);

function showBarInfo() {
  volumeBarWrapInfo.classList.add('active');
}

function hideBarInfo() {
  volumeBarWrapInfo.classList.remove('active');
}

volumeBarWrapInfo.addEventListener('mouseover', showBarInfo);
volumeBarWrapInfo.addEventListener('mouseout', hideBarInfo);

volumeInfo.addEventListener('click', volumeOffInfo);

let currVolumeInfo = 0;

function volumeOffInfo() {
  if (volumeBarInfo.value == 0){
    if (currVolumeInfo == 0){
      currVolumeInfo = 50;
    }
    volumeBarInfo.value = currVolumeInfo;
    volumeInfo.classList.remove('volume_off');
    changeVolumeInfo();
  } else {
    volumeInfo.classList.add('volume_off');
    currVolumeInfo = volumeBarInfo.value;
    volumeBarInfo.value = 0;
    changeVolumeInfo();
  }
}

volumeBarInfo.addEventListener('input', changeVolumeInfo);

function changeVolumeInfo() {
  voiceInfo.volume = volumeBarInfo.value / 100;
  if (volumeBarInfo.value == 0){
    volumeInfo.classList.add('volume_off');
  } else {
    volumeInfo.classList.remove('volume_off');
  }
}