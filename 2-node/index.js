/*  
 0 - Obter um usuario
 1 - Obter o número de telefone de um usuario a partir de seu id
 2 - Obter o endereco do usuario pelo id
*/
const util = require('util')
const getEndAsync = util.promisify(getEnd)

function getUser() {

  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        id: 1,
        name: 'Nik',
        birth: new Date()
      })
    }, 1000)

  })
}

function getTel(idUser) {
  
  return new Promise(function resolvePromise(resolve, reject) {
    
    setTimeout(() => {
      return resolve({
        tel: '31569456',
        ddd: '21'
      })
    }, 1000)

  })

}

function getEnd(idUser, callback) {

  setTimeout(() => {
    return callback(null, {
      street: 'Av. Central',
      number: 0
    })
  }, 1000)

}

main()
async function main() {
  try {
    console.time('medida-promise')
    const user = await getUser()
    const result = await Promise.all([
      getTel(user.id),
      getEndAsync(user.id)
    ])
    const tel = result[0]
    const end = result[1]
    

    console.log(`
       Nome: ${user.name}
       Endereco: ${end.street}, ${end.number}
       Telefone: (${tel.ddd}) ${tel.tel}
     `)
     console.timeEnd('medida-promise')
  }
  catch(error) {
    console.error(error)
  }
}
