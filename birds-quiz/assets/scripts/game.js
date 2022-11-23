"use strict"

let options = document.querySelectorAll('.option');
let optionsText = document.querySelectorAll('.option_text');
let infoWrap = document.querySelector('.info_wrap');
let infoPLayWrap = document.querySelector('.info_play_wrap');
let infoHeroImage = document.querySelector('.info_bird_image');
let infoHeroName = document.querySelector('.info_bird_name');
let infoText = document.querySelector('.info_text');
let birdImage = document.querySelector('.bird_image');
let birdName = document.querySelector('.bird_name');
let buttonNext = document.querySelector('.button_next');
let scoreNumber = document.querySelector('.score_number');
let dots = document.querySelectorAll('.option_dot');
let stages = document.querySelectorAll('.stage');
let gameField = document.querySelector('.game_field');
let endPopup = document.querySelector('.end_popup');
let popupText = document.querySelector('.popup_text');


let audioPlay = document.querySelector('.audio_play_predict');
let audioPlayInfo = document.querySelector('.audio_play_info');
let maxTime = document.querySelector('.max_time_predict');
let maxTimeInfo = document.querySelector('.max_time_info');
let rangeTimeline = document.querySelector('.range_timeline_predict');
let rangeTimelineInfo = document.querySelector('.range_timeline_info');
let currentTimePredict = document.querySelector('.current_time_predict');
let currentTimeInfo = document.querySelector('.current_time_info');


let volume = document.querySelector('.volume_predict');
let volumeBarWrap = document.querySelector('.volume_bar_wrap_predict');
let volumeBar = document.querySelector('.volume_bar_predict');
let volumeInfo = document.querySelector('.volume_info');
let volumeBarWrapInfo = document.querySelector('.volume_bar_wrap_info');
let volumeBarInfo = document.querySelector('.volume_bar_info');

let score = 0;
let stage = 0;

const voice = new Audio();
const voiceInfo = new Audio();

const rightAnswer = new Audio('../../assets/audio/right.mp3');
const leftAnswer = new Audio('../../assets/audio/wrong.mp3');

play();

const lang = localStorage.getItem('birdLang');

function play() {
  setBackground();
  let currStage = birds[stage];
  let currRight = currStage[randomRight()];
  stages[stage].classList.add('stage_active');
  voice.src = currRight.audio;
  placeAudioPredict();
  let maxScore = 5;
  let arr = randomPlace();
  for (let i = 0; i < optionsText.length; i++){
	if (localStorage.getItem('birdLang') === 'ENG') {
		optionsText[arr[i]].textContent = currStage[i].name;
	} else {
		optionsText[arr[i]].textContent = currStage[i].nameRU;
	}
    
  }

  options.forEach(option => {
    option.addEventListener('click', showInfo);
    option.addEventListener('click', showRight);
  });

  function showInfo() {
    infoWrap.classList.add('info_wrap_active');
    infoPLayWrap.classList.add('hide');
    let text = this.querySelector('.option_text');
    for (let i = 0; i < currStage.length; i++){
      if (text.textContent === currStage[i].name && lang === 'ENG'){
        infoHeroImage.src = currStage[i].image;
        voiceInfo.src = currStage[i].audio;
        infoHeroName.textContent = currStage[i].name; 
          infoText.textContent = currStage[i].description;
        pauseVoiceInfo();
        placeAudioInfo();
      } else if (text.textContent === currStage[i].nameRU && lang === 'RU') {
        infoHeroImage.src = currStage[i].image;
        voiceInfo.src = currStage[i].audio;
        infoHeroName.textContent = currStage[i].nameRU;
        infoText.textContent = currStage[i].desRU;
        pauseVoiceInfo();
        placeAudioInfo();
      }
    } 
  }

  function showRight() {
    let text = this.querySelector('.option_text');
    let dot = this.querySelector('.option_dot');
    if (localStorage.getItem('birdLang') === 'ENG' && text.textContent === currRight.name){
      pauseVoice();
      rightAnswer.muted = false;
      rightAnswer.currentTime = 0;
      rightAnswer.play();
      birdImage.src = currRight.image;
      birdName.textContent = currRight.name;
      dot.classList.add('dot_mark');
      buttonNext.classList.add('button_next_active');
      score += maxScore;
      scoreNumber.textContent = score;
      options.forEach(option => {
        option.removeEventListener('click', showRight);
      });
      if (stage < 5){
        stage++;
      }
      if (buttonNext.textContent === 'Finish' || buttonNext.textContent === 'Финиш'){
        buttonNext.addEventListener('click', end);
      } else {
        buttonNext.addEventListener('click', nextStage); 
      }
    } else if (localStorage.getItem('birdLang') === 'RU' && text.textContent === currRight.nameRU) {
		pauseVoice();
      rightAnswer.muted = false;
      rightAnswer.currentTime = 0;
      rightAnswer.play();
      birdImage.src = currRight.image;
      birdName.textContent = currRight.nameRU;
      dot.classList.add('dot_mark');
      buttonNext.classList.add('button_next_active');
      score += maxScore;
      scoreNumber.textContent = score;
      options.forEach(option => {
        option.removeEventListener('click', showRight);
      });
      if (stage < 5){
        stage++;
      }
      if (buttonNext.textContent === 'Finish' || buttonNext.textContent === 'Финиш'){
        buttonNext.addEventListener('click', end);
      } else {
        buttonNext.addEventListener('click', nextStage); 
      }
	 }
	 else {
      leftAnswer.muted = false;
      leftAnswer.currentTime = 0;
      leftAnswer.play();
      dot.classList.add('dot_cross');
      maxScore--;
      this.removeEventListener('click', showRight);
    }
  }
}

