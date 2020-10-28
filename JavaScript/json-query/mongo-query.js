// https://www.npmjs.com/package/mongo-query (doesn't work)
var query = require('mongo-query');
// our sample document
var obj = {
    name: 'Tobi',
    age: 8,
    location: { country: 'Canada', zip: 123 },
    likes: [{ id: 1, name: 'Food' }, { id: 2, name: 'Stuff' }]
  };
// run an operation and get changes
var changes = query(obj, { $set: { 'location.country': 'US' } });
// console.log('changes', changes)
// console.log('obj', obj)

const post = [{
    '1603669830585': 'Male',
    '1603667333477': '0422565666',
    '1603162083623': 'wen@m.com',
    '1603784666647': 'Wen'
}]

var check = query(post, { "1603784666647": { "$eq": "Wen" } })
console.log('check', check)
