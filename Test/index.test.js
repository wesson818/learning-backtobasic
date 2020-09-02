// import {sum, subtract, cloneArray} from './index'
const {sum, subtract, cloneArray} = require('./index')

it('test sum', () => {
    expect(sum(1,2)).toBe(3)
})

it('test subtract', () => {
    expect(subtract(3,2)).toBe(1)
})

it('test cloneArray', () => {
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array) 
})