import drinkImg from '@/assets/images/wine-890370_640.svg'
import pastaImg from '@/assets/images/pasta-2571391_640.svg'
import riceImg from '@/assets/images/paella-2246527_640.svg'
import dessertImg from '@/assets/images/cheesecake-3761196_640.svg'
export const state = () => ({
  pages: [
    {
      name: 'top',
      path: '/'
    },
    {
      name: 'concept',
      path: '/concept'
    },
    {
      name: 'menu',
      path: '/menu'
    }
  ],
  menus: [
    {
      name: 'drink',
      src: drinkImg,
      path: '/menu/drink'
    },
    {
      name: 'pasta',
      src: pastaImg,
      path: '/menu/pasta'
    },
    {
      name: 'rice',
      src: riceImg,
      path: '/menu/rice'
    },
    {
      name: 'dessert',
      src: dessertImg,
      path: '/menu/dessert'
    }
  ],
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
  getPages: state => state.pages,
  getMenus: state => state.menus,
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
