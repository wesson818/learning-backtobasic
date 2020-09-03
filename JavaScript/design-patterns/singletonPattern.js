// The singleton pattern is one of the most controversial yet easiest to implement design patterns. 
// Many people say you should never use the singleton design pattern, 
// but there are still plenty of cases where the singleton pattern is the perfect solution. 

class FancyLogger {
    // constructor() {
    //     this.logs = []
    // }
    constructor() {
        if(FancyLogger.instance == null) {
            this.logs = []
            FancyLogger.instance = this
        }
        return FancyLogger.instance
    }

    log(message) {
        this.logs.push(message)
        console.log(`FANCY: ${message}`)
    }

    printLogCount() {
        console.log(`${this.logs.length} Log(s)`)
    }
}

const logger = new FancyLogger() // new instance of singleton
Object.freeze(logger)
// A frozen object can no longer be changed; Freezing an object also prevents its prototype (constructor and method) from being changed.

// first use case
function logFirstImplementation() {
    // const logger = new FancyLogger()
    logger.printLogCount()
    logger.log('First Log')
    logger.printLogCount()
}

// second use case
function logSecondImplementation() {
    // const logger = new FancyLogger()
    logger.printLogCount()
    logger.log('Second Log')
    logger.printLogCount()
}


logFirstImplementation()
logSecondImplementation()