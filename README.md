# light-calendar
> 一个通用的轻量的js日历生成库。不涉及任何样式，日历的样式完全交给调用者实现。

**[Demo示例](https://ncushujian.github.io/light-calendar/demo/dist/test.html)**      
**[github](https://github.com/ncushujian/light-calendar)**

## 安装
```bash
npm install light-calendar --save
```

## 使用方式
### 方式一
```javascript
import calendar from 'light-calendar';

calendar.getWeekCalendar(2022, 10, 10, 'after');
var monthCalendar = calendar.getMonthCalendar(2022, 10, 'after');
// monthCalendar数组长度为：42，正好为单月日历的数据量
// 数据格式如下：
// [
//   { year: 2022, month: 9, date: 26, day: 1 },
//   { year: 2022, month: 9, date: 27, day: 2 },
//   { year: 2022, month: 9, date: 28, day: 3 },
//   { year: 2022, month: 9, date: 29, day: 4 },
//   { year: 2022, month: 9, date: 30, day: 5 },
//   { year: 2022, month: 10, date: 1, day: 6 },
//   { year: 2022, month: 10, date: 2, day: 7 },
//   ...
//   { year: 2022, month: 10, date: 31, day: 1 },
//   { year: 2022, month: 11, date: 1, day: 2 },
//   ...
// ]
// year: 年  month: 月  data: 日  day: 星期几
```

### 方式二
```html
<!-- script标签引入 calendar.min.js ，该 js 文件位于 /dist 文件目录下 -->
<script src="https://xxx.xxx.com/xxx/xxx/calendar.min.js"></script>
<script>
  tCalendar.getWeekCalendar(2022, 10, 10, 'after');
  tCalendar.getMonthCalendar(2022, 10, 'after');
</script>
```

## api
### **calendar.getMonthCalendar(year, month, pos);**
属性 | 类型 | 默认值 | 是否必填 | 说明  
-|-|-|-|-|
year | Number | 无 | 是 | 生成的月日历所处的年
month | Number | 无 | 是 | 生成的月日历所处的月
pos | String | 'before' | 否 | `'before'`: 星期日位于列头 `'after'`: 星期日位于列尾



### **calendar.getWeekCalendar(year, month, date, pos);**
属性 | 类型 | 默认值 | 是否必填 | 说明  
-|-|-|-|-|
year | Number | 无 | 是 | 生成的周日历所处的年
month | Number | 无 | 是 | 生成的周日历所处的月
date | Number | 无 | 是 | 生成的周日历所处的日
pos | String | 'before' | 否 | `'before'`: 星期日位于列头 `'after'`: 星期日位于列尾