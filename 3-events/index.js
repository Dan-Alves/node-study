const EventEmitter = require('events')

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter()
const eventName = 'user:click'

myEmitter.on(eventName, (click) => {
  console.log('a user clicked', click)
})


const stdin = process.openStdin()

function main() {
  return new Promise((resolver, reject) => {
    stdin.addListener('data', (value) => {
      return resolver(value)
    })
  })
}

main().then((result) => {
  console.log('result', result.toString())
})