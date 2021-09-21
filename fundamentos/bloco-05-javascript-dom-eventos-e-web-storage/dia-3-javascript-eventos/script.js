function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//ex 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (const day of dezDaysList) {
    let dayItem = document.createElement('li');
    dayItem.innerText = day;
    dayItem.classList.add('day');

    switch (day) {
      case 24:
      case 25:
      case 31:
        dayItem.classList.add('holiday');
        break;
      case 4:
      case 11:
      case 18:
      case 25:
        dayItem.classList.add('friday');
        break;
    }

    document.querySelector('#days').appendChild(dayItem);
}

//ex 2
function createBtn(btnName) {
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.textContent = btnName;
  document.querySelector('.buttons-container').appendChild(button);
}
createBtn('Feriados');

//ex 3
function addHolidayEvent() {
  let holidays = document.querySelectorAll('.holiday');
  let holidayBtn = document.querySelector('#btn-holiday')
  let defaultColor = 'rgb(238,238,238)';
  let holidayColor = 'rgb(47, 193, 140)';
  console.log(holidays[0]);

  holidayBtn.addEventListener('click', function() {
    holidays.forEach(element => {
      // element.style.backgroundColor = 'black'
      if (element.style.backgroundColor === holidayColor) {
        element.style.backgroundColor = defaultColor;
      } else {
        element.style.backgroundColor = holidayColor;
      }
    });
  })
}
addHolidayEvent();

// ex 4
function friday(string) {
  const btn = document.createElement('button');
  btn.innerText = string;
  btn.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(btn);
}

friday('sexta-feira');

// ex 5
function addFridayFunctionality() {
  const fridays = document.querySelectorAll('.friday');
  const btn = document.querySelector('#btn-friday');
  btn.addEventListener('click', () => {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerText === 'Sextou!') {
        const sibling = fridays[i].previousSibling;
        fridays[i].innerText = (parseInt(sibling.innerText) + 1);
      } else {
        fridays[i].innerText = 'Sextou!';
      }
    }
  })
}
addFridayFunctionality();

// ex 6
function zoomIn(event) {
  event.target.style.fontSize = '25px';
}

function zoomOut(event) {
  event.target.style.fontSize = '20px';
}

const days = document.querySelectorAll('.day');
for (let i = 0; i < days.length; i += 1) {
  days[i].addEventListener('mouseenter', zoomIn);
  days[i].addEventListener('mouseleave', zoomOut);
}

// ex 7

function addTask(taskName) {
  const task = document.createElement('span');
  task.innerText = taskName;
  document.querySelector('.my-tasks').appendChild(task);
}
addTask('cozinhar');

// ex 8
function addSub(color) {
  const sub = document.createElement('div');
  sub.className = 'task';
  sub.style.backgroundColor = color;
  document.querySelector('.my-tasks').appendChild(sub);
}

addSub('red')