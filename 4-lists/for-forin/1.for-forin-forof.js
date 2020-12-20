const service = require('./service')

async function main() {

  try {

    const result = await service.getPeople('a')
    const names = []

    console.time('forof')
    for(pessoa of result.results) {
      names.push(pessoa.name)
    }
    console.timeEnd('forof')

    console.log(`names`, names)

  }
  catch(error) {
    console.error('ERROR INTERNO!', error)
  }
}

main()