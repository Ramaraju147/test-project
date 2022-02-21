const moment = require('moment');
const lodash = require('lodash');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

var m = moment('2020-01-01');
console.log(m.isValid());

var n = moment('2020-14-01');
console.log(n.isValid());

//adds 7 days to current date
console.log(moment().add(7,'days').format('MMM Do YY'));
//adds 7 months to current date
console.log(moment().add(7,'M').format('MMM Do YY'));
//adds 7 years to current date
console.log(moment().add(7,  'y').format('MMM Do YY'));

//subtracts 7 days to current date
console.log(moment().subtract(7,  'd').format('MMM Do YY'));
//subtracts 7 months to current date
console.log(moment().subtract(7,  'M').format('MMM Do YY'));
//subtracts 7 years to current date
console.log(moment().subtract(7,  'y').format('MMM Do YY'));

var date1 = moment('2014-11-11');
var date2 = moment('2015-09-11');

console.log(date1.diff(date2, 'minutes')) 
console.log(date1.diff(date2, 'hours')) 
console.log(date1.diff(date2, 'days')) 
console.log(date1.diff(date2, 'weeks'))

var date3 = moment('2014-11-27');
var date4 = moment('2015-09-16');

console.log(date3.diff(date4, 'minutes')) 
console.log(date3.diff(date4, 'hours')) 
console.log(date3.diff(date4, 'days')) 
console.log(date3.diff(date4, 'weeks'))

console.log(moment('2010-01-01').isAfter(moment('2018-01-01')))

console.log(moment('2019').isLeapYear())
console.log(moment('2020').isLeapYear())

console.log(lodash.compact([0,1,'',false,NaN]));
console.log(lodash.concat([1],[2,3],[[4,5]]))
console.log(lodash.drop([1,2,3,4],2))
console.log(lodash.flattenDeep([1,2,[3],[[2],[[3,4]]]]));
console.log(lodash.fromPairs([['a', 1], ['b', 2]]))