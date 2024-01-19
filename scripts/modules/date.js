//-----------дата и время-----------------
//текущее время
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.querySelector('.date__time').innerHTML = h + ":" + m;
    setTimeout(function() {
      startTime()
    }, 500);
  }

  function startDate() {
    const newDate = new Date();
    const days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const dateWeekDay  = document.querySelector('.date__week-day');
    dateWeekDay.insertAdjacentHTML('beforebegin',`${days[newDate.getDay()]}`);

    //текущий день месяца
    const dateDay  = document.querySelector('.date__day');
    dateDay.insertAdjacentHTML('beforebegin',`${newDate.getDate()}`);

    //месяц
    const month =['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const dateMonth  = document.querySelector('.date__month');
    dateMonth.insertAdjacentHTML('beforebegin',`${month[newDate.getMonth()]}`);
  }

  startTime();
  startDate();

  export { startTime, startDate };