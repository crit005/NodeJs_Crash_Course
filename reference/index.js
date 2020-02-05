// const person = require("./person");
// const Person = require("./personc");
// const colors = require("colors");

// console.log (person);

// const person1 = new Person("konthea".green, 32);
// person1.greeting();

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data)=>console.log('Called Listener', data));

logger.log('Hello World');