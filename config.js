/**
 * Created by bink on 17/1/22.
 */

module.exports = {
  exchange: {
    name: 'exchange',
    type: 'direct'
  },

  queueList: {
    emay: {
      name: 'emay',
      routeKey: 'emay'
    },

    twilio: {
      name: 'twilio',
      routeKey: 'twilio'
    }
  }
}