function nextStage() {
  pauseVoice();
  pauseVoiceInfo();
  infoWrap.classList.remove('info_wrap_active');
  infoPLayWrap.classList.remove('hide');
  buttonNext.classList.remove('button_next_active');
  buttonNext.removeEventListener('click', nextStage);
  birdImage.src = '../../assets/icons/bird.jpg';
  birdName.textContent = '* * * * * *';
  if (stage === 5){
    buttonNext.textContent = 'Finish';
    if (localStorage.getItem('birdLang') === 'RU'){
      buttonNext.textContent = 'Финиш';
    }
  }
  for (let i = 0; i < options.length; i++){
    stages[i].classList.remove('stage_active');
    dots[i].classList.remove('dot_cross');
    dots[i].classList.remove('dot_mark');
  }
  stages[stage].classList.add('stage_active')
  play();
}

function end() {
  endPopup.classList.add('active');
  if (localStorage.getItem('birdLang') === 'ENG'){
    if (score === 30){
      popupText.textContent = 'Good game, well played! You have received the maximum number of points. You are very good at this game!';
    } else {
      popupText.textContent = 'You scored '+ score +'/30 points. You can try to play again.';
    }
  } else {
    if (score === 30){
      popupText.textContent = 'Хорошая игра! Вы набрали максимальное количество баллов. Вы очень хороши в этом деле!';
    } else {
      popupText.textContent = 'Ваш балл '+ score +'/30 . Можете попробовать сыграть еще раз.';
    }
  }
}

function randomPlace() {
  let arr = [];
  while(arr.length < 6){
      let num = Math.floor((Math.random() * 6)) ;
      if(arr.indexOf(num) === -1){
        arr.push(num);
      } 
    }
  return arr;
}

function randomRight() {
  return Math.floor((Math.random() * 6));
}

function setBackground() {
  let arr = ['phantom', 'queen', 'tide', 'rubick', 'cm', 'back'];
  for (let i = 0; i < arr.length; i++) {
    gameField.classList.remove(arr[i]);
    if (stage === i) {
      gameField.classList.add(arr[i]);
    }
  }
}



//-------------------------------------------------------------------------------------------------//


audioPlay.addEventListener('click', playAudio);
audioPlayInfo.addEventListener('click', playAudioInfo);

