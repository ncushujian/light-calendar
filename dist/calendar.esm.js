function n(n,r){for(var t=[31,null,31,30,31,30,31,31,30,31,30,31][r-1]||(function(n){return n%400==0||n%100!=0&&n%4==0}(n)?29:28),e=[],a=1;a<=t;a++)e.push({year:n,month:r,date:a});return e}function r(r,t,e){var a=n(r,t),u=function(r,t){return 1===t?n(r-1,12):n(r,t-1)}(r,t),o=function(r,t){return 12===t?n(r+1,1):n(r,t+1)}(r,t),c=function(n,r){var t=new Date(n,r-1,1).getDay();return t||7}(r,t);"after"===e&&(c=1===c?7:c-1);var f=u.slice(-1*c),i=o.slice(0,42-a.length-c),l=[].concat(f,a,i),h="after"===e?[1,2,3,4,5,6,7]:[7,1,2,3,4,5,6];return l.forEach((function(n,r){n.day=h[r%7]})),l}var t={getWeekCalendar:function(n,t,e,a){for(var u=r(n,t,a),o=0,c=0;c<u.length;c++){var f=u[c];if(f.month===t&&f.date===e){o=c;break}}var i=Math.ceil((o+1)/7);return u.slice(7*(i-1),7*i)},getMonthCalendar:r};export default t;