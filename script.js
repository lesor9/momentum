const backgrounds = {
  "morning" : [],
  "day" : [],
  "evening" : [],
  "night" : []
};

for (let i = 1; i <= 20; i++) {
  backgrounds["morning"].push(addZero(i));
  backgrounds["day"].push(addZero(i));
  backgrounds["evening"].push(addZero(i));
  backgrounds["night"].push(addZero(i));
}

backgrounds["morning"].sort(() => Math.random() - 0.5);
backgrounds["day"].sort(() => Math.random() - 0.5);
backgrounds["evening"].sort(() => Math.random() - 0.5);
backgrounds["night"].sort(() => Math.random() - 0.5);

const backgroundsIndexing = {};

for (let i = 0; i < 6; i++) {
  backgroundsIndexing[i] = `night/${backgrounds["night"][i]}`;
}
let j = 0;
for (let i = 6; i < 12; i++) {
  backgroundsIndexing[i] = `morning/${backgrounds["morning"][j]}`;
  j++
}
j = 0;
for (let i = 12; i < 18; i++) {
  backgroundsIndexing[i] = `day/${backgrounds["day"][j]}`;
  j++
}
j = 0;
for (let i = 18; i < 24; i++) {
  backgroundsIndexing[i] = `evening/${backgrounds["evening"][j]}`;
  j++;
}



const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

const showAmPm = true;

function showTime() {
  const dateSpan = document.querySelector(".hour").innerHTML;

  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  if (hour != dateSpan && min == 0 && sec == 0) {
    setBgGreet();
  }

  time.innerHTML = `<span class="hour">${addZero(hour)}</span><span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  let partOfDay = findPartOfDay(hour);

  const img = document.createElement('img');
  img.src = `./assets/images/${backgroundsIndexing[hour]}.jpg`;
  img.onload = () => {      
    document.body.style.backgroundImage = `url(./assets/images/${backgroundsIndexing[hour]}.jpg)`;
  }; 

  if (partOfDay == 'morning') {
    greeting.textContent = 'Доброе утро, ';
  } else if (partOfDay == 'day') {
    greeting.textContent = 'Добрый день, ';
  } else if (partOfDay == 'evening') {
    greeting.textContent = 'Добрый вечер, ';
    document.body.style.color = 'white';
    document.body.style.textShadow = "0px 0px 20px rgba(0, 0, 0, 0)"
  } else if (partOfDay == 'night') {
    greeting.textContent = 'Доброй ночи, ';
    document.body.style.color = 'white';
    document.body.style.textShadow = "0px 0px 20px rgba(0, 0, 0, 0)"
  }
}

function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  const isKeypress = e.type === 'keypress';
  const isEnterKey = e.which == 13 || e.keyCode == 13;

  localStorage.getItem('name')
  if ( (e.target.innerText === localStorage.getItem('name') || e.target.innerText == "[Enter Name]") && e.bubbles == true && !isKeypress && !isEnterKey) {
    e.target.innerText = "";
    return;
  }
  
  if (isKeypress) {
    if (isEnterKey) {
      if (e.target.innerText !== "" && e.target.innerText !== "[Enter Name]") {
        localStorage.setItem('name', e.target.innerText);
        getName();
      } else {
        getName();
      }
      
      name.blur();
    }
  } else {
    if (e.target.innerText !== "" && e.target.innerText !== "[Enter Name]") {
      localStorage.setItem('name', e.target.innerText);
      getName();
    } else {
      getName();
    }
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}


function setFocus(e) {
  const isKeypress = e.type === 'keypress';
  const isEnterKey = e.which == 13 || e.keyCode == 13;


  localStorage.getItem('focus' )
  if ( (e.target.innerText === localStorage.getItem('focus') || e.target.innerText == "[Enter Focus]") && e.bubbles == true && !isKeypress && !isEnterKey) {
    e.target.innerText = "";
    return;
  }
  
  if (isKeypress) {
    if (isEnterKey) {
      if (e.target.innerText !== "" && e.target.innerText !== "[Enter Focus]") {
        localStorage.setItem('focus', e.target.innerText);
        getFocus();
      } else {
        getFocus();
      }
      
      focus.blur();
    }
  } else {
    if (e.target.innerText !== "" && e.target.innerText !== "[Enter Focus]") {
      localStorage.setItem('focus', e.target.innerText);
      getFocus();
    } else {
      getFocus();
    }
  }
}

name.addEventListener('click', setName);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('click', setFocus);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();

function getDate() {
  const dateSpan = document.querySelector(".date");
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const monthOfWeek = currentDate.getMonth();
  const day = currentDate.getDate();

  switch (dayOfWeek) {
    case 0:
      dateSpan.innerHTML = "Воскресенье"
      break;
    case 1:
      dateSpan.innerHTML = "Понедельник"
      break;
    case 2:
      dateSpan.innerHTML = "Вторник"
      break;
    case 3:
      dateSpan.innerHTML = "Среда"
      break;
    case 4:
      dateSpan.innerHTML = "Четверг"
      break;
    case 5:
      dateSpan.innerHTML = "Пятница"
      break;
    case 6:
      dateSpan.innerHTML = "Суббота"
      break;
  }
  
  dateSpan.innerHTML += `, ${day}`;

  switch(monthOfWeek + 1) {
    case 1:
      dateSpan.innerHTML += " Января"
      break;
    case 2:
      dateSpan.innerHTML += " Февраля"
      break;
    case 3:
      dateSpan.innerHTML += " Марта"
      break;
    case 4:
      dateSpan.innerHTML += " Апреля"
      break;
    case 5:
      dateSpan.innerHTML += " Мая"
      break;
    case 6:
      dateSpan.innerHTML += " Июня"
      break;
    case 7:
      dateSpan.innerHTML += " Июля"
      break;
    case 8:
      dateSpan.innerHTML += " Августа"
      break;
    case 9:
      dateSpan.innerHTML += " Сентября"
      break;
    case 10:
      dateSpan.innerHTML += " Октября"
      break;
    case 11:
      dateSpan.innerHTML += " Ноября"
      break;
    case 12:
      dateSpan.innerHTML += " Декабря"
      break;
  }
}

getDate();

const nextImageBtn = document.querySelector(".next-background");
nextImageBtn.addEventListener('click',  nextImage);

let partOfDay = "morning";
indexOfImageButton = 0;

let pseudoHour = new Date().getHours();
function nextImage() {
  pseudoHour++;
  if (pseudoHour == 24) {
    pseudoHour = 0;
  }
  const img = document.createElement('img');
  img.src = `./assets/images/${backgroundsIndexing[pseudoHour]}.jpg`;
  img.onload = () => {      
    document.body.style.backgroundImage = `url(./assets/images/${backgroundsIndexing[pseudoHour]}.jpg)`;
  }; 

  nextImageBtn.removeEventListener('click',  nextImage);
  setTimeout(() => {
    nextImageBtn.addEventListener('click',  nextImage);
  }, 1000)
}

function findPartOfDay (hour) {
  if (hour >= 6 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "day";
  } else if (hour >= 18 && hour <= 24) {
    return "evening";
  } else {
    return "night";
  }
}

function changePartOfDay (partOfDay) {
    if (partOfDay == "morning") {
      return "day";
    } else if (partOfDay == "day") {
      return "evening";
    } else if (partOfDay == "evening") {
      return "night";
    } else if (partOfDay == "night") {
      return "morning";
    }
}

let response;
const quoteSpan = document.querySelector(".quote");
async function getQuotes () {
  if (response === undefined) {
    let answer = await fetch(`https://type.fit/api/quotes`); 
    response = await answer.json();
    response = response.splice(0, 100);
  }

  const quote = response[getRandomArbitrary(0, 100)];
  quoteSpan.innerHTML = quote["text"] + ( quote["author"] ? `<br> by ${quote["author"]}` : "");
}

