var _ = require('lodash');

let array = ['a', 'b', 'c', 'd']
    
let lodashResult = ""

// chunk array to group
lodashResult = _.chunk(array, 2)
console.log(lodashResult)

// Removes all given values from array
lodashResult = _.pull(array, 'a', 'c')
console.log(lodashResult)

// => also an integer between 0 and 5
lodashResult = _.random(5);
console.log(lodashResult)

// => a floating-point number between 0 and 5
lodashResult =  _.random(5, true);
console.log(lodashResult)

// => a floating-point number between 2.2 and 5.2
lodashResult = _.random(2.2, 5.2);
console.log(lodashResult)

// unique values from all given arrays
lodashResult = _.union([2], [1, 2]);
console.log(lodashResult)

// Flattens array a single level deep
lodashResult = _.flatten(_.flatten(_.flatten([1, [2, [3, [4]], 5]])));
console.log(lodashResult.length)
console.log(lodashResult)

// Remove an array of keys from object
let objA = {"name": "colin", "car": "suzuki", "age": 17};
lodashResult = _.omit(objA, ['car', 'age']); 
// {"name": "colin"}
console.log(lodashResult)

// Loop n times
lodashResult = 0;
for(var i = 0; i < 5; i++) {
    lodashResult++
}
console.log("Basic for loop:",lodashResult)
// VS Lodash
lodashResult = 0;
_.times(5, function(){
    lodashResult++
});
console.log("Lodash loop:",lodashResult)

// Create an array of length 6 and populate them with unique values. The value must be prefix with "ball_".
// eg. [ball_0, ball_1, ball_2, ball_3, ball_4, ball_5]

// Array's map method.
lodashResult = Array.apply(null, Array(6)).map(function(item, index){
    return "ball_" + index;
});
console.log("Array map:",lodashResult)
// VS Lodash
lodashResult = _.times(6, _.uniqueId.bind(null, 'ball_'));
console.log("Lodash uniqueId:",lodashResult)

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
lodashResult = _.pick(object, ['a', 'c']);
console.log(lodashResult)
// => { 'a': 1, 'c': 3 }

// Splits string by separator 
// ([string=''], separator, [limit])
lodashResult = _.split('a-b-c', '-', 2);
console.log(lodashResult)
// => ['a', 'b']

lodashResult = _.forEach([1, 2], function(value) {
   return value;
});
console.log(lodashResult)
// => Logs `1` then `2`.
   
lodashResult = _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
    console.log(key);
});
console.log(lodashResult)
// => Logs 'a' then 'b' (iteration order is not guaranteed).

var objects = [{ 'a': 1 }, { 'b': 2 }];

var clone = _.clone(objects);
console.log(clone);
console.log(clone[0] == objects[0]);
// => true

var deep = _.cloneDeep(objects);
console.log(deep);
console.log(deep[0] == objects[0]);
// => false

// _.assign is the equivalent of the spread operator from ES6.
var foo = { a: "a property" };
var bar = { b: 4, c: "an other property" }
var result = _.assign({ a: "an old property" }, foo, bar);
console.log('result', result)
// result => { a: 'a property', b: 4, c: 'an other property' }

// find an object using multiple properties with a single line of code
var users = [
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carry", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Win", age: 40, gender: "female" }
  ];
  
var user = _.find(users, { lastName: "Doe", gender: "male" });
console.log('user', user)
// user -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }

var underAgeUser = _.find(users, function(user) {
    return user.age < 18;
});
console.log('underAgeUser', underAgeUser)
// underAgeUser -> { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" }

// Set and Gets the value at path of object
// If the resolved value is undefined, the default Value is returned in its place.
var object = { 'a': [{ 'b': { 'c': 3 } }] };
_.set(object, "a[1]", "An item");
console.log('set object:', object)
console.log('get object:', _.get(object, 'a[1]'))
lodashResult = _.get(object, 'a[0].b.c');
console.log(lodashResult)
// => 3
lodashResult = _.get(object, ['a', '0', 'b', 'c']);
console.log(lodashResult)
// => 3
lodashResult = _.get(object, 'a.b.c', 'default');
console.log(lodashResult)
// => 'default'
console.log(object.a[0].b.c)

// _.keyBy helps a lot when trying to get an object with a specific property. 
var posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
    // more blog posts
    { id: "34abc", title: "The blog post we want", content: "..." }
    // even more blog posts
];
var keyByPosts = _.keyBy(posts, "id");
var post = keyByPosts["34abc"]
console.log('post', post)
// post -> { id: "34abc", title: "The blog post we want", content: "..." }

let arrayPost = posts.filter(post => {
    return post.id === "34abc"
})
console.log('arrayPost', arrayPost)

// _.reduce is a little bit like a filter function.
var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 }
]

var reducedUsers = _.reduce(users, (result, user) => {
    if(user.age >= 18 && user.age <= 59) {
        (result[user.age] || (result[user.age] = [])).push(user);
    }
    return result;
}, {});
console.log('reducedUsers', reducedUsers)
// reducedUsers -> { 
//     28: [{ name: "Jane", age: 28 }], 
//     30: [{ name: "John", age: 30 }, { name: "Jack", age: 30 }] 
// }

var mapResult = {}
users.map(user => {
    if (user.age >= 18 && user.age <= 59) {
        (mapResult[user.age] || (mapResult[user.age] = [])).push(user);
    }
})
console.log('mapResult', mapResult)

// _. sortedUniq will make all duplicated values won’t be returned
var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
var result = _.sortedUniq(sortedArray);
console.log('result', result)
// -> [1, 2, 3, 5, 8]

// _.concat(array, [values]): Creates a new array concatenating array with any additional arrays and/or values.
var ids = []
ids = _.concat(ids, [1,2,3,4,5,5,5,5]);
ids = _.concat(ids, [5,5,5,6,8,9]);
console.log('ids', ids)
// _.union([arrays]): Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
var contacts = _.union(ids)
console.log('contacts', contacts)


