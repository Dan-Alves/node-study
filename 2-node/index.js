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

const userPromise = getUser() 

userPromise
  .then(function (user) {
    return getTel(user.id)
      .then(function resolveTel(result) {
        return {
          usuario: {
            name: user.name,
            id: user.id
          },
          tel: result
        }
      })
  })  
  .then(function (resultado) {
    const end = getEndAsync(resultado.id)
    return end.then(function resolveEnd(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.tel,
        endereco: result
      }
    })
  })
  .then(function (resultado) {
    console.log(`
      Nome: ${resultado.usuario.name}
      Endereco: ${resultado.endereco.street}, ${resultado.endereco.number}
      Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.tel}
    `)
  })
  .catch(function (error) {
    console.error('Error', error)
  })