const nextQuoteBtn = document.querySelector(".next-quote");
nextQuoteBtn.addEventListener('click', getQuotes);
getQuotes();

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}




const town = document.querySelector('.town');
town.addEventListener('click', setTown);
town.addEventListener('keypress', setTown);
town.addEventListener('blur', setTown);


function getTown() {
  if (localStorage.getItem('town') === null) {
    town.textContent = '[Введите город]';
  } else {
    town.textContent = localStorage.getItem('town');
  }
}
getTown();

function setTown(e) {
  const isKeypress = e.type === 'keypress';
  const isEnterKey = e.which == 13 || e.keyCode == 13;

  localStorage.getItem('town')
  if ( (e.target.innerText === localStorage.getItem('town') || e.target.innerText == "[Введите город]") && e.bubbles == true && !isKeypress && !isEnterKey) {
    e.target.innerText = "";
    return;
  }
  
  if (isKeypress) {
    if (isEnterKey) {
      if (e.target.innerText !== "" && e.target.innerText !== "[Введите город]") {
        localStorage.setItem('town', e.target.innerText);
        getTown();
      } else {
        getTown();
      }
      town.blur();
    }
  } else {
    if (e.target.innerText !== "" && e.target.innerText !== "[Введите город]") {
      localStorage.setItem('town', e.target.innerText);
      getTown();
      getWether(e.target.innerText);
    } else {
      getTown();
    }
  }
}


if (town.textContent != '[Введите город]') {
  getWether(town.textContent);
}

async function getWether (town) {
  try {
    url = `https://api.openweathermap.org/data/2.5/weather?q=` + town + `&lang=ru&appid=d329abfd939c5ae85973592bc27eae02&units=metric`;
    responce = await fetch(url);
    let data = await responce.json();
    
    document.querySelector(".weather-icon").className = "weather-icon owf";
    document.querySelector('.temp').innerHTML = Math.round(data['main']['temp']) + " °C";
    document.querySelector('.air-humidity').innerHTML = data['main']['humidity'] + "%";
    document.querySelector('.wind-speed').innerHTML = data['wind']['speed'] + " км/ч";
    document.querySelector('.weather-icon').classList.add(`owf-${data.weather[0].id}`);
  } catch (error) {
    alert("Неправильное название города");
    return Error;
  }
}