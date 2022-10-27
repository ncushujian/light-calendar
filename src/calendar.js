// 是否是闰年
// 闰年判断规则：四年一闰；百年不闰，四百年再闰
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

// 获取某个月的日期数组
function getMonthArr(year, month) {
  var monthCount = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var count = monthCount[month - 1] || (isLeapYear(year) ? 29 : 28);
  var monthArr = [];
  for (var d = 1; d <= count; d++) {
    monthArr.push({ year, month, date: d });
  }
  return monthArr;
};

/**
 * @function 获取某个月的1号是星期几
 * 
 * @param {number} year 年
 * @param {number} month 月
 * @return {number} 1: 星期一 2：星期二 ... 6: 星期六 7: 星期日
 */
function getMonthFirstDay(year, month) {
  var d = (new Date(year, month - 1, 1)).getDay();
  return d ? d : 7;
}

// 获取某个月的上一个月的日期数组
function getPrevMonthArr(year, month) {
  if (month === 1) {
    return getMonthArr(year - 1, 12);
  } else {
    return getMonthArr(year, month - 1);
  }
}

// 获取某个月的下一个月的日期数组
function getNextMonthArr(year, month) {
  if (month === 12) {
    return getMonthArr(year + 1, 1);
  } else {
    return getMonthArr(year, month + 1);
  }
}

function getMonthCalendar(year, month, pos) {
  var curMonth = getMonthArr(year, month);
  var prevMonth = getPrevMonthArr(year, month);
  var nextMonth = getNextMonthArr(year, month);
  var monthFirstDay = getMonthFirstDay(year, month);

  if (pos === 'after') {
    monthFirstDay = monthFirstDay === 1 ? 7 : monthFirstDay - 1;
  }

  var prevMonthFrag = prevMonth.slice(-1 * monthFirstDay);
  var nextMonthFrag = nextMonth.slice(0, 42 - curMonth.length - monthFirstDay);
  var calendar = [].concat(prevMonthFrag, curMonth, nextMonthFrag);

  var dayMap = pos === 'after' ? [1, 2, 3, 4, 5, 6, 7] : [7, 1, 2, 3, 4, 5, 6];
  calendar.forEach(function (d, i) {
    d.day = dayMap[i % 7];
  });

  return calendar;
}

function getWeekCalendar(year, month, date, pos) {
  var calendar = getMonthCalendar(year, month, pos);
  var idx = 0;

  for (var i = 0; i < calendar.length; i++) {
    var d = calendar[i];
    if (d.month === month && d.date === date) {
      idx = i;
      break;
    }
  }

  var row = Math.ceil((idx + 1) / 7);
  return calendar.slice(7 * (row - 1), 7 * row);
}

export default {
  getWeekCalendar,
  getMonthCalendar
};