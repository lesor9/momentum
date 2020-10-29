const backgrounds = {
  "morning" : [],
  "day" : [],
  "evening" : [],
  "night" : []
};

let indexOfImage = 0;

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

console.log(backgrounds);


const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');


const showAmPm = true;


function showTime() {
  const currentHour = document.querySelector(".hour").textContent;

  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // console.log(indexOfImage);

  if (hour != currentHour && currentHour != "") {
    if (indexOfImage >= 20) {
      indexOfImage = 0;
    } else
    indexOfImage += 1;
  }

  // console.log(indexOfImage);

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
  document.body.style.backgroundImage = `url(./assets/images/day/${backgrounds[partOfDay][indexOfImage]}.jpg)`;

  if (partOfDay == 'morning') {
    greeting.textContent = 'Доброе утро, ';
  } else if (partOfDay == 'day') {
    greeting.textContent = 'Добрый день, ';
  } else if (partOfDay == 'evening') {
    greeting.textContent = 'Добрый вечер, ';
    document.body.style.color = 'white';
  } else if (partOfDay == 'night') {
    greeting.textContent = 'Доброй ночи, ';
    document.body.style.color = 'white';
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
    console.log("truee");
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

const nextImageBtn = document.querySelector(".next-background").addEventListener('click',  nextImage);
let partOfDay = "morning";
indexOfImageButton = 0;

function nextImage() {
  console.log(partOfDay);
  console.log(`indexOfImageButton: ${indexOfImageButton}`);
  console.log(`./assets/images/${partOfDay}/${backgrounds[partOfDay][indexOfImageButton]}.jpg`);
  document.body.style.backgroundImage = `url(./assets/images/${partOfDay}/${backgrounds[partOfDay][indexOfImageButton]}.jpg)`;

  if (indexOfImageButton > 4) partOfDay = changePartOfDay(partOfDay);
  indexOfImageButton = indexOfImageButton < 5 ? indexOfImageButton + 1 : 0;
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