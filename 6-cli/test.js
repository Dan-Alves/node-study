const { deepEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_ITEM_REGISTER = {
  name: 'Batman',
  power: 'Rich',
  id: 1
}

const DEFAULT_ITEM_UPDATE = {
  name: 'Green Lantern',
  power: 'Ring Strength',
  id: 2
}

describe('Suite de manipulação de Herois', () => {
  before(async () => {
    await database.register(DEFAULT_ITEM_REGISTER)
    await database.register(DEFAULT_ITEM_UPDATE)
  })
  it('deve pesquisar um heroi usando arquivos', async () =>{
    const expected = DEFAULT_ITEM_REGISTER
    const [result]= await database.list(expected.id)

    deepEqual(result, expected)
  })

  it('deve cadastrar um heroi, usando arquivos', async () => {
    const expect = DEFAULT_ITEM_REGISTER
    const result = await database.register(DEFAULT_ITEM_REGISTER)
    const [current] = await database.list(DEFAULT_ITEM_REGISTER.id)

    deepEqual(current, expect)
  })
  it('deve remover um heroi por id', async () => {
    const expected = true
    const result = await database.remove(DEFAULT_ITEM_REGISTER.id)
    deepEqual(result, expected)
  })
  it('deve atualizar um heroi pelo id', async () => {
    const expected = {
      ...DEFAULT_ITEM_UPDATE,
      name: 'Flash',
      power: 'Speed'
    }
    const newData = {
      name: 'Flash',
      power: 'Speed'
    }
    await database.update(DEFAULT_ITEM_UPDATE.id, newData)
    const [result] = await database.list(DEFAULT_ITEM_UPDATE.id)
    deepEqual(result, expected)
  })
}) 