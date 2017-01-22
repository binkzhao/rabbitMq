const Amqp = require('./Amqp')
const config = require('./config')

let args = process.argv.slice(2)
let queue = config.queueList[args[0]]

Amqp.consume(config.exchange, queue)
