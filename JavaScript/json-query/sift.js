// https://github.com/crcn/sift.js
const sift = require('sift');
// import sift from "sift";
const moment = require('moment');

const result1 = ["hello", "sifted", "array!"].filter(
    sift({ $in: ["hello", "world"] })
  ); //['hello']

// console.log('result1', result1)

let query, result;
const post = [{
    datetime: '2020-10-30T00:00:00.000Z',
    'datetime_1603669177323': '2020-10-30T00:00:00.000Z',
    '1603669177323': '2020-10-31T00:00:00.000Z',
    '1603669156267': 'testing 123\nnewline 456',
    '1603670049058': [
        's3',
        's1'
    ],
    '1603669895926': 'A',
    '1603669830585': 'Male',
    '1603667333477': '0422565666',
    '1603162083623': 'wen@gmail.com',
    '1603784666647': 'Wen',
    '1604013599273': '12:56',
    '1604013595734': '2020-10-30T00:00:00.000Z',
    '1604013564441': '1998-11-05T00:00:00.000Z'
}]
query = {'1603784666647': { "$eq": "Wen" }}
query = {'1603162083623': { "$in": ["@m.com"] }}
query = {"$or":[{ "1603784666647": { "$eq": "wen" } },{'1603667333477': { "$in": ["0422565666"] }}]} 
query = {'1603667333477': { $regex: "^04" }}
query = {
    $where: function() {
        return this.datetime != null && new Date(this.datetime).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0) + 7*86400000 && new Date(this.datetime).setHours(0,0,0,0) > new Date().setHours(0,0,0,0)
    }
}
query = {
    $where: "this.datetime_1603669177323 != null && new Date(this.datetime_1603669177323).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0) + 7*86400000 && new Date(this.datetime_1603669177323).setHours(0,0,0,0) > new Date().setHours(0,0,0,0)"
}
query = {'$or': [ { '1603162083623': /@gmail\.com/i } ]}
// query = {'$or': [ { '1603162083623': {$regex : ".*@gmail.com.*"} } ]}
query = {'1603669156267': {$nin: [null, '']}}
query = { '1603669895926': {$eq: 'A'} }
query = {'1603670049058': { "$in": ["s1"] }} 
query = { '1603669830585': /^Male$/i }
query = {"$and":[{"1603784666647":/^wen$/i},{"1603162083623":/@gmail\.com/i},{"1603667333477":/^04/i},{"1603669156267":{"$nin":[null,""]}},{"1603669895926":{"$eq":"B"}},{"1603670049058":{"$in":["s1"]}},{"1603669830585":/^Male$/i}]}
query = {
    $where: "this[1603669177323] != null && new Date(this[1603669177323]).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0) + 7*86400000 && new Date(this[1603669177323]).setHours(0,0,0,0) > new Date().setHours(0,0,0,0)"
}
query = {"$or":[{"$where":"this[1603669177323] != null && new Date(this[1603669177323]).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0) + 7*86400000 && new Date(this[1603669177323]).setHours(0,0,0,0) > new Date().setHours(0,0,0,0)"}]}
// for DOB
query = {"$where":"this[1603669177323] != null && new Date(new Date(this[1603669177323]).setHours(0,0,0,0)).setFullYear(2000) <= new Date(new Date().setHours(0,0,0,0) + 7*86400000).setFullYear(2000) && new Date(new Date(this[1603669177323]).setHours(0,0,0,0)).setFullYear(2000) > new Date(new Date().setHours(0,0,0,0)).setFullYear(2000)"}
// inNextXDays
query = {"$where":"this[1603669177323] != null && new Date(this[1603669177323]).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0) + " + 3 + "*86400000 && new Date(this[1603669177323]).setHours(0,0,0,0) > new Date().setHours(0,0,0,0)"}
// inThisMonth
query = {"$where":"this[1603669177323] != null && new Date(this[1603669177323]).getMonth() == new Date().getMonth() && new Date(this[1603669177323]).getFullYear() == new Date().getFullYear()"}
// inThisYear
query = {"$where":"this[1603669177323] != null && new Date(this[1603669177323]).getFullYear() == new Date().getFullYear()"}
query = {'1603669895926': { "$in": ["A","B"] }} 
query = {"$and":[{"1604013599273":{"$gte":"08:30","$lte":"17:25"}},{"$where":"this[1604013564441] != null && new Date(this[1604013564441]).getMonth() == new Date().getMonth() && this[1604013595734] != null && new Date(this[1604013595734]).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0) + 10*86400000 && new Date(this[1604013595734]).setHours(0,0,0,0) > new Date().setHours(0,0,0,0)"}]}
// time range
query = {"1604013599273":{"$gte":"08:30","$lte":"17:25"}}
// was7DaysAgo
query = {"$where":"this[1604013595734] != null && new Date(this[1604013595734]).setHours(0,0,0,0) === new Date().setHours(0,0,0,0) - 7*86400000"}
// was7DaysAgo DOB
query = {"$where":"this[1604013564441] != null && new Date(new Date(this[1604013564441]).setHours(0,0,0,0)).setFullYear(2000) === new Date(new Date().setHours(0,0,0,0) - 7*86400000).setFullYear(2000)"}
// wasXDaysAgoNoYear === wasXDaysAgo DOB x=14
query = {"$where":"this[1604013564441] != null && new Date(new Date(this[1604013564441]).setHours(0,0,0,0)).setFullYear(2000) == new Date(new Date().setHours(0,0,0,0) - " + 14 + "*86400000).setFullYear(2000)"}
// IN_XDAYS_TIME DOB === IN_X_DAYS_NO_YEAR x=7
query = {"$where":"this[1604013564441] != null && new Date(new Date(this[1604013564441]).setHours(0,0,0,0)).setFullYear(2000) == new Date(new Date().setHours(0,0,0,0) + " + 7 + "*86400000).setFullYear(2000)"};
// RANGE_NUM_OF_YEARS
ltData = [0,2]
query = {"$where":'this[1604013595734] != null && ' + ltData[0] + ' <= (new Date() <= new Date(this[1604013595734]) ? 0 : Math.floor((new Date() - new Date(this[1604013595734]))/(1000*60*60*24*365))) && (new Date() <= new Date(this[1604013595734]) ? 0 : Math.floor((new Date() - new Date(this[1604013595734]))/(1000*60*60*24*365))) <= ' + ltData[1]};
query = {"$where":'this[1604013595734] != null && (new Date("' + getDate("year", "end", ltData[1]) + '") <= new Date(this[1604013595734])) && (new Date(this[1604013595734]) <= new Date("' + getDate("year", "start", ltData[0]) + '"))'};
// RANGE_NUM_OF_MONTHS
// query = {"$where":'this[1604013595734] != null && (new Date("' + getDate("month", "end", ltData[1]) + '") <= new Date(this[1604013595734])) && (new Date(this[1604013595734]) <= new Date("' + getDate("month", "start", ltData[0]) + '"))'};
// RANGE_NUM_OF_WEEKS
// query = {"$where":'this[1604013595734] != null && (new Date("' + getDate("week", "end", ltData[1]) + '") <= new Date(this[1604013595734])) && (new Date(this[1604013595734]) <= new Date("' + getDate("week", "start", ltData[0]) + '"))'};
// RANGE_NUM_OF_DAYS
// query = {"$where":'this[1604013595734] != null && (new Date("' + getDate("day", "end", ltData[1]) + '") <= new Date(this[1604013595734])) && (new Date(this[1604013595734]) <= new Date("' + getDate("day", "start", ltData[0]) + '"))'};

result = post.filter(sift(query))
console.log('Date', new Date(post[0][1604013595734]))
console.log('result', result)
console.log('found results:', !!result.length)


function getDate(timeType, startOrEnd, addValue) {
    let date = moment();

    if (startOrEnd === "start") {
        date.add(-addValue + 1, timeType).startOf(timeType);
    } else {
        date.add(-addValue, timeType).endOf(timeType);
    }

    return date.format("YYYY-MM-DD");
    // return date.toDate();
}
let fromDate, endDate;
let range = [0,2];
fromDate = getDate("year","start",range[0]);
endDate = getDate("year","end",range[1]);
// fromDate = getDate("month","start",range[0]);
// endDate = getDate("month","end",range[1]);
// fromDate = getDate("week","start",range[0]);
// endDate = getDate("week","end",range[1]);
// fromDate = getDate("day","start",range[0]);
// endDate = getDate("day","end",range[1]);
console.log('fromDate', fromDate)
console.log('endDate', endDate)
console.log('fromDate', new Date(fromDate))
console.log('endDate', new Date(endDate))
