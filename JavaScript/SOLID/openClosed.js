// The main idea of the open/closed principle is that every class/function/module/section of your code should be 
// open for extension and closed for modification. 
// This means that a class/function/module should be able to be extended in functionality 
// without having to go into the class and change it. 
// Essentially you shouldn't need to change existing code to add new functionality and instead should only have to add new code.

console.log('*** open for extension and closed for modification ***')

// the switch case broke open/closed principle
function printQuiz(questions) {
    questions.map(question => {
        console.log(question.description)
        switch(question.type) {
            case 'boolean':
                console.log('1. True')
                console.log('2. False')
                break;
            case 'multipleChoice':
                question.options.forEach((option,index) => {
                    console.log(`${index+1}. ${option}`)
                })
                break;
            case 'text':
                console.log('Answer:_____________')
                break;
            // when data changed and add new type we need modify to add one more case in this function 
            case 'range':
                console.log('Min:_____________')
                console.log('Max:_____________')
                break;
        }
    })
}

const questions = [
    {
        type: 'boolean',
        description: 'is this video useful?'
    },{
        type: 'multipleChoice',
        description: 'what is your favorite language?',
        options: ['HTML', 'CSS', 'JavaScript', 'PHP']
    },{
        type: 'text',
        description: 'describe your favorite JS feature.'
    },{
        type: 'range',
        description: 'what is the speed limit in your city?'
    }
]

printQuiz(questions)