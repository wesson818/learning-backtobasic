// https://www.npmjs.com/package/queryl
// the custom Operations are hard to use
const queryl = require('queryl');
var check = queryl.match({
    $or: {
      $equal: {
        foo: 'bar'
      },
      $and: {
        $not: {
          $match: {
            foo: /^baz/
          }
        },
        $gt: {
          bar: 3
        }
      }
    }
  }, {
    foo: 'hello world',
    bar: 5
  });
//   console.log('check', check)


const post = {
    '1603669830585': 'Male',
    '1603667333477': '0422565666',
    '1603162083623': 'wen@m.com',
    '1603784666647': 'Wen'
}
var check = queryl.match({
    $or: {
        $equal: {
            "1603669830585": 'Male'
        },
        $equal: {
            "1603784666647": "en" 
        }
    }
},post)
console.log('check', check)
