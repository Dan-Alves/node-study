const { deepEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
  name: 'Batman',
  power: 'Rich',
  id: 1
}

describe('Suite de manipulação de Herois', () => {
  before(async () => {
    await database.register(DEFAULT_ITEM_CADASTRAR)
  })
  it('deve pesquisar um heroi usando arquivos', async () =>{
    const expected = DEFAULT_ITEM_CADASTRAR
    const [result]= await database.list(expected.id)

    deepEqual(result, expected)
  })

  it('deve cadastrar um heroi, usando arquivos', async () => {
    const expect = DEFAULT_ITEM_CADASTRAR
    const result = await database.register(DEFAULT_ITEM_CADASTRAR)
    const [current] = await database.list(DEFAULT_ITEM_CADASTRAR.id)

    deepEqual(current, expect)
  })
}) 