const { getPeople } = require('./service')

Array.prototype.myReduce = function(callback, initialValue) {
  let finalValue = typeof initialValue !== undefined ? initialValue : this[0]
  for(let i = 0; i <= this.length - 1; i++) {
    finalValue = callback(finalValue, this[i], this)
  }
  return finalValue
}

async function main() {
  try {
    const { results } = await getPeople(`a`)
    const height = results.map((item) => parseInt(item.height))
    
    console.log('Alturas:', height)

    // const total = height.reduce((ant, prox) => {
    //   return ant + prox
    // })

    const myList = [
      ['Daniel', 'Andrew'],
      ['NodeBR', 'ReactJS']
    ]
    const total = myList.myReduce((ant, prox) => {
      return ant.concat(prox)
    }, [])
    .join(', ')

    console.log('Total:', total)
  } catch (error) {
    console.error(error)
  }
}

main()