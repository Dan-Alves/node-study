/*  
 0 - Obter um usuario
 1 - Obter o número de telefone de um usuario a partir de seu id
 2 - Obter o endereco do usuario pelo id

*/

function getUser(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      name: 'Aladin',
      birth: new Date()
    })
  }, 1000)
}

function getTel(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      tel: '31569456',
      ddd: '21'
    })
  }, 2000)
}

function getEnd(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      street: 'Av. Central',
      number: 0
    })
  }, 2000)
}

function userResolve(error, user) {
  console.log('usuario', user)
}

getUser(function userResolve(error, user) {
  // null || "" || 0 === false
  if(error) {
    console.error('Problema com o usuario', error)
    return;
  }

  getTel(user.id, function telResolve(error1, tel) {
    if(error1) {
      console.error('Problema com o telefone', error)
      return;
    }
    getEnd(user.id, function endResolve(error2, end) {
      if(error2) {
        console.error('Problema com o endereço', error)
        return;
      }
      console.log(`
        name: ${user.name},
        end: ${end.street}, ${end.number}
        tel: (${tel.ddd}) ${tel.tel}
      `)
    })
  })
}) 

//const tel = getTel(usuario.id)

//console.log('telefone', tel)
