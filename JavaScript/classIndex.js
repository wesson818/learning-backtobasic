import {Animal, Cat, Player, TennisPlayer} from './classOOP.js'

console.log(Animal.return10())

let people = new Animal('People', 2)
console.log(people.metaData)

let cat = new Cat('Cat', 4)
console.log(cat.metaData)
cat.makeNoise()

const player = new Player('Messi', "Argentina")
console.log(player.playerBorn)

const tennisPlayer = new TennisPlayer('Refeal Nadal','Spain',34)
console.log(tennisPlayer.playerBorn)
console.log(tennisPlayer.playTennis())