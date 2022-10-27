import calendar from './calendar.esm.js';

var d = new Date();
var curYear = d.getFullYear();
var curMonth = d.getMonth() + 1;
var curDate = d.getDate();

var weekCalendar = calendar.getWeekCalendar(curYear, curMonth, curDate, 'after');
var weekCalendarTemp = '';

weekCalendar.forEach(d => {
  if (d.date === curDate) {
    weekCalendarTemp += '<div class="date current">' + d.date + '</div>';
  } else {
    weekCalendarTemp += '<div class="date">' + d.date + '</div>';
  }
});

document.getElementById('j_weekTime').innerText = curYear + '年 '+ curMonth + '月';
document.getElementById('j_weekDateList').innerHTML = weekCalendarTemp;



function renderMonthCalendar (year, month) {
  var monthCalendar = calendar.getMonthCalendar(year, month, 'after');
  var monthCalendarTemp = '';
  
  monthCalendar.forEach(d => {
    if (d.month === curMonth && d.date === curDate) {
      monthCalendarTemp += '<div class="date current">' + d.date + '</div>';
    } else if (d.month !== month) {
      monthCalendarTemp += '<div class="date gray">' + d.date + '</div>';
    } else {
      monthCalendarTemp += '<div class="date">' + d.date + '</div>';
    }
  });
  
  document.getElementById('j_monthTime').innerText = year + '年 '+ month + '月';
  document.getElementById('j_monthDateList').innerHTML = monthCalendarTemp;
}

renderMonthCalendar(curYear, curMonth);

let diffMonth = 0;
document.getElementById('j_prevMonthBtn').addEventListener('click', function () {
  if (diffMonth + curMonth > 1) {
    diffMonth--;
  }
  renderMonthCalendar(curYear, diffMonth + curMonth);
});

document.getElementById('j_nextMonthBtn').addEventListener('click', function () {
  if (diffMonth + curMonth < 12) {
    diffMonth++;
  }
  renderMonthCalendar(curYear, diffMonth + curMonth);
});