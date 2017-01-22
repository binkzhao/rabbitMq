const rabbitMq = require('amqplib/callback_api')

class Amqp {
  static produce (exchange, queue, msg) {
    rabbitMq.connect('amqp://localhost', (err, conn) => {
      conn.createChannel((err, ch) => {
        ch.assertQueue(queue.name, { durable: false })
        ch.assertExchange(exchange.name, exchange.type, { durable: false })
        ch.bindQueue(queue.name, exchange.name, queue.routeKey)
        ch.publish(exchange.name, queue.routeKey, Buffer.from(msg))
        console.log(" [%s] Sent %s: '%s'", queue.name, queue.routeKey, msg)
      })

      setTimeout(() => {
        conn.close()
        process.exit(0)
      }, 500)
    })
  }

  static consume (exchange, queue) {
    rabbitMq.connect('amqp://localhost', (err, conn) => {
      conn.createChannel((err, ch) => {
        ch.assertQueue(queue.name, { durable: false })
        ch.assertExchange(exchange.name, exchange.type, { durable: false })
        ch.bindQueue(queue.name, exchange.name, queue.routeKey)
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue.name);

        ch.consume(queue.name, (msg) => {
          console.log("Handle message:")
          console.log(" [%s] Received %s", queue.name, msg.content.toString());
          setTimeout(() => {
            console.log(" [x] Done")
            ch.ack(msg)
          }, 2000)
        }, { noAck: false })
      })
    })
  }
}

module.exports = Amqp