function playAudio() {
  let isPlaying = audioPlay.classList.contains('audio_pause');
  if (!isPlaying){
    playVoice();
  } else {
    pauseVoice();
  }
}

function playAudioInfo() {
  let isPlaying = audioPlayInfo.classList.contains('audio_pause');
  if (!isPlaying){
    playVoiceInfo();
  } else {
    pauseVoiceInfo();
  }
}

function playVoice() {
  audioPlay.classList.add('audio_pause');
  voice.play();
}

function playVoiceInfo() {
  audioPlayInfo.classList.add('audio_pause');
  voiceInfo.play();
}

function pauseVoice() {
  audioPlay.classList.remove('audio_pause');
  voice.pause();
}

function pauseVoiceInfo() {
  audioPlayInfo.classList.remove('audio_pause');
  voiceInfo.pause();
}

function placeAudioPredict() {
  voice.onloadedmetadata = function(){
    let time = voice.duration.toString();
    time = time.split('.')[0];
    maxTime.textContent = ('00:' + ('0' + time).slice(-2));
  };
}

function placeAudioInfo() {
  voiceInfo.onloadedmetadata = function(){
    let time = voiceInfo.duration.toString();
    time = time.split('.')[0];
    maxTimeInfo.textContent = ('00:' + ('0' + time).slice(-2));
  };
}

voice.addEventListener('ended', () => {
  audioPlay.classList.remove('audio_pause');
  currentTimePredict.textContent = '00:00';
})

voiceInfo.addEventListener('ended', () => {
  audioPlayInfo.classList.remove('audio_pause');
  currentTimeInfo.textContent = '00:00';
})

voice.addEventListener('timeupdate', updateBar);
voiceInfo.addEventListener('timeupdate', updateBarInfo);

function updateBar() {
  rangeTimeline.value = (voice.currentTime / voice.duration) * 100;
  if (voice.currentTime === 0){
    rangeTimeline.value = 0;
  }
  let time = voice.currentTime.toString().split('.')[0];
  currentTimePredict.textContent = ('00:' + ('0' + time).slice(-2));
}

function updateBarInfo() {
  rangeTimelineInfo.value = (voiceInfo.currentTime / voiceInfo.duration) * 100;
  if (voiceInfo.currentTime === 0){
    rangeTimelineInfo.value = 0;
  }
  let time = voiceInfo.currentTime.toString().split('.')[0];
  currentTimeInfo.textContent = ('00:' + ('0' + time).slice(-2));
}

rangeTimeline.addEventListener('input', setBar);
rangeTimelineInfo.addEventListener('input', setBarInfo);

function setBar() {
  voice.currentTime = (this.value * voice.duration) / 100;
}

function setBarInfo() {
  voiceInfo.currentTime = (this.value * voiceInfo.duration) / 100;
}


//-------------------------------------------------------------------------------------------------//


volume.addEventListener('mouseover', showBar);
volume.addEventListener('mouseout', hideBar);

function showBar() {
  volumeBarWrap.classList.add('active');
}

function hideBar() {
  volumeBarWrap.classList.remove('active');
}

volumeBarWrap.addEventListener('mouseover', showBar);
volumeBarWrap.addEventListener('mouseout', hideBar);

volume.addEventListener('click', volumeOff);

let currVolume = 0;

function volumeOff() {
  if (volumeBar.value == 0){
    if (currVolume == 0){
      currVolume = 50;
    }
    volumeBar.value = currVolume;
    volume.classList.remove('volume_off');
    changeVolume();
  } else {
    volume.classList.add('volume_off');
    currVolume = volumeBar.value;
    volumeBar.value = 0;
    changeVolume();
  }
}

volumeBar.addEventListener('input', changeVolume);

function changeVolume() {
  voice.volume = volumeBar.value / 100;
  rightAnswer.volume = volumeBar.value / 100;
  leftAnswer.volume = volumeBar.value / 100;
  if (volumeBar.value == 0){
    volume.classList.add('volume_off');
  } else {
    volume.classList.remove('volume_off');
  }
}

//-------------------------------------------------------------------------------------------------//


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