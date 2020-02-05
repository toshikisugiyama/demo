export const state = () => ({
  drinks: [
    {
      id: 1,
      name: '生ビール',
      price: '280'
    },
    {
      id: 2,
      name: 'ハイボール',
      price: '360'
    }
  ],
  pastas: [
    {
      id: 1,
      name: 'キノコのクリームパスタ',
      price: '1000'
    },
    {
      id: 2,
      name: 'ナポリタンパスタ',
      price: '1360'
    }
  ],
  rices: [
    {
      id: 1,
      name: 'イカ墨のパエリア',
      price: '2000'
    },
    {
      id: 2,
      name: 'チーズリゾット',
      price: '1260'
    }
  ],
  desserts: [
    {
      id: 1,
      name: 'バニラアイス',
      price: '400'
    },
    {
      id: 2,
      name: 'レアチーズケーキ',
      price: '500'
    }
  ]
})

export const getters = {
  getDrinks: state => state.drinks,
  getPastas: state => state.pastas,
  getRices: state => state.rices,
  getDesserts: state => state.desserts
}

export const mutations = {
  addDrinks (state, data) {
    state.drinks.push(data.drink)
  },
  addPastas (state, data) {
    state.pastas.push(data.pasta)
  },
  addRices (state, data) {
    state.rices.push(data.rice)
  },
  addDesserts (state, data) {
    state.desserts.push(data.dessert)
  }
}
