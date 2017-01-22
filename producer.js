const Amqp = require('./Amqp')
const config = require('./config')
const uuid = require('uuid')

Amqp.produce(config.exchange, config.queueList.emay, uuid.v1())
Amqp.produce(config.exchange, config.queueList.emay, uuid.v1())
Amqp.produce(config.exchange, config.queueList.emay, uuid.v1())
Amqp.produce(config.exchange, config.queueList.twilio, uuid.v1())
Amqp.produce(config.exchange, config.queueList.twilio, uuid.v1())