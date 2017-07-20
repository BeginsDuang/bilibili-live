const Live = require('../dist/bilibili-live.js')

Live.initRoom({
  roomId: 92052,
}).then(room => {
  room
    .on('data', (msg) => {
      console.log(msg)
    })
    .on('error', () => {
      console.log('error')
    })
    .on('close', () => {
      console.log('close')
    })
})
