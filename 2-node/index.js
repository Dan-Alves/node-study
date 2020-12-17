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

function getTel(idUsuario) {
  setTimeout(() => {
    return {
      tel: '31569524',
      ddd: '21'
    }
  }, 2000)
}

function getEnd(idUsuario) {

}

function userResolve(error, user) {
  console.log('usuario', user)
}

getUser(userResolve) 
//const tel = getTel(usuario.id)

//console.log('telefone', tel)
