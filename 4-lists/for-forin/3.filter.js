const { getPeople } = require('./service')

Array.prototype.myFilter = function(callback) {
  const list = []
  for(index in this) {
    const item = this[index]
    const result = callback(item, index, this)
    // 0, "", null, undefined === false
    if(!result) continue;
    list.push(item)
  }
  return list;
}

async function main() {
  try {
    const { results } = await getPeople(`a`)

    // const familiaLars = results.filter((item) => {
    //   //did not find === -1
    //   const result = item.name.toLowerCase().indexOf(`lars`) !== -1
    //   return result
    // })

    const familiaLars = results.myFilter((item, index, list) => {
      console.log(`index: ${index}`, list.length)
      return item.name.toLowerCase().indexOf('lars') !== -1
    })

    const names = familiaLars.map((people) => people.name)
    console.log(names)

  } catch (error) {
    console.error(error)
  }
}

main()