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
