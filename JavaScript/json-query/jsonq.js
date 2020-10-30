// https://github.com/me-shaon/js-jsonq
const jsonQ = require('js-jsonq');
var _ = require('lodash');

// sample Json data
const JsonObject = {
    products: [
        {
            id: 1,
            city: 'bsl',
            name: 'iPhone',
            cat: 1,
            price: 80000.5
        },
        {
            id: 2,
            city: null,
            name: 'macbook pro',
            cat: 1,
            price: 150000
        },
        {
            id: 3,
            city: 'dhk',
            name: 'Redmi 3S Prime',
            cat: 2,
            price: 12000
        },
        {
            id: 4,
            city: 'bsl',
            name: 'macbook air',
            cat: 2,
            price: 110000
        }
    ]
};

const Q = new jsonQ(JsonObject);
const res = Q.from('products')
    .where('cat', '=', 2)
    .fetch();
// console.log(res);

let post = { post:[{'1603337998219': 'w@w.com'}]}
let p = new jsonQ(post);
let result = p.from('post').where('1603337998219','=','w@w.com').fetch();
// console.log(result);

let obj = {
    post: [{
        '1603669177323': '2020-10-28T00:00:00.000Z',
        '1603669156267': 'testing 123\nnewline 456',
        '1603670049058': [
            's3'
        ],
        '1603669895926': 'A',
        '1603669830585': 'Male',
        '1603667333477': '0422565666',
        '1603162083623': 'wen@m.com',
        '1603784666647': 'Wen'
    }]
}
// let join = "or";
let join = "and";
let valid = false;
let conditions = [
                    ['1603784666647','eq','wen'],
                    ['1603162083623','contains','@gmail.com'],
                    ['1603667333477', 'startswith', '04']
                ]
let results = [];
_.forEach(conditions, condition => {
    p = new jsonQ(obj);
    console.log('condition', condition)
    result = p.from('post').where(condition[0],condition[1],condition[2]).count();
    console.log('result', result)
    results.push(result);
})
results = _.uniq(results)
console.log('results', results)
if(join === "or"){
    valid = _.includes(results,1);
} else {
    valid = !_.includes(results,0);
}
console.log('valid', valid)
// result = p.from('post')
                        // .where(condition[0],condition[1],condition[2])
                        // .orWhere('1603162083623','contains','@gmail.com')
                        // .orWhere('1603667333477', 'startswith', '041')
                        // .orWhere('1603669156267', 'neq', '')
                        // .orWhere('1603669895926', 'eq', 'A')
                        // .where('1603670049058', 'in', ['s1','s3']) // not working
                        // .orWhere('1603670049058', 'contains', 's1')
                        // .orWhere('1603670049058', 'contains', 's3')
                        // .count();
// console.log(result);
