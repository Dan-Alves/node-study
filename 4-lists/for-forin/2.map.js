const service = require('./service')

Array.prototype.myMap = function (callback) {
  const newArrayMap = []
  for(let i = 0; i <= this.length - 1; i++) {
    const result = callback(this[i], i)
    newArrayMap.push(result)
  }

  return newArrayMap;

}

const main = async () => {
  try {
    const results = await service.getPeople(`a`)
    //const names = []
    // results.results.forEach((item) => {
    //   names.push(item.name)
    // })

    // const names = results.results.map((pessoa) => {
    //   return pessoa.name
    // })

    const names = results.results.myMap((pessoa, i) => {
      return `[${i}]${pessoa.name}`
    })

    console.log('names', names)
  } catch (error) {
    console.error(error)
  }

}

main()