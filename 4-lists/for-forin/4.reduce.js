const { getPeople } = require('./service')

async function main() {
  try {
    const { results } = await getPeople(`a`)
    const height = results.map((item) => parseInt(item.height))
    
    console.log('Alturas:', height)

    const total = height.reduce((ant, prox) => {
      return ant + prox
    })

    console.log('Total:', total)
  } catch (error) {
    console.error(error)
  }
}

main()