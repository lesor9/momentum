const backgrounds = {
};

// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Output Time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour >= 5 && hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Доброе утро, ';
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Добрый день, ';
  } else if (hour >= 18 && hour <= 23) {
    // Evening
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Добрый вечер, ';
    document.body.style.color = 'white';
  } else {
    // Night
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Доброй ночи, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  const isKeypress = e.type === 'keypress';
  const isEnterKey = e.which == 13 || e.keyCode == 13;

  console.log(e.target.innerText === localStorage.getItem('name'));
  console.log(e.target.innerText == "[Enter Name]");
  console.log(e.bubbles == true);
  console.log(isKeypress);
  console.log(isEnterKey);
  console.log(e);


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

// Get Focus
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

// Run
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

