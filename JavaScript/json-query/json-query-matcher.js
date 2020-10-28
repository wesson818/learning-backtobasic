// https://www.npmjs.com/package/json-query-matcher

const { evaluateMatch } = require('json-query-matcher');
 
const items = [
    { firstName: "Gaël", lastName: "Haméon" },
    { firstName: "Gaël", lastName: "Monfils" },
    { firstName: "Alix", lastName: "Haméon" }
]
 
let query, result;
query = { "firstName": { "$ne": "Gaël" } };
result = items.filter(item => evaluateMatch(item, query));
// console.log('result', result)

const post = [{
    '1603669177323': '2020-10-28T00:00:00.000Z',
    '1603669156267': 'testing 123\nnewline 456',
    '1603670049058': [
        's3',
        's1'
    ],
    '1603669895926': 'A',
    '1603669830585': 'Male',
    '1603667333477': '0422565666',
    '1603162083623': 'wen@m.com',
    '1603784666647': 'Wen'
}]
// query = {'1603784666647': { "$eq": "Wen" }}
// query = {'1603162083623': { "$in": ["@m.com"] }} 
//$in not work like contains (MongoDB), which need match the whole string in array
query = {"$or":[{ "1603784666647": { "$eq": "wen" } },{'1603667333477': { "$nin": ["04"] }}]} 
result = post.filter(p => evaluateMatch(p, query));
console.log('result', result)

// $eq: equal
// $ne: not equal
// $gt: greater than
// $gte: greater than or equal
// $lt: less than
// $lte: less than or equal
// $in: in
// $nin: not in
