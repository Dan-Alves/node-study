const Commander = require('commander')
const Database = require('./database')
const Hero = require('./hero')

async function main() {
  Commander
    .version('v1')
    .option('-n, --nome [value]', "Name of hero")
    .option('-p, --power [value]', "Power of hero")
    .option('-i, --id [value]', "Id of hero")

    .option('-r, --register', "Register hero")
    .option('-l, --list', "List heroes")
    .option('-re, --remove', "Remove hero")
    .option('-u, --update [value]', "Update hero")
    .parse(process.argv)

  const hero = new Hero(Commander)

    try {
      if(Commander.register) {
        delete hero.id
        const result = await Database.register(hero)
        if(!result) {
          console.error('Hero was not registered')
          return;
        }
        console.log('Hero successfully registered')
      }

      if(Commander.list) {
        const result = await Database.list()
        console.log(result)
        return;
      }

      if(Commander.remove) {
        const result = await Database.remove(hero.id)
        if(!result) {
          console.error('Could not remove hero')
          return
        }
        console.log('Hero successfully removed')
      }

      if(Commander.update) {
        const idUpdate = parseInt(Commander.update)
        const data = JSON.stringify(hero)
        const heroUpdate = JSON.parse(data)
        const result = await Database.update(idUpdate, heroUpdate)
        if(!result) {
          console.error('Could not update hero')
          return
        }
        console.log('Hero successfully updated')
      }
    } catch (error) {
      console.error(error)
    }
}

main()