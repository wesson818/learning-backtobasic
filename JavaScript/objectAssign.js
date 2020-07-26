const obj1 = {"arms":true, "armCount":2}
const obj2 = {"weapons":['missle launcher','reciprocating saw']}
const obj3 = {"canMove":true,"legs":0,"treads":2}

const arms = Object.assign({'hasHands':true,"arms":false}, obj1)
console.log(arms)

const robot = Object.assign({'hasHands':true,"arms":false},obj1,obj2,obj3)
console.log(robot)