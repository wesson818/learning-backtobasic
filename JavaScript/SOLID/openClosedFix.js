class BooleanQuestion {
    constructor(description) {
        this.description = description
    }
    printQuestionChoices() {
        console.log('1. True')
        console.log('2. False')
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    printQuestionChoices() {
        this.options.forEach((option,index) => {
            console.log(`${index+1}. ${option}`)
        })
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description
    }
    
    printQuestionChoices() {
        console.log('Answer:_____________')
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('Min:_____________')
        console.log('Max:_____________')
    }
}

function printQuiz(questions) {
    questions.map(question => {
        console.log(question.description)
        question.printQuestionChoices()
    })
}

const questions = [
    new BooleanQuestion('is this video useful?'),
    new MultipleChoiceQuestion(
        'what is your favorite language?',
        ['HTML', 'CSS', 'JavaScript', 'PHP']
    ),
    new TextQuestion('describe your favorite JS feature.'),
    new RangeQuestion('what is the speed limit in your city?')
]

printQuiz(questions)